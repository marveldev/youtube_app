import homePage from './defaultPage/homePage/homePage.js';
import channelPage from './defaultPage/channelPage/channel.js';
import homeLeftNav from './defaultPage/leftNav/leftNav.js';
import trendingPage from './defaultPage/trendingPage/trending.js';
import watchHistoryPage from './defaultPage/watchHisoryPage/watchHistory.js';
import rightNav from './rightNav/rightNavModal.js';
import topNav from './topNav/topNav.js';
import settingsNav from './settingsPage/leftNav/settingsNav.js';
import accountPage from './settingsPage/content/accountPage.js';

const switchCurrentPage = page => {
  const currentPage = document.querySelector('.current-page');
  switch(page) {
    case 'homepage':
      currentPage.innerHTML = homePage;
      break;
    case 'channelPage':
      currentPage.innerHTML = channelPage;
      break;
    case 'homeLeftNav':
      currentPage.innerHTML = homeLeftNav;
    case 'trendingPage':
      currentPage.innerHTML = trendingPage;
      break;
    case 'watchHistoryPage':
      currentPage.innerHTML = watchHistoryPage;
      break;
    case 'rightNav':
      currentPage.innerHTML = rightNav;
      break;
    case 'topNav':
      currentPage.innerHTML = topNav;
      break;
    case 'settingsNav':
      currentPage.innerHTML = settingsNav;
      break;
    case 'accountPage':
      currentPage.innerHTML = accountPage;
      break;
  }
}

const constants = {
  HOMEPAGE: 'homePage',
  CHANNELPAGE: 'channelPage',
  HOMELEFTNAV: 'homeLeftNav',
  TRENDINGPAGE: 'trendingPage',
  WATCHHISTORYPAGE: 'watchHistoryPage',
  RIGHTNAV: 'rightNav',
  TOPNAV: 'topNav',
  SETTINGSNAV: 'settingsNav',
  ACCOUNTPAGE: 'accountPage'
}

export { switchCurrentPage, constants }