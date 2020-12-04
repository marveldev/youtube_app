import leftSideNav from './leftNav/leftNav.js';
import homePage from './homePage/homePage.js';
import trendingPage from './trendingPage/trending.js';
import watchHistoryPage from './watchHisoryPage/watchHistory.js';
import channelPage from './channelPage/channel.js';
import settingsNav from '../settingsPage/leftNav/settingsNav.js';
import accountPage from '../settingsPage/content/accountPage/accountPage.js';
import{ settingsContent } from '../settingsPage/settingsContent.js';

const homeContent = () => {
  return `
    <section class="home-container">
      <div id="navContent">
        ${leftSideNav()}
      </div>
      <section id="activePage">
        ${homePage()}
      </section>
    </section>
  `
}

const homeEventListeners = () => {
  function displayCurrentPage(selector, value1, value2) {
    // const currentPage = document.querySelector('#page');
    // const previousPage = document.querySelector('.current-page');
    // selector.addEventListener('click', () => {
    //   currentPage.style.display = value1;
    //   previousPage.style.display = value2;
    //   // console.log(value);
    //   // currentPage.appendChild(value)
    //   // currentPage.innerHTML = value;
    // })
  }

  displayCurrentPage(document.querySelector('.settings-button'),'block', 'none')
  displayCurrentPage(document.querySelector('.logo'), 'none', 'block')

  function displayActivePage(selector, value) {
    const activePage = document.querySelector('#activePage');
    selector.addEventListener('click', () => {
      activePage.innerHTML = value;
    })
  }

  displayActivePage(document.querySelector('.home'), `${homePage()}`)
  displayActivePage(document.querySelector('.trending'), `${trendingPage()}`)
  displayActivePage(document.querySelector('#history'), `${watchHistoryPage()}`)
  displayActivePage(document.querySelector('#channel'), `${channelPage()}`)
}

export { homeContent, homeEventListeners };
