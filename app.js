import topNav from './modules/topNav/topNav.js';
import rightNavModal from './modules/rightNav/rightNav.js';
import { constants, switchCurrentPage } from './modules/helpers.js';
import { topNavEventListeners } from './modules/topNav/events.js';
import settingsNavEventListeners from './modules/settingsPage/settingsLeftNav/events.js';
import rightNavEventListeners from './modules/rightNav/events.js';
import modalLeftNav from './modules/settingsPage/modalLeftNav/modalLeftNav.js';
import defaultNavEventListeners from './modules/homePage/defaultLeftNav/events.js';
import defaultLeftNav from './modules/homePage/defaultLeftNav/defaultLeftNav.js';

const app = () => {
  return `
    <section class="top-nav-content">
      ${topNav()}
    </section>
    <section class="grid-container">
      <section class="side-nav">
        ${defaultLeftNav()}
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
  defaultNavEventListeners();
  rightNavEventListeners();
}
