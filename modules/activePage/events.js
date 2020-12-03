import homePage from '../defaultPage/content/homePage/homePage.js';
import trendingPage from '../defaultPage/content/trendingPage/trending.js';
import watchHistoryPage from '../defaultPage/content/watchHisoryPage/watchHistory.js';
import channelPage from '../defaultPage/content/channelPage/channel.js';
import settingsContent from '../settingsPage/settingsContent.js';
import homeContent from '../defaultPage/homeContent.js';
import userNotification from '../settingsPage/content/notificationPage/notification.js';

const togglePages = () => {
  const activePage = document.querySelector('#activePage');

  function displayActivePage(selectors, value) {
    if (selectors.length > 1) {
      for (let index = 0; index < selectors.length; index++) {
        const selector = selectors[index];
        selector.addEventListener('click', () => {
          activePage.innerHTML = value;
          localStorage.setItem('activePage', value)
        })
      }
    } else {
      selectors.addEventListener('click', () => {
        activePage.innerHTML = value;
        localStorage.setItem('activePage', value) 
      })
    }
  }

  displayActivePage(document.querySelectorAll('.home'), `${homePage()}`)
  displayActivePage(document.querySelectorAll('.trending'), `${trendingPage()}`)
  displayActivePage(document.querySelector('#history'), `${watchHistoryPage()}`)
  displayActivePage(document.querySelector('#channel'), `${channelPage()}`)

  function displayCurrentPage(selector, value) {
    const currentPage = document.querySelector('.current-page');
    selector.addEventListener('click', () => {
      currentPage.innerHTML = value;
      localStorage.setItem('currentPage', value);
    })
  }

  displayCurrentPage(document.querySelector('.settings-button'), `${settingsContent()}`)
  displayCurrentPage(document.querySelector('.logo'), `${homeContent()}`)

  function displayPage(selector, value) {
    const activePage = document.querySelector('.active-page');
    console.log(selector);
    selector.addEventListener('click', () => {
      console.log('ok');
      activePage.innerHTML = value;
      localStorage.setItem('settingsActivePage', value);
    })
  }

  displayPage(document.querySelector('.notification'), `${userNotification()}`);
  displayPage(document.querySelector('.account'), `${userNotification()}`);
}

export default togglePages;
