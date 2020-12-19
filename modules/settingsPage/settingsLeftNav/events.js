import defaultLeftNav from '../../defaultLeftNav/defaultLeftNav.js';
import defaultNavEventListeners from '../../defaultLeftNav/events.js';
import { switchCurrentPage, constants } from '../../helpers.js';

const settingsNavEventListeners = () => {
  const addSwitchPageEvent = (selector, constant) => {
    selector.addEventListener('click', () => {
      switchCurrentPage(constant);
    })
  }
  addSwitchPageEvent(document.querySelector('.account'), constants.ACCOUNTPAGE);
  addSwitchPageEvent(document.querySelector('.notification'), constants.NOTIFICATIONPAGE);
  addSwitchPageEvent(document.querySelector('.performance'), constants.PERFORMANCEPAGE);

  document.querySelector('#previousPageButton').addEventListener('click', () => {
    document.querySelector('.side-nav').innerHTML = defaultLeftNav();
    defaultNavEventListeners();
    const previousPage = localStorage.getItem('previousPage')
    switchCurrentPage(previousPage)
    localStorage.setItem('modalLeftNav', 'false')
  })

  const settingButtons = document.querySelectorAll('.setting-button');
  for (let index = 0; index < settingButtons.length; index++) {
    const settingButton = settingButtons[index];
    settingButton.addEventListener('click', () => {
      settingButton.nextElementSibling.classList.toggle('show');
    })
  }
}

export default settingsNavEventListeners;
