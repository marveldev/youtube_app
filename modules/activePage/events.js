import homePage from '../homePage/homePage.js';
import trendingPage from '../trendingPage/trending.js';
import watchHistoryPage from '../watchHisoryPage/watchHistory.js';
import channelPage from '../channelPage/channel.js';

const togglePages = () => {
  const activePage = document.querySelector('#activePage');

  function displayPage(selector, value) {
    selector.addEventListener('click', () => {
      activePage.innerHTML = value;
      localStorage.setItem('activePage', value)
    })
  }

  displayPage(document.querySelector('.history'), `${homePage()}`)
  displayPage(document.querySelector('#trending'), `${trendingPage()}`)
  displayPage(document.querySelector('#history'), `${watchHistoryPage()}`)
  displayPage(document.querySelector('#channel'), `${channelPage()}`)
}

export default togglePages;
