const topNav = () => {
  return `
    <nav class="top-nav">
      <span class="primary-topNav">
        <a href="#" class="burger-icon"><i class='fas fa-bars'></i></a>
        <a href="#" class="burger-icon-widescreen"><i class='fas fa-bars'></i></a>
        <a href="#" class="logo"><i class='fab fa-youtube'></i>
          <strong>YouTube</strong><small><sup>NG</sup></small>
        </a>
      </span>
      <span>
        <form class="search-form">
          <input type="text" class="topNav-input" placeholder="Search.." name="search">
          <button type="submit" class="topNav-button button"><i class="fa fa-search"></i></button>
        </form>
      </span>
      <span class="tertiary-topNav">
        <a href="#"><i class="material-icons">&#xe070;</i></a>
        <a href="#"><i class="material-icons">&#xe5c3;</i></a>
        <a href="#"><i class="fa fa-bell"></i></a>
        <a href="#" id="profilePhoto">
          <img src='https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
          class="image" alt="photo">
        </a>
        <a href="#" id="userPhoto">
          <img src='https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
          class="image" alt="photo">
        </a>
      </span>
    </nav>
  `
}

export default topNav