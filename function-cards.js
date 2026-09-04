(() => {
  'use strict';
  const data = window.FUNCTION_CARDS_DATA || { categories: [], cards: [] };
  const cards = Array.isArray(data.cards) ? data.cards : [];
  const categories = Array.isArray(data.categories) ? data.categories : [];
  const escapeHtml = (value = '') => String(value).replace(/[&<>'"]/g, char => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', "'":'&#39;', '"':'&quot;' })[char]);
  const categoryById = Object.fromEntries(categories.map(category => [category.id, category.label]));
  let selectedCategory = 'all';
  let activeIndex = 0;
  const categoryList = document.querySelector('#function-category-list');
  const library = document.querySelector('#function-library');
  const cardRoot = document.querySelector('#function-card');
  const position = document.querySelector('#function-position');
  const previous = document.querySelector('#function-previous');
  const next = document.querySelector('#function-next');
  const visibleCards = () => selectedCategory === 'all' ? cards : cards.filter(card => card.category === selectedCategory);
  function renderCategories() {
    const choices = [{ id: 'all', label: `全部 ${cards.length} 张` }, ...categories];
    categoryList.innerHTML = choices.map(choice => `<button class="function-category ${choice.id === selectedCategory ? 'active' : ''}" type="button" data-category="${escapeHtml(choice.id)}">${escapeHtml(choice.label)}</button>`).join('');
  }
  function renderLibrary() {
    library.innerHTML = categories.map(category => {
      const cardsInCategory = cards.filter(card => card.category === category.id);
      return `<details class="function-library-group"><summary>${escapeHtml(category.label)} <span>${cardsInCategory.length} 张</span></summary><ul>${cardsInCategory.map(card => `<li>${escapeHtml(card.name)}</li>`).join('')}</ul></details>`;
    }).join('');
  }
  function renderCard() {
    const visible = visibleCards();
    if (!visible.length) { cardRoot.innerHTML = '<p class="empty">这个分类暂时没有函数卡。</p>'; position.textContent = '第 0 / 0 张'; previous.disabled = true; next.disabled = true; return; }
    activeIndex = Math.max(0, Math.min(activeIndex, visible.length - 1));
    const card = visible[activeIndex];
    const rows = (card.params || []).map(([name, description]) => `<tr><th scope="row">${escapeHtml(name)}</th><td>${escapeHtml(description)}</td></tr>`).join('');
    cardRoot.innerHTML = `<p class="function-card-kicker">${escapeHtml(categoryById[card.category] || card.category)}</p><h2>${escapeHtml(card.name)}</h2><p class="function-meaning"><strong>名字意思：</strong>${escapeHtml(card.meaning)}</p><p class="function-usage">${escapeHtml(card.usage)}</p><section><h3>参数说明</h3><div class="table-wrap"><table><tbody>${rows}</tbody></table></div></section><section><h3>代码示例</h3><pre class="code"><code>${escapeHtml(card.example)}</code></pre></section><section class="mnemonic"><h3>记忆钩子</h3><p>${escapeHtml(card.mnemonic)}</p></section><p class="function-caution"><strong>注意：</strong>${escapeHtml(card.caution)}</p>`;
    position.textContent = `第 ${activeIndex + 1} / ${visible.length} 张`;
    previous.disabled = activeIndex === 0;
    next.disabled = activeIndex === visible.length - 1;
  }
  function changeCard(offset) { activeIndex += offset; renderCard(); cardRoot.focus({ preventScroll: true }); }
  categoryList.addEventListener('click', event => { const button = event.target.closest('[data-category]'); if (!button) return; selectedCategory = button.dataset.category; activeIndex = 0; renderCategories(); renderCard(); });
  previous.addEventListener('click', () => changeCard(-1));
  next.addEventListener('click', () => changeCard(1));
  document.addEventListener('keydown', event => {
    if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    const focused = document.activeElement;
    if (focused && focused.matches('input, textarea, select, [contenteditable="true"]')) return;
    if (event.key === 'ArrowLeft' && !previous.disabled) { event.preventDefault(); changeCard(-1); }
    if (event.key === 'ArrowRight' && !next.disabled) { event.preventDefault(); changeCard(1); }
  });
  renderCategories(); renderLibrary(); renderCard();
})();
