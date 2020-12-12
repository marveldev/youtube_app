import topNav from './modules/topNav/topNav.js';
import rightNavModal from './modules/rightNav/rightNav.js';
import { constants, switchCurrentPage } from './modules/helpers.js';
import { topNavEventListeners } from './modules/topNav/events.js';
import settingsNavEventListeners from './modules/settingsPage/settingsLeftNav/events.js';
import rightNavEventListeners from './modules/rightNav/events.js';
import modalLeftNav from './modules/settingsPage/modalLeftNav/modalLeftNav.js';
import defaultNavEventListeners from './modules/homePage/defaultLeftNav/events.js';
import defaultLeftNav from './modules/homePage/defaultLeftNav/defaultLeftNav.js';
import modalLeftNavEventListeners from './modules/settingsPage/modalLeftNav/events.js';

const app = () => {
  return `
    <section class="top-nav-page">
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
const currentNav = localStorage.getItem('currentNav');

if (currentNav === constants.SETTINGSNAV) {
  switchCurrentPage(currentNav);
  switchCurrentPage(currentPage);
  settingsNavEventListeners();
}

switchCurrentPage(currentNav || 'defaultNav');
switchCurrentPage(currentPage || 'homePage');
modalLeftNavEventListeners();
topNavEventListeners();
rightNavEventListeners();
defaultNavEventListeners();
