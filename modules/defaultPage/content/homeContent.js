import leftSideNav from '../leftNav/leftNav.js';
import homePage from '../content/homePage/homePage.js';

const homeContent = () => {
  const currentPage = localStorage.getItem('activePage');
  return `
    <section class="home-container">
      ${leftSideNav()}
      <section id="activePage">
        ${currentPage ? currentPage : homePage()}
      </section>
    </section>
  `
}

export default homeContent;
