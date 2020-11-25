import topNav from './modules/topNav/topNav.js';
import leftSideNav from './modules/leftNav/leftNav.js';
import mainContent from './modules/mainContent/mainContent.js';
import { videoEventListeners } from './modules/mainContent/events.js';
import leftNavEventListeners from './modules/leftNav/events.js';
import rightNavModal from './modules/rightNav/rightNavModal.js';
import{ topNavEvents } from './modules/topNav/events.js';
import trendingPage from './modules/trendingPage/trending.js';
import channelPage from './modules/channelPage/channel.js';
import watchHistoryPage from './modules/watchHisoryPage/watchHistory.js';
import activePage from './modules/activePage/activePage.js';
import togglePages from './modules/activePage/events.js';

const app = () => {
  return `
    ${topNav()}
    <section class="grid-container">
      ${leftSideNav()}
      ${activePage()}
    </section>
    ${rightNavModal()}
    <section class="pages">
      ${mainContent()}
      ${trendingPage()}
      ${channelPage()}
      ${watchHistoryPage()}
    </section>
  `
}

document.querySelector('#root').innerHTML = app();
videoEventListeners();
leftNavEventListeners();
topNavEvents();
togglePages();
