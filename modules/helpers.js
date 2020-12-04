import homeLeftNav from './defaultPage/leftNav/leftNav.js';
import homePage from './defaultPage/homePage/homePage.js';
import channelPage from './defaultPage/channelPage/channel.js';
import trendingPage from './defaultPage/trendingPage/trending.js';
import watchHistoryPage from './defaultPage/watchHisoryPage/watchHistory.js';
import settingsNav from './settingsPage/leftNav/settingsNav.js';
import accountPage from './settingsPage/accountPage/accountPage.js';

const constants = {
  HOMEPAGE: 'homePage',
  CHANNELPAGE: 'channelPage',
  HOMELEFTNAV: 'homeLeftNav',
  TRENDINGPAGE: 'trendingPage',
  WATCHHISTORYPAGE: 'watchHistoryPage',
  RIGHTNAV: 'rightNav',
  TOPNAV: 'topNav',
  SETTINGSPAGE: 'settingsPage',
  ACCOUNTPAGE: 'accountPage'
}

const switchCurrentPage = page => {
  const currentPage = document.querySelector('.current-page');
  const currentNav = document.querySelector('.side-nav');
  switch(page) {
    case 'homePage':
      currentNav.innerHTML = settingsNav();
      currentPage.innerHTML = homePage();
      localStorage.setItem('currentPage', constants.HOMEPAGE)
      break;
    case 'channelPage':
      currentPage.innerHTML = channelPage();
      localStorage.setItem('currentPage', constants.CHANNELPAGE)
      break;
    case 'homeLeftNav':
      currentPage.innerHTML = homeLeftNav();
      break;
    case 'trendingPage':
      currentPage.innerHTML = trendingPage();
      localStorage.setItem('currentPage', constants.TRENDINGPAGE)
      break;
    case 'watchHistoryPage':
      currentPage.innerHTML = watchHistoryPage()
      localStorage.setItem('currentPage', constants.WATCHHISTORYPAGE)
      break;
    case 'settingsPage':
      currentNav.innerHTML = settingsNav();
      currentPage.innerHTML = accountPage();
      break;
    case 'accountPage':
      currentPage.innerHTML = accountPage();
      break;
    default:
      currentPage.innerHTML = homePage();
  }
}

export { switchCurrentPage, constants }
