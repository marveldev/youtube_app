import defaultPage from './defaultPage/defaultPage.js';
import channelPage from './channelPage/channelPage.js';
import trendingPage from './trendingPage/trendingPage.js';
import watchHistoryPage from './watchHisoryPage/watchHistoryPage.js';
import settingsNav from './settingsPage/settingsLeftNav/settingsNav.js';
import accountPage from './settingsPage/accountPage/accountPage.js';
import notificationPage from './settingsPage/notificationPage/notificationPage.js';
import settingsNavEventListeners from './settingsPage/settingsLeftNav/events.js';
import performancePage from './settingsPage/performancePage/performancePage.js';
import defaultPageEventListeners from './defaultPage/events.js';
import videoWatchPage from './videosPage/videoPage.js';
import mobileSettingsPage from './mobileSettingsPage/settingsPage.js';

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
  VIDEOPAGE: 'videoPage',
  MOBILESETTINGSPAGE: 'mobileSettingsPage'
}

const switchCurrentPage = page => {
  const currentPage = document.querySelector('.current-page');
  const currentSideNav = document.querySelector('.side-nav');
  switch(page) {
    case 'homePage':
      currentPage.innerHTML = defaultPage();
      defaultPageEventListeners();
      localStorage.setItem('currentPage', constants.HOMEPAGE)
      localStorage.setItem('previousPage', constants.HOMEPAGE)
      localStorage.setItem('modalLeftNav', 'false')
      break;
    case 'settingsPage':
      currentSideNav.innerHTML = settingsNav();
      currentPage.innerHTML = accountPage();
      settingsNavEventListeners();
      localStorage.setItem('currentPage', constants.SETTINGSPAGE)
      localStorage.setItem('modalLeftNav', 'true')
      break;
    case 'channelPage':
      currentPage.innerHTML = channelPage();
      localStorage.setItem('currentPage', constants.CHANNELPAGE)
      localStorage.setItem('previousPage', constants.CHANNELPAGE)
      localStorage.setItem('modalLeftNav', 'false')
      break;
    case 'trendingPage':
      currentPage.innerHTML = trendingPage();
      localStorage.setItem('currentPage', constants.TRENDINGPAGE)
      localStorage.setItem('previousPage', constants.TRENDINGPAGE)
      localStorage.setItem('modalLeftNav', 'false')
      break;
    case 'watchHistoryPage':
      currentPage.innerHTML = watchHistoryPage();
      localStorage.setItem('currentPage', constants.WATCHHISTORYPAGE)
      localStorage.setItem('previousPage', constants.WATCHHISTORYPAGE)
      localStorage.setItem('modalLeftNav', 'false')
      break;
    case 'accountPage':
      currentSideNav.innerHTML = settingsNav();
      settingsNavEventListeners();
      currentPage.innerHTML = accountPage();
      localStorage.setItem('currentPage', constants.ACCOUNTPAGE)
      break;
    case 'notificationPage':
      currentSideNav.innerHTML = settingsNav();
      settingsNavEventListeners();
      currentPage.innerHTML = notificationPage();
      localStorage.setItem('currentPage', constants.NOTIFICATIONPAGE)
      break;
    case 'performancePage':
      currentSideNav.innerHTML = settingsNav();
      settingsNavEventListeners();
      currentPage.innerHTML = performancePage();
      localStorage.setItem('currentPage', constants.PERFORMANCEPAGE)
      break;
    case 'videoPage':
      currentSideNav.innerHTML = '';
      currentPage.innerHTML = videoWatchPage();
      defaultPageEventListeners();
      document.querySelector('#main').className = '';
      localStorage.setItem('currentPage', constants.VIDEOPAGE)
      localStorage.setItem('modalLeftNav', 'true')
      break;
    case 'mobileSettingsPage':
      currentPage.innerHTML = mobileSettingsPage();
      localStorage.setItem('currentPage', constants.MOBILESETTINGSPAGE)
      break;
    default:
      currentPage.innerHTML = defaultPage();
  }
}

export { switchCurrentPage, constants }
