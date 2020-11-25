import topNav from './modules/topNav/topNav.js';
import leftSideNav from './modules/leftNav/leftNav.js';
import homePage from './modules/homePage/homePage.js';
import { videoEventListeners } from './modules/homePage/events.js';
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
      ${homePage()}
      ${trendingPage()}
      ${watchHistoryPage()}
      ${channelPage()}
    </section>
  `
}

document.querySelector('#root').innerHTML = app();
videoEventListeners();
leftNavEventListeners();
topNavEvents();
togglePages();
