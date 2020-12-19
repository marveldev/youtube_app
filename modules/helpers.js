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

const switchCurrentPage = (page, videoSrc) => {
  const currentPageDiv = document.querySelector('.current-page');
  const leftSideNav = document.querySelector('.side-nav');
  const previousPage = localStorage.getItem('currentPage');
  localStorage.setItem('currentPage', page)

  switch(page) {
    case 'homePage':
      currentPageDiv.innerHTML = defaultPage();
      defaultPageEventListeners();
      localStorage.setItem('modalLeftNav', 'false')
      break;
    case 'settingsPage':
      leftSideNav.innerHTML = settingsNav();
      currentPageDiv.innerHTML = accountPage();
      settingsNavEventListeners();
      localStorage.setItem('modalLeftNav', 'true')
      localStorage.setItem('previousPage', previousPage)
      break;
    case 'channelPage':
      currentPageDiv.innerHTML = channelPage();
      localStorage.setItem('modalLeftNav', 'false')
      break;
    case 'trendingPage':
      currentPageDiv.innerHTML = trendingPage();
      localStorage.setItem('modalLeftNav', 'false')
      break;
    case 'watchHistoryPage':
      currentPageDiv.innerHTML = watchHistoryPage();
      localStorage.setItem('modalLeftNav', 'false')
      break;
    case 'accountPage':
      leftSideNav.innerHTML = settingsNav();
      settingsNavEventListeners();
      currentPageDiv.innerHTML = accountPage();
      break;
    case 'notificationPage':
      leftSideNav.innerHTML = settingsNav();
      settingsNavEventListeners();
      currentPageDiv.innerHTML = notificationPage();
      break;
    case 'performancePage':
      leftSideNav.innerHTML = settingsNav();
      settingsNavEventListeners();
      currentPageDiv.innerHTML = performancePage();
      break;
    case 'videoPage': // change this to videoWatchPage
      leftSideNav.innerHTML = '';
      currentPageDiv.innerHTML = videoWatchPage({ videoSrc });
      defaultPageEventListeners();
      document.querySelector('#main').className = '';
      localStorage.setItem('modalLeftNav', 'true')
      break;
    default:
      currentPageDiv.innerHTML = defaultPage();
  }
}

export { switchCurrentPage, constants }
