const modal = document.querySelector('.modal-overlay');
const modalShow = document.querySelector('.show-modal');
const modalClose = document.querySelector('.close-modal');
const modalButton = document.querySelector('.modal-button');
const modalCloseButton = document.getElementById('modal-close-button');

function showModal() {
  modal.classList.add('show-modal');
}

modalButton.addEventListener('click', showModal);

modalCloseButton.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});

modalClose.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});
