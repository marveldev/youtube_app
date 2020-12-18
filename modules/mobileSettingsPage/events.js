const mobileEventListeners = () => {
  const settingButtons = document.querySelectorAll('.setting-button');
  for (let index = 0; index < settingButtons.length; index++) {
    const settingButton = settingButtons[index];
    settingButton.addEventListener('click', () => {
      settingButton.nextElementSibling.classList.toggle('show');
    })
    
  }
}

export default mobileEventListeners;
