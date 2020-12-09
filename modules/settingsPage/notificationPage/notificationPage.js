const notificationPage = () => {
  return `
    <section class="notification-page">
      <div class="primary">
        <p>Notifications</p>
        <p>Choose when and how to be notified</p>
        <small>Select push and email notifications you'd like to receive</small>
      </div>
      <div class="general-notification">
        <p>General</p>
        <small>Manage your mobile and desktop notifications</small>
        <div class="user-options">
          <strong>Your preferences</strong>
          <div>
            <div class="option">
              <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
              </label>
              <div>
                <p>Subscriptions</p>
                <small>Notify me about activity from the channels I'm subscribed to</small>
              </div>
            </div>
            <div class="option">
              <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
              </label>
              <div>
                <p>Recommended videos</p>
                <small>Notify me of videos I might like based on what I watch</small>
              </div>
            </div>
            <div class="option">
              <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
              </label>
              <div>
                <p>Activity on my channel</p>
                <small>Notify me about comments and other activity on my channel or videos</small>
              </div>
            </div>
            <div class="option">
              <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
              </label>
              <div>
                <p>Activity on my comments</p>
                <small>Notify me about activity on my comments on others’ videos</small>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="email-notification">
        <p>Email notification</p>
        <small>Your emails are sent to marvellousalika48@gmail.com. To unsubscribe from an email,
          click the "Unsubscribe" link at the bottom of it. Learn more about emails from YouTube.
        </small>
        <div>
          <div class="user-options">
            <strong>Permission</strong>
            <div class="option">
              <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
              </label>
              <div>
                <p>Send me emails about my YouTube activity and updates I requested</p>
                <small>If this setting is turned off, YouTube may still send you messages
                  regarding your account, required service announcements, legal notifications,
                  and privacy matters
                </small>
              </div>
            </div>
          </div>
          <div>
            <strong>Your preferences</strong>
            <div>
              <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
              </label>
              <strong>General product updates</strong>
              <small>Announcements and recommendations</small>
            </div>
            <div>
              <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
              </label>
              <strong>Creator updates and announcements</strong>
              <small>Product announcements, creator events, and personalized tips
                to grow your YouTube channel
              </small>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
}

export default notificationPage;
