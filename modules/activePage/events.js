import homePage from '../homePage/homePage.js';
import trendingPage from '../trendingPage/trending.js';
import watchHistoryPage from '../watchHisoryPage/watchHistory.js';
import channelPage from '../channelPage/channel.js';
import settings from '../settingsPage/settings.js';

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

  function openSettings() {
    document.querySelector('.home-container').style.display = 'none';
    document.querySelector('.settings-container').style.display = 'grid';
  }

  const settingsButtons = document.querySelectorAll('.settings-button');
  for (let index = 0; index < settingsButtons.length; index++) {
    const settingsButton = settingsButtons[index];
    settingsButton.addEventListener('click', openSettings);
  }
}

export default togglePages;
