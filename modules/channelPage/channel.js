const channelPage = () => {
  return `
    <div class="channel-page">
      <div>
        <div>
          <img src='https://history.ucr.edu/sites/g/files/rcwecm1916/files/styles/form_preview/public/blank-profile-picture-png.png?itok=MQ-iPuNG'
          class="image" alt="photo">
          <span>Jane Doe</span>
          <button>CUSTOMIZE CHANNEL</button>
          <button>MANAGE VIDEOS</button>
        </div>
        <nav>
          <a href="#">HOME</a>
          <a href="#">VIDEOS</a>
          <a href="#">PLAYLISTS</a>
          <a href="#">CHANNEL</a>
          <a href="#">DISCUSSION</a>
          <a href="#">ABOUT</a>
          <a href="#"><i class="fa fa-search"></i></a>
          <a href="#"><i class="material-icons">&#xe315;</i></a>
        </nav>
      </div>
      <div>
        <img src="https://www.gstatic.com/youtube/img/channels/empty_channel_illustration.svg" alt="photo">
        <p>Upload a video to get started</p>
        <span>Start sharing your story and connecting with viewers. Videos you upload will show up here.</span>
        <button>UPLOAD VIDEO</button>
      </div>
    </div>
  `
}
export default channelPage;