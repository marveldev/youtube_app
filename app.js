import topNav from './modules/topNav/topNav.js';
import { homeContent, homeEventListeners } from './modules/defaultPage/homeContent.js';
import rightNavModal from './modules/rightNav/rightNavModal.js';
import { videoEventListeners } from './modules/defaultPage/homePage/events.js';
import leftNavEventListeners from './modules/defaultPage/leftNav/events.js';
import{ topNavEvents } from './modules/topNav/events.js';
import leftSideNav from './modules/defaultPage/leftNav/leftNav.js';
import homePage from './modules/defaultPage/homePage/homePage.js';
// import togglePages from './modules/activePage/events.js';
import { settingsContent, settingEventListeners } from './modules/settingsPage/settingsContent.js'

const app = () => {
  return `
    ${topNav()}
    <section class="left-side-nav">
      ${leftSideNav()}
    </section>
    <section class="current-page">
      ${homePage()}
    </section>
    <section id="page">
      ${settingsContent()}
    </section>
    ${rightNavModal()}
  `
}

document.querySelector('#root').innerHTML = app();
console.log(document.querySelector('#root'));
videoEventListeners();
leftNavEventListeners();
// topNavEvents();
// homeEventListeners();
// settingEventListeners();
