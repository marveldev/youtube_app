import topNav from './modules/topNav/topNav.js';
import rightNavModal from './modules/rightNav/rightNavModal.js';
import leftNavEventListeners from './modules/defaultPage/leftNav/events.js';
import leftSideNav from './modules/defaultPage/leftNav/leftNav.js';
import { constants, switchCurrentPage } from './modules/helpers.js';
import { topNavEventListeners } from './modules/topNav/events.js';
import settingsNavEventListeners from './modules/settingsPage/leftNav/events.js';
import rightNavEventListeners from './modules/rightNav/events.js';
import modalLeftNav from './modules/settingsPage/modalLeftNav/modalLeftNav.js';

const app = () => {
  return `
    <section class="top-nav-content">
      ${topNav()}
    </section>
    <section class="grid-container">
      <section class="side-nav">
        ${leftSideNav()}
      </section>
      <section class="current-page">
      </section>
    </section>
    ${rightNavModal()}
    ${modalLeftNav()}
  `
}

document.querySelector('#root').innerHTML = app();

const currentPage = localStorage.getItem('currentPage');
switchCurrentPage(currentPage || 'homePage');

if (currentPage === constants.SETTINGSPAGE) {
  settingsNavEventListeners();
} else {
  topNavEventListeners();
  leftNavEventListeners();
  rightNavEventListeners();
}
