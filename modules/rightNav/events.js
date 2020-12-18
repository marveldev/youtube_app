import { switchCurrentPage, constants } from '../helpers.js';

const rightNavEventListeners = () => {
  const channelPage = document.querySelector('.channel');
  channelPage.addEventListener('click', () => {
    switchCurrentPage(constants.CHANNELPAGE);
  })

  document.querySelector('#settingButton').addEventListener('click', () => {
    switchCurrentPage(constants.MOBILESETTINGSPAGE)
    overlay.style.display = 'none';
    document.querySelector('.rightNav-modal').style.display = 'none';
  })
}

export default rightNavEventListeners;
