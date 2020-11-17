import topNav from './modules/topNav/topNav.js';
import leftSideNav from './modules/leftSideNav/leftSideNav.js';
// import mainContent from './modules/mainContent/mainContent.js';

const app = () => {
  return `
    ${topNav()}
    ${leftSideNav()}
  `
}

document.querySelector('#root').innerHTML = app();