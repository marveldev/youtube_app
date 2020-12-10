const channelPage = () => {
  return `
    <section class="channel-page">
      <div class="channel-nav">
        <div>
          <img src='https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
          class="image" alt="photo">
          <span>Jane Doe</span>
          <button>CUSTOMIZE CHANNEL</button>
          <button>MANAGE VIDEOS</button>
        </div>
        <nav>
          <button>HOME</button>
          <button>VIDEOS</button>
          <button>PLAYLISTS</button>
          <button><i class="material-icons">&#xe313;</i></button>
          <nav>
            <button>CHANNEL</button>
            <button>DISCUSSION</button>
            <button>ABOUT</button>
            <button><i class="fa fa-search"></i></button>
          </nav>
        </nav>
      </div>
      <div class="homepage">
        <img class="default-image" src="https://www.gstatic.com/youtube/img/channels/empty_channel_illustration.svg" alt="photo">
        <img class="theme-image" src="https://www.gstatic.com/youtube/img/channels/empty_channel_dark_illustration.svg" alt="photo">
        <p>Upload a video to get started</p>
        <span>Start sharing your story and connecting with viewers. Videos you upload will show up here.</span>
        <button>UPLOAD VIDEO</button>
      </div>
    </section>
  `
}

export default channelPage;
