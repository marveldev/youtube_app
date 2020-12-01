import settingsNav from '../settingsPage/leftNav/settingsNav.js';
import accountPage from '../settingsPage/content/accountPage/accountPage.js';

const settingsContent = () => {
  return `
    <section class="settings-container">
      ${settingsNav()}
      <section>
        ${accountPage()}
      </section>
    </section>
  `
}

export default settingsContent;
