import { switchCurrentPage, constants } from '../helpers.js';

const rightNavEventListeners = () => {
  const channelPage = document.querySelector('.channel');
  channelPage.addEventListener('click', () => {
    const currentNav = localStorage.getItem('currentNav');
    if (currentNav === constants.SETTINGSNAV) {
      switchCurrentPage(constants.DEFAULTCHANNELPAGE);
    } else {
      switchCurrentPage(constants.CHANNELPAGE);
    }
  })
}

export default rightNavEventListeners;
