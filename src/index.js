$(function () {
    const isSubPage = window.location.pathname.includes('/objects/');
    const homePath = isSubPage ? '../index.html' : './index.html';

    // bodyの先頭にヘッダーのHTMLを割り込ませる
    $('body').prepend(`
        <header class="rac-header">
            <div class="rac-header-inner">
                <a href="${homePath}" class="rac-logo-link">
                    <h1 class="rac-logo">RAC</h1>
                </a>
                <nav class="rac-nav">
                    <a href="${homePath}" data-lang-key="rac.home">rac.home</a>
                </nav>
            </div>
        </header>
    `).append(`
        <footer class="rac-footer">
            <div class="rac-footer-inner">
                <p data-lang-key="rac.copyright">rac.copyright</p>
                <div class="rac-status">
                    <span class="status-indicator"></span>
                    <span data-lang-key="rac.status.active">rac.status.active</span>
                </div>
            </div>
        </footer>
    `);

    const rawMarkdownEl = document.getElementById('markdown-raw');
    if (rawMarkdownEl) {
        const rawMarkdown = rawMarkdownEl.textContent;
        // ② marked.jsを使ってHTMLに変換
        const htmlContent = marked.parse(rawMarkdown);
        // ③ 画面の表示用エリアに流し込む
        document.getElementById('content').innerHTML = htmlContent;
    }
});
