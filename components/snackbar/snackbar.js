// SnackBar
let showSnackBarButton = document.querySelector('.snackbar-button');
let closeSnackBarButton = document.querySelector('.close');
let snackBar = document.querySelector('.snack-bar-container');

// Snackbar Functions
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
