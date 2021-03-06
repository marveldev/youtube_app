import topNav from './modules/topNav/topNav.js';
import rightNavModal from './modules/rightNav/rightNav.js';
import { constants, switchCurrentPage } from './modules/helpers.js';
import { topNavEventListeners } from './modules/topNav/events.js';
import settingsNavEventListeners from './modules/settingsPage/settingsLeftNav/events.js';
import rightNavEventListeners from './modules/rightNav/events.js';
import defaultNavEventListeners from './modules/defaultLeftNav/events.js';
import defaultLeftNav from './modules/defaultLeftNav/defaultLeftNav.js';
import defaultPageEventListeners from './modules/defaultPage/events.js';

const app = () => {
  return `
    ${topNav()}
    <section id="main" class="grid-container">
      <section class="side-nav">
        ${defaultLeftNav()}
      </section>
      <section class="current-page">
      </section>
    </section>
    ${rightNavModal()}
    <section class="left-nav-modal">
      ${defaultLeftNav()}
    </section>
  `
}

document.querySelector('#root').innerHTML = app();

const currentPage = localStorage.getItem('currentPage');

if (currentPage === constants.SETTINGSPAGE) {
  switchCurrentPage(currentPage);
  settingsNavEventListeners();
}

switchCurrentPage(currentPage || 'defaultPage');
topNavEventListeners();
defaultNavEventListeners();
defaultPageEventListeners();
rightNavEventListeners();
