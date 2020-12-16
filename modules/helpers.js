import defaultLeftNav from './defaultLeftNav/defaultLeftNav.js';
import defaultPage from './defaultPage/defaultPage.js';
import channelPage from './channelPage/channelPage.js';
import trendingPage from './trendingPage/trendingPage.js';
import watchHistoryPage from './watchHisoryPage/watchHistoryPage.js';
import settingsNav from './settingsPage/settingsLeftNav/settingsNav.js';
import accountPage from './settingsPage/accountPage/accountPage.js';
import notificationPage from './settingsPage/notificationPage/notificationPage.js';
import settingsNavEventListeners from './settingsPage/settingsLeftNav/events.js';
import performancePage from './settingsPage/performancePage/performancePage.js';
import defaultNavEventListeners from './defaultLeftNav/events.js';
import defaultPageEventListeners from './defaultPage/events.js';
import videoWatchPage from './videosPage/videoPage.js';

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
  VIDEOPAGE: 'videoPage'
}

const switchCurrentPage = page => {
  const currentPage = document.querySelector('.current-page');
  const currentSideNav = document.querySelector('.side-nav');
  const overlay = document.querySelector('#overlay');
  switch(page) {
    case 'homePage':
      currentSideNav.innerHTML = defaultLeftNav();
      currentPage.innerHTML = defaultPage();
      defaultNavEventListeners();
      defaultPageEventListeners();
      document.querySelector('#main').className = 'grid-container';
      document.querySelector('.left-nav-modal').style.display = 'none'
      overlay.style.display = 'none';
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
      currentSideNav.innerHTML = defaultLeftNav();
      currentPage.innerHTML = channelPage();
      defaultNavEventListeners();
      overlay.style.display = 'none';
      document.querySelector('.left-nav-modal').style.display = 'none'
      localStorage.setItem('currentPage', constants.CHANNELPAGE)
      localStorage.setItem('previousPage', constants.CHANNELPAGE)
      break;
    case 'trendingPage':
      currentSideNav.innerHTML = defaultLeftNav();
      currentPage.innerHTML = trendingPage();
      defaultNavEventListeners();
      overlay.style.display = 'none';
      document.querySelector('#main').className = 'grid-container';
      document.querySelector('.left-nav-modal').style.display = 'none'
      localStorage.setItem('currentPage', constants.TRENDINGPAGE)
      localStorage.setItem('previousPage', constants.TRENDINGPAGE)
      break;
    case 'watchHistoryPage':
      currentSideNav.innerHTML = defaultLeftNav();
      currentPage.innerHTML = watchHistoryPage();
      defaultNavEventListeners();
      overlay.style.display = 'none';
      document.querySelector('#main').className = 'grid-container';
      document.querySelector('.left-nav-modal').style.display = 'none'
      localStorage.setItem('currentPage', constants.WATCHHISTORYPAGE)
      localStorage.setItem('previousPage', constants.WATCHHISTORYPAGE)
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
    case 'videoPage':
      currentSideNav.innerHTML = '';
      currentPage.innerHTML = videoWatchPage();
      defaultPageEventListeners();
      document.querySelector('#main').className = '';
      localStorage.setItem('currentPage', constants.VIDEOPAGE)
      localStorage.setItem('modalLeftNav', 'true')
      break;
    default:
      currentPage.innerHTML = defaultPage();
  }
}

export { switchCurrentPage, constants }
