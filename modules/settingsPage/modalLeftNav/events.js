const modalLeftNavEventListeners = () => {
  document.querySelector('#burgerIcon').addEventListener('click', () => {
    overlay.style.display = 'none';
    document.querySelector('.modal-left-nav').style.display = 'none';
  })
}

export default modalLeftNavEventListeners;
