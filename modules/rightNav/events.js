import { switchCurrentPage, constants } from '../helpers.js';

const rightNavEventListeners = () => {
  const channelPage = document.querySelector('.channel');
  channelPage.addEventListener('click', () => {
    switchCurrentPage(constants.CHANNELPAGE);
  })
}

export default rightNavEventListeners;
