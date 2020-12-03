import topNav from './modules/topNav/topNav.js';
import homeContent from './modules/defaultPage/homeContent.js';
import rightNavModal from './modules/rightNav/rightNavModal.js';
import { videoEventListeners } from './modules/defaultPage/homePage/events.js';
import leftNavEventListeners from './modules/defaultPage/leftNav/events.js';
import{ topNavEvents } from './modules/topNav/events.js';
import togglePages from './modules/activePage/events.js';
import settingsContent from './modules/settingsPage/settingsContent.js'

const app = () => {
  return `
    ${topNav()}
    <section class="current-page">
      ${homeContent()}
    </section>
    ${rightNavModal()}
    <section class="pages">
      ${settingsContent()}
    </section>
  `
}

document.querySelector('#root').innerHTML = app();
videoEventListeners();
leftNavEventListeners();
topNavEvents();
togglePages();
