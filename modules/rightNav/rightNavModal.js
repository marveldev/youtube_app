const rightNavModal = () => {
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
        <a href="#" id="channel"><i class="fa fa-user-circle"></i>Your channel</a>
        <a href="#"><i class='fas fa-dollar-sign'></i>Purchases and memberships</a>
        <a href="#"><i class='fas fa-users-cog'></i>Switch account</a>
        <a href="#"><i class='fas fa-sign-out-alt'></i>Sign out</a>
        <a href="#" id="theme"><i class="material-icons">&#xe8bd;</i>
          Appearance : <span class="theme-name">Light</span><i class="material-icons">&#xe315;</i>
        </a>
        <a href="#"><i class="material-icons">&#xe8b8;</i>Settings</a>
        <a href="#"><i class='fas fa-question-circle'></i>Help</a>
        <a href="#"><i class="material-icons">&#xe87f;</i>Send feedback</a>
      </nav>
      <div id="themeModal">
        <p><i id="arrowLeft" class='fas fa-arrow-left'></i>Appearance</p>
        <a href="#" id="darkTheme"><i id="checkmark" class='fas fa-check'></i>Dark theme</a>
        <a href="#" id="lightTheme"><i class='fas fa-check'></i>Light theme</a>
      </div>
    </div>
  `
}

export default rightNavModal;
