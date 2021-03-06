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

  const previousButtons = document.querySelectorAll('.previous-button');
  for (let index = 0; index < previousButtons.length; index++) {
    const previousButton = previousButtons[index];
    previousButton.addEventListener('click', () => {
      document.querySelector('.side-nav').innerHTML = defaultLeftNav();
      defaultNavEventListeners();
      const previousPage = localStorage.getItem('previousPage');
      switchCurrentPage(previousPage);
    })
  }

  const dropdownDivs = document.querySelectorAll('.dropdown');
  for (let index = 0; index < dropdownDivs.length; index++) {
    const dropdownDiv = dropdownDivs[index];
    dropdownDiv.addEventListener('click', () => {
      dropdownDiv.nextElementSibling.classList.toggle('show');
    })
  }
}

export default settingsNavEventListeners;
