const rightNav = () => {
  return `
    <div id="overlay"></div>
    <div id="rightNav">
      <nav class="rightNav-modal">
        <div>
          <img src='https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
          class="image" alt="photo">
          <strong id="userName">Jane Doe</strong>
          <button id="closeModalButton">X</button>
        </div>
        <button class="channel"><i class="fa fa-user-circle"></i>Your channel</button>
        <button><i class='fas fa-dollar-sign'></i>Purchases and memberships</button>
        <button><i class='fas fa-users-cog'></i>Switch account</button>
        <button><i class='fas fa-sign-out-alt'></i>Sign out</button>
        <button id="themeModalButton"><i class="material-icons">&#xe8bd;</i>
          Appearance : <span class="theme-name">Light</span><i class="material-icons">&#xe315;</i>
        </button>
        <button id="setting"><i class="material-icons">&#xe8b8;</i>Settings</button>
        <button><i class='fas fa-question-circle'></i>Help</button>
        <button><i class="material-icons">&#xe87f;</i>Send feedback</button>
      </nav>
      <div id="themeModal">
        <p><i id="arrowLeft" class='fas fa-arrow-left'></i>Appearance</p>
        <button id="darkThemeButton"><i id="checkmark" class='fas fa-check'></i>Dark theme</button>
        <button id="lightThemeButton"><i class='fas fa-check'></i>Light theme</button>
      </div>
    </div>
  `
}

export default rightNav;
