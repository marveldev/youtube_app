import topNav from './modules/topNav/topNav.js';
import leftSideNav from './modules/leftNav/leftNav.js';
import homePage from './modules/homePage/homePage.js';
import { videoEventListeners } from './modules/homePage/events.js';
import leftNavEventListeners from './modules/leftNav/events.js';
import rightNavModal from './modules/rightNav/rightNavModal.js';
import{ topNavEvents } from './modules/topNav/events.js';
import togglePages from './modules/activePage/events.js';
import settingsNav from './modules/settingsPage/settingsNav.js';
import accountPage from './modules/settingsPage/accountPage.js';

const app = () => {
  const currentPage = localStorage.getItem('activePage');

  return `
    ${topNav()}
    <section class="current-page">
      <section class="home-container">
        ${leftSideNav()}
        <section id="activePage">
          ${currentPage ? currentPage : homePage()}
        </section>
      </section>
    </section>
    ${rightNavModal()}
    <section class="settings-container">
      ${settingsNav()}
      <section>
        ${accountPage()}
      </section>
    </section>
  `
}

document.querySelector('#root').innerHTML = app();
videoEventListeners();
leftNavEventListeners();
topNavEvents();
togglePages();
