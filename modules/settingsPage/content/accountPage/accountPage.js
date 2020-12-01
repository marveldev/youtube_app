const accountPage = () => {
  return `
    <div class="settings-account">
      <div class="primary">
        <p>Account</p>
        <p>Choose how you appear and what you see on YouTube</p>
        <small>Signed in as JaneDoe123@gmail.com</small>
      </div>
      <div class="secondary">
        <p>Your YouTube channel</p>
        <small>This is your public presence on YouTube. You need a channel to 
          upload your own videos, comment on videos, or create playlists.
        </small>
        <div>
          <strong>You channel</strong>
          <div>
            <img src='https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
            class="image" alt="photo">
            <span id="userName">Jane Doe</span>
            <a href="#">Channel status and features</a>
            <a href="#">Create a new channel</a>
            <a href="#">View advanced settings</a>
          </div>
        </div>
      </div>
      <div class="tertiary">
        <p>Your account</p>
        <small>You sign in to YouTube with your Google account</small>
        <div>
          <strong>Google account</strong>
          <div>
            <span>View or change your Google account settings</span>
            <small>You will be redirected to your Google account page</small>
          </div>
          <strong>Membership</strong>
          <div>
            <span>No membership</span>
            <small>YouTube Premium offers uninterrupted music, ad-free videos, and more</small>
          </div>
        </div>
      </div>
    </div>
  `
}

export default accountPage;
