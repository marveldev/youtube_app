import settingsNav from './leftNav/settingsNav.js';
import accountPage from './content/accountPage/accountPage.js';

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

export default settingsContent;
