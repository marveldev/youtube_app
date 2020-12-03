import settingsNav from './leftNav/settingsNav.js';
import accountPage from './content/accountPage/accountPage.js';
import userNotification from './content/notificationPage/notification.js';

const settingEventListeners = () => {
  function displayActivePage(selector, value) {
    const activePage = document.querySelector('.active-page');
    selector.addEventListener('click', () => {
      activePage.innerHTML = value;
    })
  }

  displayActivePage(document.querySelector('.notification'), `${userNotification()}`)
}

const settingsContent = () => {
  return `
    <section class="settings-container">
      ${settingsNav()}
      <section class="active-page">
        ${accountPage()}
      </section>
    </section>
  `
}

export { settingsContent, settingEventListeners };
