import { switchCurrentPage, constants } from '../../helpers.js';
import defaultLeftNav from '../../homePage/defaultLeftNav/defaultLeftNav.js';
import defaultNavEventListeners from '../../homePage/defaultLeftNav/events.js';

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
    const currentSideNav = document.querySelector('.side-nav');
    currentSideNav.innerHTML = defaultLeftNav();
    console.log('ok');
    const previousPage = localStorage.getItem('previousPage')
    switchCurrentPage(previousPage)
  })

}

export default settingsNavEventListeners;
