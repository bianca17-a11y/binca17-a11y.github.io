
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.querySelector('nav.main-nav ul');
  if (!toggle || !menu) return;
  toggle.addEventListener('click', function () { menu.classList.toggle('open'); });
  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { menu.classList.remove('open'); });
  });
});
