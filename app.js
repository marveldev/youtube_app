import topNav from './modules/topNav/topNav.js';
import leftSideNav from './modules/leftNav/leftNav.js';
import homePage from './modules/homePage/homePage.js';
import { videoEventListeners } from './modules/homePage/events.js';
import leftNavEventListeners from './modules/leftNav/events.js';
import rightNavModal from './modules/rightNav/rightNavModal.js';
import{ topNavEvents } from './modules/topNav/events.js';
import togglePages from './modules/activePage/events.js';

const app = () => {
  const currentPage = localStorage.getItem('activePage');

  return `
    ${topNav()}
    <section class="grid-container">
      ${leftSideNav()}
      <section id="activePage">
        ${currentPage ? currentPage : homePage()}
      </section>
    </section>
    ${rightNavModal()}
  `
}

document.querySelector('#root').innerHTML = app();
videoEventListeners();
leftNavEventListeners();
topNavEvents();
togglePages();
