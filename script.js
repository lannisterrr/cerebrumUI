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

// rating
const ratingStars = [...document.getElementsByClassName('rating__star')];
const ratingResult = document.querySelector('.rating__result');

//navLinks
const navLinks = document.querySelectorAll('.nav-links');

const showModal = () => {
  modal.classList.add('show-modal');
};

let flag = 0;

const handleLogoClick = e => {
  e.currentTarget.classList.toggle('down');
  if (!flag) {
    sidebar.classList.add('active');
    flag = 1;
  } else {
    sidebar.classList.remove('active');
    flag = 0;
  }
};

// Snackbar
snackBar.hidden = true;

const openBar = () => {
  snackBar.hidden = false;
};

const closeBar = () => {
  snackBar.hidden = true;
};

// Rating Logic
printRatingResult(ratingResult);

function executeRating(stars, result) {
  const starClassActive = 'rating__star fas fa-star';
  const starClassUnactive = 'rating__star far fa-star';
  const starsLength = stars.length;
  let i;
  stars.map(star => {
    star.onclick = () => {
      i = stars.indexOf(star);

      if (star.className.indexOf(starClassUnactive) !== -1) {
        printRatingResult(result, i + 1);
        for (i; i >= 0; --i) stars[i].className = starClassActive;
      } else {
        printRatingResult(result, i);
        for (i; i < starsLength; ++i) stars[i].className = starClassUnactive;
      }
    };
  });
}

function printRatingResult(result, num = 0) {
  result.textContent = `${num}`;
}

executeRating(ratingStars, ratingResult);

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

// Media Query JS

document.addEventListener('DOMContentLoaded', sideBarDisappear);

function sideBarDisappear() {
  let query = window.matchMedia('(max-width: 1250px)');

  if (query.matches) {
    //if the page is smaller than 1250 px
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', function () {
        // console.log(navLinks[i]);
        sidebar.classList.remove('active');
        flag = 0;
        logo.classList.remove('down');
      });
    }
    sidebar.classList.remove('active');
  } else {
    // if the page is bigger than 1250px
    // document.querySelector('h3').style.color = 'green';
  }
}
