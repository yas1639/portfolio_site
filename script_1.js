// スクロールイベントを監視する
window.addEventListener('scroll', function () {
    // クラス名 "fade-in" を持つすべての要素を取得
    const fadeInElements = document.querySelectorAll('.fade-in');

    // 各 "fade-in" 要素に対して処理を行う
    fadeInElements.forEach(function (element) {
        // 要素の位置が画面内に入ったかどうかをチェック
        if (element.getBoundingClientRect().top < window.innerHeight) {
            // 要素が画面内に入ったら、"appear" クラスを追加
            element.classList.add('appear');
        }
    });
});

// ページ読み込み後に実行
document.addEventListener('DOMContentLoaded', function () {
    // .menu-toggle と .nav-links の要素を取得
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    // ハンバーガーアイコンがクリックされた時の処理
    menuToggle.addEventListener('click', function () {
        // nav-links に 'active' クラスを付け外しする（表示/非表示を切り替える）
        navLinks.classList.toggle('active');
    });
});