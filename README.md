# AI 实操速记卡

一个无需构建工具的移动端静态学习站，整理自指定的人工智能训练师三级 Python 实操题库。

## 使用

直接打开 `index.html`，或用任意静态服务器在本目录启动。GitHub Pages 部署时，将此目录作为发布根目录即可；所有资源均使用相对路径，因此可部署在项目子路径。

## 功能

- 7 个题库模块，包含知识、示例、练习与实考题
- 6 张原有 SVG 学习卡，AIML 使用原生逻辑卡
- 每个模块有关键词回忆自测与即时反馈
- 完成状态保存于浏览器的 localStorage（键：`ai-training-api-cards-progress-v1`）

题库内容来自 `practicalExamSeed.json`，不含任何密钥或外部依赖。
