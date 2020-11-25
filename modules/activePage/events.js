import trendingPage from '../trendingPage/trending.js';
import channelPage from '../channelPage/channel.js';
import watchHistoryPage from '../watchHisoryPage/watchHistory.js';

const togglePages = () => {
  const activePage = document.querySelector('.active-page');

  const trendingButton = document.querySelector('#trending');
  trendingButton.addEventListener('click', () => {
    activePage.innerHTML = `${trendingPage()}`;
    console.log(activePage);
  })

  const channelButton = document.querySelector('#channel');
  channelButton.addEventListener('click', () => {
    activePage.innerHTML = `${channelPage()}`;
    console.log(activePage);
  })

  const historyButton = document.querySelector('#history');
  historyButton.addEventListener('click', () => {
    activePage.innerHTML = `${watchHistoryPage()}`;
    console.log(activePage);
  })

}

export default togglePages;
