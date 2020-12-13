import defaultLeftNav from './homePage/defaultLeftNav/defaultLeftNav.js';
import defaultPage from './homePage/defaultPage/defaultPage.js';
import channelPage from './homePage/channelPage/channelPage.js';
import trendingPage from './homePage/trendingPage/trendingPage.js';
import watchHistoryPage from './homePage/watchHisoryPage/watchHistoryPage.js';
import settingsNav from './settingsPage/settingsLeftNav/settingsNav.js';
import accountPage from './settingsPage/accountPage/accountPage.js';
import notificationPage from './settingsPage/notificationPage/notificationPage.js';
import settingsNavEventListeners from './settingsPage/settingsLeftNav/events.js';
import performancePage from './settingsPage/performancePage/performancePage.js';
import defaultNavEventListeners from './homePage/defaultLeftNav/events.js';

const constants = {
  HOMEPAGE: 'homePage',
  CHANNELPAGE: 'channelPage',
  TRENDINGPAGE: 'trendingPage',
  WATCHHISTORYPAGE: 'watchHistoryPage',
  DEFAULTPAGE: 'defaultPage',
  SETTINGSPAGE : 'settingsPage',
  ACCOUNTPAGE: 'accountPage',
  NOTIFICATIONPAGE: 'notificationPage',
  PERFORMANCEPAGE: 'performancePage',
}

const switchCurrentPage = page => {
  const currentPage = document.querySelector('.current-page');
  const currentSideNav = document.querySelector('.side-nav');
  switch(page) {
    case 'homePage':
      currentPage.innerHTML = defaultPage();
      defaultNavEventListeners();
      localStorage.setItem('currentPage', constants.HOMEPAGE)
      localStorage.setItem('previousPage', constants.HOMEPAGE)
      break;
    case 'settingsPage':
      currentSideNav.innerHTML = settingsNav();
      currentPage.innerHTML = accountPage();
      settingsNavEventListeners();
      localStorage.setItem('currentPage', constants.SETTINGSPAGE)
      localStorage.setItem('currentleftNav', 'settingsNav')
      break;
    case 'channelPage':
      currentSideNav.innerHTML = defaultLeftNav();
      currentPage.innerHTML = channelPage();
      defaultNavEventListeners();
      localStorage.setItem('currentPage', constants.CHANNELPAGE)
      localStorage.setItem('currentleftNav', 'defaultNav')
      break;
    case 'trendingPage':
      currentPage.innerHTML = trendingPage();
      defaultNavEventListeners();
      localStorage.setItem('currentPage', constants.TRENDINGPAGE)
      localStorage.setItem('previousPage', constants.TRENDINGPAGE)
      break;
    case 'watchHistoryPage':
      currentPage.innerHTML = watchHistoryPage();
      defaultNavEventListeners();
      localStorage.setItem('currentPage', constants.WATCHHISTORYPAGE)
      localStorage.setItem('previousPage', constants.WATCHHISTORYPAGE)
      break;
    case 'defaultPage':
      currentSideNav.innerHTML = defaultLeftNav();
      currentPage.innerHTML = defaultPage();
      defaultNavEventListeners();
      localStorage.setItem('currentPage', constants.DEFAULTPAGE)
      localStorage.setItem('currentleftNav', 'defaultNav')
      break;
    case 'accountPage':
      currentPage.innerHTML = accountPage();
      localStorage.setItem('currentPage', constants.ACCOUNTPAGE)
      break;
    case 'notificationPage':
      currentPage.innerHTML = notificationPage();
      localStorage.setItem('currentPage', constants.NOTIFICATIONPAGE)
      break;
    case 'performancePage':
      currentPage.innerHTML = performancePage();
      localStorage.setItem('currentPage', constants.PERFORMANCEPAGE)
      break;
    default:
      currentPage.innerHTML = defaultPage();
  }
}

export { switchCurrentPage, constants }
