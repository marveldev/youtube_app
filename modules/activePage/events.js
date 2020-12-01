import homePage from '../homePage/homePage.js';
import trendingPage from '../trendingPage/trending.js';
import watchHistoryPage from '../watchHisoryPage/watchHistory.js';
import channelPage from '../homePage/channelPage/channel.js.js';

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

  function openSettings(selectors, homeValue, settingsValue) {
    if (selectors.length > 1) {
      for (let index = 0; index < selectors.length; index++) {
        const selector = selectors[index];
        selector.addEventListener('click', () => {
          console.log('sok');
          document.querySelector('.home-container').style.display = homeValue;
          document.querySelector('.settings-container').style.display = settingsValue;
        })
      }
    } else {
      selectors.addEventListener('click', () => {
        console.log('lok');
        document.querySelector('.home-container').style.display = homeValue;
        document.querySelector('.settings-container').style.display = settingsValue;
      })
    }
    document.querySelector('.home-container').style.display = homeValue;
    document.querySelector('.settings-container').style.display = settingsValue;
  }

  openSettings(document.querySelectorAll('.settings-button'), 'none', 'grid')
  openSettings(document.querySelector('.logo'), 'grid', 'none')
}

export default togglePages;
