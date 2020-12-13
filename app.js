import topNav from './modules/topNav/topNav.js';
import rightNavModal from './modules/rightNav/rightNav.js';
import { constants, switchCurrentPage } from './modules/helpers.js';
import { topNavEventListeners } from './modules/topNav/events.js';
import settingsNavEventListeners from './modules/settingsPage/settingsLeftNav/events.js';
import rightNavEventListeners from './modules/rightNav/events.js';
import defaultNavEventListeners from './modules/homePage/defaultLeftNav/events.js';
import defaultLeftNav from './modules/homePage/defaultLeftNav/defaultLeftNav.js';
import { homeEventListeners } from './modules/homePage/defaultPage/events.js';
import videoPageEventListeners from './modules/videosPage/videoPage.js';

const app = () => {
  return `
    ${topNav()}
    <section class="grid-container">
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
    <section class="video-page">
      ${videoPageEventListeners()}
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
rightNavEventListeners();
defaultNavEventListeners();
homeEventListeners();
