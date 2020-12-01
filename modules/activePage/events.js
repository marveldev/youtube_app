import homePage from '../defaultPage/content/homePage/homePage.js';
import trendingPage from '../defaultPage/content/trendingPage/trending.js';
import watchHistoryPage from '../defaultPage/content/watchHisoryPage/watchHistory.js';
import channelPage from '../defaultPage/content/channelPage/channel.js';
import settingsContent from '../settingsPage/settingsContent.js';
import homeContent from '../defaultPage/content/homeContent.js';

const togglePages = () => {
  const activePage = document.querySelector('#activePage');

  function displayPage(selectors, value) {
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

  displayPage(document.querySelectorAll('.home'), `${homePage()}`)
  displayPage(document.querySelectorAll('.trending'), `${trendingPage()}`)
  displayPage(document.querySelector('#history'), `${watchHistoryPage()}`)
  displayPage(document.querySelector('#channel'), `${channelPage()}`)

  function openSettings(selectors, value) {
    if (selectors.length > 1) {
      for (let index = 0; index < selectors.length; index++) {
        const selector = selectors[index];
        selector.addEventListener('click', () => {
          console.log('sok');
          console.log(selectors);
          document.querySelector('.current-page').innerHTML = value;
        })
      }
    } else {
      selectors.addEventListener('click', () => {
        console.log('lok');
        document.querySelector('.current-page').innerHTML = value;
      })
    }
  }

  openSettings(document.querySelectorAll('.settings-button'), `${settingsContent()}`)
  openSettings(document.querySelector('.logo'), `${homeContent()}`)
}

export default togglePages;
