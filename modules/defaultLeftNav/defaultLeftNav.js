const defaultLeftNav = () => {
  return `
    <div id="leftNav">
      <nav class="leftside-nav">
        <div>
          <button class="home"><i class="material-icons">&#xe88a;</i><strong>Home</strong></button>
          <button class="icon trending"><i class='fas fa-fire'></i><strong>Trending</strong></button>
          <button><i class="material-icons">&#xe064;</i><strong>Subscriptions</strong></button>
        </div>
        <div>
          <button><i class="material-icons">&#xe04a;</i><strong>Library</strong></button>
          <button class="icon history"><i class="fa fa-history"></i><strong>History</strong></button>
          <button><i class="material-icons">&#xe54d;</i><strong>Your movies</strong></button>
          <button class="setting"><i class="material-icons">&#xe8b8;</i>Settings</button>
          <button class="icon"><i class='fas fa-clock'></i><strong>Watch later</strong></button>
        </div>
        <div>
          <strong class="user-subscription">SUBSCRIPTIONS</strong>
          <div class="sub-list">
            <button>
              <img src="https://images.pexels.com/photos/4724071/pexels-photo-4724071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                class="image" alt="photo">
              <strong>Jack Williams</strong>
            </button>
            <button>
              <img src="https://images.pexels.com/photos/4724071/pexels-photo-4724071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                class="image" alt="photo">
              <strong>Dangote Buka</strong>
            </button>
            <button>
              <img src="https://images.pexels.com/photos/4724071/pexels-photo-4724071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                class="image" alt="photo">
              <strong>Jude Okolie</strong>
            </button>
            <button>
              <img src="https://images.pexels.com/photos/4724071/pexels-photo-4724071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                class="image" alt="photo">
              <strong>Mary Spencer</strong>
            </button>
            <button>
              <img src="https://images.pexels.com/photos/4724071/pexels-photo-4724071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                class="image" alt="photo">
              <strong>Tobias Flench</strong>
            </button>
            <button>
              <img src="https://images.pexels.com/photos/4724071/pexels-photo-4724071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                class="image" alt="photo">
              <strong>John White</strong>
            </button>
            <button>
              <img src="https://images.pexels.com/photos/4724071/pexels-photo-4724071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                class="image" alt="photo">
              <strong>Lilly Little </strong>
            </button>
          </div>
        </div>
      </nav>
      <nav id="leftSideNav">
        <button class="home"><i class="material-icons">&#xe88a;</i><small>Home</small></button>
        <button class="trending"><i class='fas fa-fire'></i><small>Trending</small></button>
        <button><i class="material-icons">&#xe064;</i><small>Subscriptions</small></button>
        <button><i class="material-icons">&#xe04a;</i><small>Library</small></button>
      </nav>
    </div>
  `
}

export default defaultLeftNav;
