import topNav from './modules/topNav/topNav.js';
import leftSideNav from './modules/leftNav/leftNav.js';
import mainContent from './modules/mainContent/mainContent.js';
import { videoEventListeners } from './modules/mainContent/events.js';
import leftNavEventListeners from './modules/leftNav/events.js';
import rightNavModal from './modules/rightNav/rightNavModal.js';
import topNavEvents from './modules/topNav/events.js';


const app = () => {
  return `
    ${topNav()}
    <section class="grid-container">
      ${leftSideNav()}
      ${mainContent()}
    </section>
    ${rightNavModal()}
  `
}

document.querySelector('#root').innerHTML = app();
videoEventListeners();
leftNavEventListeners();
topNavEvents();