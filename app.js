(() => {
  'use strict';

  const modules = window.STUDY_DATA?.modules || [];
  const stateKey = 'ai-training-api-cards-progress-v1';
  const svgByModule = {
    opencv_basics: 'assets/opencv-basics.svg',
    image_preprocessing: 'assets/image-preprocessing.svg',
    matplotlib_display: 'assets/matplotlib-display.svg',
    pandas_basics: 'assets/pandas-basics.svg',
    pandas_cleaning: 'assets/pandas-cleaning.svg',
    sklearn_training: 'assets/sklearn-training.svg'
  };
  let progress = loadProgress();
  let activeModule = modules[0];

  function loadProgress() {
    try { return JSON.parse(localStorage.getItem(stateKey)) || {}; } catch { return {}; }
  }
  function saveProgress() { localStorage.setItem(stateKey, JSON.stringify(progress)); updateProgress(); }
  function escapeHtml(value = '') { return String(value).replace(/[&<>'"]/g, char => ({ '&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;' })[char]); }
  function code(value = '') { return `<pre class="code"><code>${escapeHtml(value)}</code></pre>`; }
  function markdown(value = '') {
    const escaped = escapeHtml(value);
    const blocks = escaped.split(/```(?:python)?\n?([\s\S]*?)```/g);
    return blocks.map((block, index) => {
      if (index % 2) return code(block.trim());
      return block.split('\n').map(line => {
        if (line.startsWith('### ')) return `<h3>${line.slice(4)}</h3>`;
        if (line.startsWith('## ')) return `<h2>${line.slice(3)}</h2>`;
        if (line.startsWith('# ')) return `<h1>${line.slice(2)}</h1>`;
        if (line.startsWith('- ')) return `<li>${inline(line.slice(2))}</li>`;
        return line.trim() ? `<p>${inline(line)}</p>` : '';
      }).join('').replace(/(<li>.*?<\/li>)+/g, match => `<ul>${match}</ul>`);
    }).join('');
  }
  function inline(text) { return text.replace(/`([^`]+)`/g, '<code>$1</code>'); }
  function card(title, body, extraClass = '') { return `<details class="card ${extraClass}" open><summary>${title}</summary><div class="card-body">${body}</div></details>`; }
  function answerButton(answer) { return `<button class="answer" type="button" data-answer="${encodeURIComponent(answer)}">查看参考答案</button>`; }
  function explanation(item) {
    const data = item.explanation;
    if (!data) return '';
    const elements = (data.elements || []).map(row => `<li><strong>${escapeHtml(row.name)}</strong>：${escapeHtml(row.plain || row.desc)}${row.value ? `（${escapeHtml(row.value)}）` : ''}</li>`).join('');
    const tables = (data.tables || []).map(table => `<div class="table-wrap"><strong>${escapeHtml(table.title)}</strong><table><thead><tr>${table.headers.map(h => `<th>${escapeHtml(h)}</th>`).join('')}</tr></thead><tbody>${table.rows.map(row => `<tr>${row.map(cell => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`).join('');
    return `<div class="explain"><p><strong>一句话：</strong>${escapeHtml(data.oneliner || '')}</p><p><strong>理解它：</strong>${escapeHtml(data.analogy || '')}</p>${elements ? `<ul>${elements}</ul>` : ''}${tables}${data.flow ? `<ol class="flow">${data.flow.map(step => `<li>${escapeHtml(step)}</li>`).join('')}</ol>` : ''}<p><strong>小结：</strong>${escapeHtml(data.summary || '')}</p></div>`;
  }
  function items(items, type) {
    return items.map((item, index) => `<article class="item"><p class="section-label">${type} ${index + 1}</p><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.description || '')}</p>${item.code_template ? code(item.code_template) : ''}${item.expected_output ? `<p><strong>预期输出</strong></p>${code(item.expected_output)}` : ''}${explanation(item)}${item.hint ? `<p><strong>提示：</strong>${escapeHtml(item.hint)}</p>` : ''}${item.answer ? `${answerButton(item.answer)}<div class="answer-content" hidden></div>` : ''}</article>`).join('');
  }
  function testFor(module) {
    const source = module.examQuestions?.[0] || module.exercises?.[0];
    if (!source) return '';
    const keys = source.check_keywords || [];
    const prompt = source.description || `回忆「${source.title}」的关键步骤。`;
    return card('自测：写下关键代码或步骤', `<div class="question" data-module="${module.id}" data-keys="${encodeURIComponent(JSON.stringify(keys))}"><p><strong>${escapeHtml(source.title)}</strong></p><p>${escapeHtml(prompt)}</p><textarea class="response" rows="5" placeholder="在这里写出你记得的关键代码或步骤…" aria-label="${escapeHtml(source.title)} 答案"></textarea><button class="check" type="button">检查回忆</button><div class="feedback" hidden></div><div class="answer-content" hidden>${code(source.answer || source.code_template || '')}</div><button class="answer reveal-test" type="button">查看参考答案</button></div>`, 'self-test');
  }
  function renderNav() {
    document.querySelector('#module-list').innerHTML = modules.map((module, index) => `<button class="module-button ${module.id === activeModule?.id ? 'active' : ''}" type="button" data-id="${module.id}"><span class="number">${String(index + 1).padStart(2, '0')}</span><strong>${escapeHtml(module.title)}</strong><small>${escapeHtml(module.description)}</small></button>`).join('');
  }
  function renderModule() {
    const module = activeModule;
    if (!module) { document.querySelector('#module-detail').innerHTML = '<p class="empty">未找到学习资料。</p>'; return; }
    const visual = svgByModule[module.id]
      ? `<img class="visual" src="${svgByModule[module.id]}" alt="${escapeHtml(module.title)} 知识卡" />`
      : `<div class="module-intro"><p class="section-label">逻辑卡</p><h2>SimpleKernel：学习 → 查表 → 回复</h2><p>把问答对写进 <code>patterns</code>；<code>learn</code> 负责记住，<code>respond</code> 负责把输入标准化后查找，找不到则返回默认回答。</p></div>`;
    document.querySelector('#module-detail').innerHTML = `<div class="module-intro"><p class="section-label">模块 ${String(modules.indexOf(module) + 1).padStart(2, '0')}</p><h2>${escapeHtml(module.title)}</h2><p>${escapeHtml(module.description)}</p></div>${visual}${card('知识速记', `<div class="markdown">${markdown(module.knowledge)}</div>`)}${card(`示例演练 · ${module.examples.length} 题`, items(module.examples, '示例'))}${card(`动手练习 · ${module.exercises.length} 题`, items(module.exercises, '练习'))}${card(`实考题 · ${module.examQuestions.length} 题`, items(module.examQuestions, '实考'))}${testFor(module)}`;
  }
  function updateProgress() {
    const completed = modules.filter(module => progress[module.id]).length;
    const percent = modules.length ? Math.round(completed / modules.length * 100) : 0;
    document.querySelector('#progress-bar').style.width = `${percent}%`;
    document.querySelector('#progress-text').textContent = `已完成 ${completed} / ${modules.length} 个模块 · ${percent}%`;
  }
  document.addEventListener('click', event => {
    const moduleButton = event.target.closest('.module-button');
    if (moduleButton) { activeModule = modules.find(module => module.id === moduleButton.dataset.id); renderNav(); renderModule(); document.querySelector('#module-detail').scrollIntoView({ behavior: 'smooth', block: 'start' }); return; }
    const answer = event.target.closest('[data-answer]');
    if (answer) { const target = answer.nextElementSibling; target.innerHTML = code(decodeURIComponent(answer.dataset.answer)); target.hidden = !target.hidden; answer.textContent = target.hidden ? '查看参考答案' : '收起参考答案'; return; }
    const reveal = event.target.closest('.reveal-test');
    if (reveal) { const target = reveal.previousElementSibling; target.hidden = !target.hidden; reveal.textContent = target.hidden ? '查看参考答案' : '收起参考答案'; return; }
    const check = event.target.closest('.check');
    if (check) {
      const question = check.closest('.question'); const response = question.querySelector('.response').value.toLowerCase(); const keys = JSON.parse(decodeURIComponent(question.dataset.keys));
      const matched = keys.filter(key => response.includes(String(key).toLowerCase())); const needed = Math.max(1, Math.ceil(keys.length * .6)); const pass = matched.length >= needed;
      const feedback = question.querySelector('.feedback'); feedback.hidden = false; feedback.className = `feedback ${pass ? 'correct' : 'retry'}`;
      feedback.textContent = pass ? `记得很好：命中 ${matched.length}/${keys.length} 个关键点，本模块已标记完成。` : `还差一点：命中 ${matched.length}/${keys.length} 个关键点。可对照参考答案再试一次。`;
      if (pass) { progress[question.dataset.module] = true; saveProgress(); }
    }
  });
  document.querySelector('#reset-progress').addEventListener('click', () => { progress = {}; localStorage.removeItem(stateKey); updateProgress(); });
  renderNav(); renderModule(); updateProgress();
})();
