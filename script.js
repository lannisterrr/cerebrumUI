const logo = document.querySelector('.logo-click');
const sidebar = document.querySelector('.nav-menu');
// Modal
const modal = document.querySelector('.modal-overlay');
const modalShow = document.querySelector('.show-modal');
const modalClose = document.querySelector('.close-modal');
const modalButton = document.querySelector('.modal-button');
const modalCloseButton = document.getElementById('modal-close-button');

// SnackBar
let showSnackBarButton = document.querySelector('.snackbar-button');
let closeSnackBarButton = document.querySelector('.close');
let snackBar = document.querySelector('.snack-bar-container');

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

// Snackbar
snackBar.hidden = true;

const openBar = () => {
  snackBar.hidden = false;
};

const closeBar = () => {
  snackBar.hidden = true;
};

// snackbar event handlers
closeSnackBarButton.addEventListener('click', closeBar);
showSnackBarButton.addEventListener('click', openBar);

logo.addEventListener('click', handleLogoClick);

// Modal
modalButton.addEventListener('click', showModal);

modalCloseButton.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});
