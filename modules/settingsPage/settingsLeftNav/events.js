import { switchCurrentPage, constants } from '../../helpers.js';

const settingsNavEventListeners = () => {
  const switchPages = (selector, constant) => {
    selector.addEventListener('click', () => {
      switchCurrentPage(constant);
    })
  }
  switchPages(document.querySelector('.account'), constants.ACCOUNTPAGE);
  switchPages(document.querySelector('.notification'), constants.NOTIFICATIONPAGE);
}

export default settingsNavEventListeners;
