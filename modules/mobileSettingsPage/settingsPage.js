const mobileSettingsPage = () => {
  return `
    <nav class="smallScreen-nav">
      <div class="account-section">
        <div id="account">
          <strong>Account</strong>
          <i class="material-icons">&#xe313;</i>
          <small>Choose how you appear and what you see on Youtube</small>
        </div>
        <div>
          <div>
            <strong>Restricted Mode</strong>
            <small>This helps hide potentially mature video. No filter is 100%
              accurate. This settings only applies to this browser.
            </small>
            <label class="switch">
              <input type="checkbox">
              <span class="slider round"></span>
            </label>
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
        <div>
          <strong>History & privacy </strong>
          <small>Manage watch & search history and review Goggle Privacy Policy</small>
          <i class="material-icons">&#xe313;</i>
        </div>
        <div>
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
        <div>
          <strong>Notifications</strong>
        </div>
      </div>
    </nav>
  `
}

export default mobileSettingsPage;
