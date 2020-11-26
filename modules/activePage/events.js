import homePage from '../homePage/homePage.js';
import trendingPage from '../trendingPage/trending.js';
import watchHistoryPage from '../watchHisoryPage/watchHistory.js';
import channelPage from '../channelPage/channel.js';

const togglePages = () => {
  const activePage = document.querySelector('.active-page');

  function displayPage(selector, value) {
    selector.addEventListener('click', () => {
      activePage.innerHTML = value;
    })
  }

  displayPage(document.querySelector('.history'), `${homePage()}`)
  displayPage(document.querySelector('#trending'), `${trendingPage()}`)
  displayPage(document.querySelector('#history'), `${watchHistoryPage()}`)
  displayPage(document.querySelector('#channel'), `${channelPage()}`)
}

export default togglePages;
