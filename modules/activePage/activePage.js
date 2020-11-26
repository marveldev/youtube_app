import homePage from '../homePage/homePage.js';

const activePage = () => {
  return `
    <section class="active-page">${homePage()}</section>
  `
}

export default activePage;
