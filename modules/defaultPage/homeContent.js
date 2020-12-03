import leftSideNav from './leftNav/leftNav.js';
import homePage from './homePage/homePage.js';
import trendingPage from './trendingPage/trending.js';
import watchHistoryPage from './watchHisoryPage/watchHistory.js';
import channelPage from './channelPage/channel.js';
import{ settingsContent } from '../settingsPage/settingsContent.js';

const homeEventListeners = () => {
  function displayCurrentPage(selector, value) {
    const currentPage = document.querySelector('.current-page');
    selector.addEventListener('click', () => {
      currentPage.innerHTML = value;
      localStorage.setItem('currentPage', value);
    })
  }

  displayCurrentPage(document.querySelector('.settings-button'), `${settingsContent()}`)
  displayCurrentPage(document.querySelector('.logo'), `${homeContent()}`)

  function displayActivePage(selector, value) {
    const activePage = document.querySelector('#activePage');
    selector.addEventListener('click', () => {
      activePage.innerHTML = value;
      localStorage.setItem('activePage', value);
      console.log(activePage);
    })
  }

  displayActivePage(document.querySelector('.home'), `${homePage()}`)
  displayActivePage(document.querySelector('.trending'), `${trendingPage()}`)
  displayActivePage(document.querySelector('#history'), `${watchHistoryPage()}`)
  displayActivePage(document.querySelector('#channel'), `${channelPage()}`)
}

const homeContent = () => {
  const activePage = localStorage.getItem('activePage');
  return `
    <section class="home-container">
      ${leftSideNav()}
      <section id="activePage">
        ${activePage ? activePage : homePage()}
      </section>
    </section>
  `
}

export { homeContent, homeEventListeners };
