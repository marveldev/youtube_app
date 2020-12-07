const topNav = () => {
  return `
    <nav class="top-nav">
      <span class="primary-topNav">
        <button class="burger-icon"><i class='fas fa-bars'></i></button>
        <button class="logo"><i class='fab fa-youtube'></i>
          <strong>YouTube</strong><small><sup>NG</sup></small>
        </button>
      </span>
      <span>
        <form class="search-form">
          <input type="text" class="topNav-input" placeholder="Search.." name="search">
          <button type="submit" class="topNav-button button"><i class="fa fa-search"></i></button>
        </form>
      </span>
      <span class="tertiary-topNav">
        <button><i class="material-icons">&#xe070;</i></button>
        <button><i class="material-icons">&#xe5c3;</i></button>
        <button><i class="fa fa-bell"></i></button>
        <button id="profilePhoto">
          <img src='https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
          class="image" alt="photo">
        </button>
      </span>
    </nav>
  `
}

export default topNav;
