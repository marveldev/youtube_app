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

  const previousPageButton = document.querySelector('#previousPageButton');
  previousPageButton.addEventListener('click', () => {
    const previousPage = localStorage.getItem('previousPage')
    switchCurrentPage(previousPage)
    localStorage.setItem('modalLeftNav', 'false')
  })
}

export default settingsNavEventListeners;
