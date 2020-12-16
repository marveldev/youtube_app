const watchHistoryPage = () => {
  return `
    <section class="watch-history">
      <div id="watchHistory">
        <div>
          <h4>Watch history</h4>
          <p>Yesterday</p>
          <div class="history-video">
            <video class="video">
              <source src="https://player.vimeo.com/external/362720873.sd.mp4?s=0bd51a6eac8fbcb012d1a01d78f036d97f68081c&profile_id=139&oauth2_token_id=57447761" type="video/mp4">
            </video>
            <div class="video-info">
              <h3>The Chinese Culture</h3>
              <span>Pexels Video</span>
              <span>28k views</span>
              <span><strong>&middot</strong> 8 months ago</span>
              <p>Ronaldo scores the victory for Juventus with two goals in the first half. 
                Serie A TIM This is the official channel for the Serie A, providing all the 
                latest highlights, interviews, news...
              </p>
            </div>
          </div>
          <div class="history-video">
            <video class="video">
              <source src="https://player.vimeo.com/external/362720873.sd.mp4?s=0bd51a6eac8fbcb012d1a01d78f036d97f68081c&profile_id=139&oauth2_token_id=57447761" type="video/mp4">
            </video>
            <div class="video-info">
              <h3>The Chinese Culture</h3>
              <span>Pexels Video</span>
              <span>28k views</span>
              <span><strong>&middot</strong> 8 months ago</span>
              <p>Ronaldo scores the victory for Juventus with two goals in the first half. 
                Serie A TIM This is the official channel for the Serie A, providing all the 
                latest highlights, interviews, news...
              </p>
            </div>
          </div>
          <div class="history-video">
            <video class="video">
              <source src="https://player.vimeo.com/external/362720873.sd.mp4?s=0bd51a6eac8fbcb012d1a01d78f036d97f68081c&profile_id=139&oauth2_token_id=57447761" type="video/mp4">
            </video>
            <div class="video-info">
              <h3>The Chinese Culture</h3>
              <span>Pexels Video</span>
              <span>28k views</span>
              <span><strong>&middot</strong> 8 months ago</span>
              <p>Ronaldo scores the victory for Juventus with two goals in the first half. 
                Serie A TIM This is the official channel for the Serie A, providing all the 
                latest highlights, interviews, news...
              </p>
            </div>
          </div>
        </div>
        <div class="search-history">
          <input type="search" placeholder="Search watch history">
          <i class="fa fa-search"></i>
          <div class="search-inputs">
            <p>History type</p>
            <div>
              <p>Watch history</p>
              <label class="radio input-options">
                <input type="radio" name="radio">
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <p>Community</p>
              <label class="radio input-options">
                <input type="radio" name="radio">
                <span class="checkmark"></span>
              </label>
            </div>
            <div>
              <p>Live chat</p>
              <label class="radio input-options">
                <input type="radio" name="radio">
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <p><i class="material-icons">&#xe872;</i>CLEAR ALL WATCH HISTORY</p>
          <p><i class="material-icons">&#xe036;</i>PAUSE WATCH HISTORY</p>
          <p><i class="material-icons">&#xe8b8;</i>MANAGE ALL HISTORY</p>
          <p>Watch and search history</p>
          <p>Comments</p>
        </div>
      </div>
    </section>
  `
}

export default watchHistoryPage;
