(function () {
  var isEnglishPage = window.location.pathname.includes('/en/');
  var userChose = localStorage.getItem('langChoice');
  var browserLang = navigator.language || navigator.userLanguage;

  if (!userChose) {
    if (browserLang.startsWith('en') && !isEnglishPage) {
      window.location.href = '/en/index.html';
    }
    // If browser isn't English and page isn't English, do nothing — Slovak is already showing.
  }
})();
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('nav.main-nav ul');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', function () { menu.classList.toggle('open'); });
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { menu.classList.remove('open'); });
  });
});
