const logo = document.querySelector('.logo-click');
const sidebar = document.querySelector('.nav-menu');

let flag = 0;

function handleLogoClick() {
  this.classList.toggle('down');
  if (!flag) {
    sidebar.classList.add('active');
    flag = 1;
  } else {
    sidebar.classList.remove('active');
    flag = 0;
  }
}

window.addEventListener('resize', function () {
  if (window.innerWidth < 600) resize.classList.remove('active');
});

logo.addEventListener('click', handleLogoClick);
