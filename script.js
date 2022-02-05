const logo = document.querySelector('.logo-click');
const sidebar = document.querySelector('.nav-menu');
const modal = document.querySelector('.modal-overlay');
const modalShow = document.querySelector('.show-modal');
const modalClose = document.querySelector('.close-modal');
const modalButton = document.querySelector('.modal-button');
const modalCloseButton = document.getElementById('modal-close-button');

function showModal() {
  modal.classList.add('show-modal');
}

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

logo.addEventListener('click', handleLogoClick);

modalButton.addEventListener('click', showModal);

modalCloseButton.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});
