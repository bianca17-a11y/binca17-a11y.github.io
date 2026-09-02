(function () {
  var isEnglishPage = window.location.pathname.includes('-en.html');
  var userChose = localStorage.getItem('langChoice');
  var browserLang = navigator.language || navigator.userLanguage;

  if (!userChose && browserLang.startsWith('en') && !isEnglishPage) {
    var enVersion = window.location.pathname.replace('.html', '-en.html');
    window.location.href = enVersion;
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
