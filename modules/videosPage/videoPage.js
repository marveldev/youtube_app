const videoWatchPage = () => {
  return `
    <section class="video-page-container">
      <div>
        <video class="video-wide" src="https://player.vimeo.com/external/362720873.sd.mp4?s=0bd51a6eac8fbcb012d1a01d78f036d97f68081c&profile_id=139&oauth2_token_id=57447761" type="video/mp4">
        </video>
        <div>
          <div class="video-info">
            <strong>The Chinese Culture(Official Video)</strong>
            <div>
              <span>Dec 15, 2020</span>
              <span>28k views</span>
              <span id="videoData">
                <span><i class="material-icons">&#xe8dc;</i> 3.9k</span>
                <span><i class="material-icons">&#xe8db;</i> 26</span>
                <span><i class="fa fa-share"></i>SHARE</span>
                <span><i class="material-icons">&#xe03b;</i>SAVE</span>
              </span>
            </div>
          </div>
          <div class="video-details">
            <img src="https://images.pexels.com/photos/4724071/pexels-photo-4724071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              class="image" alt="photo">
            <div>
              <strong>Chris Sain</strong>
              <p>132k subscribers</p>
              <p id="aboutVideo">In this video I share an update on two hot stocks out option plays
                and information on tax loss harvesting.
              </p>
            </div>
            <button>SUBSCRIBE</button>
          </div>
        </div>
      </div>
      <div>
        <div id="videoContent">
          <video>
            <source src="https://player.vimeo.com/external/350245348.sd.mp4?s=5a4dafd828188844cef2274dd0bc8babb7d06687&profile_id=139&oauth2_token_id=57447761" type="video/mp4">
          </video>
          <div>
            <strong>A Moving Truck</strong>
            <p>Pexels Video</p>
            <span>28k views</span>
            <span><strong>&middot</strong> 8 months ago</span>
          </div>
        </div>
        <div id="videoContent">
          <video>
            <source src="https://player.vimeo.com/external/374119382.sd.mp4?s=2e2cf9aa0bd93c53987df1a2b07240602942ce72&profile_id=139&oauth2_token_id=57447761" type="video/mp4">
          </video>
          <div>
            <strong>A Moving Truck</strong>
            <p>Pexels Video</p>
            <span>28k views</span>
            <span><strong>&middot</strong> 8 months ago</span>
          </div>
        </div>
        <div id="videoContent">
          <video>
            <source src="https://player.vimeo.com/external/331083783.sd.mp4?s=d817f766244c10a344e39045edf595366cb72979&profile_id=139&oauth2_token_id=57447761" type="video/mp4">
          </video>
          <div>
            <strong>A Moving Truck</strong>
            <p>Pexels Video</p>
            <span>28k views</span>
            <span><strong>&middot</strong> 8 months ago</span>
          </div>
        </div>
        <div id="videoContent">
          <video>
            <source src="https://player.vimeo.com/external/363169958.sd.mp4?s=2bcfbdfcb641cd1668ea8cee4f038420d8b5cf8c&profile_id=139&oauth2_token_id=57447761" type="video/mp4">
          </video>
          <div>
            <strong>A Moving Truck</strong>
            <p>Pexels Video</p>
            <span>28k views</span>
            <span><strong>&middot</strong> 8 months ago</span>
          </div>
        </div>
      </div>
    </section>
  `
}

export default videoWatchPage;
