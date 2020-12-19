const settingsNav = () => {
  return `
    <div class="settings-desktop">
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
    <div class="settings-mobile">
      <div>
        <i id="arrowLeft" class='fas fa-arrow-left'></i>
        <strong>Settings</strong>
      </div>
      <div id="settingsContent">
        <div>
          <div class="setting-button">
            <strong>Account</strong>
            <i class="material-icons">&#xe313;</i>
            <small>Choose how you appear and what you see on Youtube</small>
          </div>
          <div class="dropdown">
            <div>
              <strong>Restricted Mode</strong>
              <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
              </label>
              <small>This helps hide potentially mature video. No filter is 100%
                accurate. This settings only applies to this browser.
              </small>
            </div>
            <div>
              <strong>Language</strong>
              <small>English</small>
            </div>
            <div>
              <strong>Location</strong>
              <small>Nigeria</small>
            </div>
          </div>
        </div>
        <div>
          <div class="setting-button">
            <strong>History & privacy </strong>
            <i class="material-icons">&#xe313;</i>
            <small>Manage watch & search history and review Goggle Privacy Policy</small>
          </div>
          <div class="dropdown">
            <div>
              <strong>Clear watch history</strong>
              <small>Clear this account watch history from all devices.
                This will also clear your stories watch history
              </small>
            </div>
            <div>
              <strong>Clear search history</strong>
              <small>clear search made with this account from all devices</small>
            </div>
            <div>
              <strong>Pause watch history</strong>
              <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              <strong>Pause search history</strong>
              <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              <strong>Manage all activity</strong>
              <small>Review and delete items in your history</small>
            </div>
            <div>
              <strong>Keep all my subscriptions private</strong>
              <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
              </label>
            </div>
            <div>
              <strong>Keep all my Saved Playists private</strong>
              <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
              </label>
            </div>
          </div>
        </div>
        <div>
          <div class="setting-button">
            <strong>Notifications</strong>
            <i class="material-icons">&#xe313;</i>
            <small>Select email notifications you'd like to receive</small>
          </div>
          <div class="dropdown">
            <div>
              <strong>Allow emails</strong>
              <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
              </label>
              <small>Send me emails about my Youtube activity and updates i requested</small>
            </div>
            <div>
              <strong>Product updates</strong>
              <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
              </label>
              <small>General updates, accouncements and videos</small>
            </div>
            <div>
              <strong>Your channel updates</strong>
              <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
              </label>
              <small>My Youtube channel, accouncements and personalized tips</small>
            </div>
            <div>
              <strong>Learn more about emails from Youtube</strong>
            </div>
          </div>
        </div>
        <div class="content">
          <strong>Connected apps</strong>
        </div>
        <div class="content">
          <strong>Billing & payments</strong>
        </div>
        <div class="content">
          <strong>Purchase and memberships</strong>
          <small>Manage your Youtube purchases and memberships</small>
        </div>
        <div class="content">
          <strong>YouTube, a Goggle company</strong>
        </div>
      </div>
    </div>
  `
}

export default settingsNav;
