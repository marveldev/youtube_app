import homePage from '../homePage/homePage.js';
import trendingPage from '../trendingPage/trending.js';
import watchHistoryPage from '../watchHisoryPage/watchHistory.js';
import channelPage from '../channelPage/channel.js';

const togglePages = () => {
  const activePage = document.querySelector('.active-page');

  const homeButton = document.querySelector('.history');
  homeButton.addEventListener('click', () => {
    activePage.innerHTML = `${homePage()}`;
  })

  const trendingButton = document.querySelector('#trending');
  trendingButton.addEventListener('click', () => {
    activePage.innerHTML = `${trendingPage()}`;
  })
  
  const historyButton = document.querySelector('#history');
  historyButton.addEventListener('click', () => {
    activePage.innerHTML = `${watchHistoryPage()}`;
  })

  const channelButton = document.querySelector('#channel');
  channelButton.addEventListener('click', () => {
    activePage.innerHTML = `${channelPage()}`;
  })
}

export default togglePages;
