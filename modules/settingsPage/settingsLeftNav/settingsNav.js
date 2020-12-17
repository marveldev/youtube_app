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
      <nav class="smallScreen-nav">
        <div>
          <div>
            <strong>Account</strong>
            <i class="material-icons">&#xe313;</i>
            <small>Choose how you appear and what you see on Youtube</small>
          </div>
          <div>
            <strong>Restricted Mode</strong>
            <small>This helps hide potentially mature video. No filter is 100%
              accurate. This settings only applies to this browser.
            </small>
            
          </div>
        </div>
      </nav>
    </div>
  `
}

export default settingsNav;
