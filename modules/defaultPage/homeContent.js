import leftSideNav from './leftNav/leftNav.js';
import homePage from './content/homePage/homePage.js';

const homeContent = () => {
  const activePage = localStorage.getItem('activePage');
  return `
    <section class="home-container">
      ${leftSideNav()}
      <section id="activePage">
        ${activePage ? activePage : homePage()}
      </section>
    </section>
  `
}

export default homeContent;
