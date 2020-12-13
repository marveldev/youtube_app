const settingsNav = () => {
  return `
    <div>
      <nav class="settings-nav">
        <p>SETTTINGS<i id="previousPageButton" class='fas fa-arrow-left'></i></p>
        <button class="account">Account</button>
        <button class="notification">Notification</button>
        <button class="performance">Playback and performance</button>
        <button>Privacy</button>
        <button>Connected apps</button>
        <button>Billings and payments</button>
        <button>Advanced settings</button>
      </nav>
    </div>
  `
}

export default settingsNav;
