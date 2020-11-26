const leftSideNav = () => {
  return `
    <div id="leftNav">
      <nav class="leftside-nav">
        <div>
          <a href="#" class="history"><i class="material-icons">&#xe88a;</i><strong>Home</strong></a>
          <a href="#" class="icon" id="trending"><i class='fas fa-fire'></i><strong>Trending</strong></a>
          <a href="#"><i class="material-icons">&#xe064;</i><strong>Subscriptions</strong></a>
        </div>
        <div>
          <a href="#"><i class="material-icons">&#xe04a;</i><strong>Library</strong></a>
          <a href="#" class="icon" id="history"><i class="fa fa-history"></i><strong>History</strong></a>
          <a href="#"><i class="material-icons">&#xe54d;</i><strong>Your movies</strong></a>
          <a href="#" class="icon"><i class='fas fa-clock'></i><strong>Watch later</strong></a>
          <a href="#"><i class="material-icons">&#xe8dc;</i><strong>Liked videos</strong></a>
        </div>
        <div>
          <strong class="user-subscription">SUBSCRIPTIONS</strong>
          <div class="sub-list">
            <a href="#">
              <img src="https://images.pexels.com/photos/4724071/pexels-photo-4724071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                class="image" alt="photo">
              <strong>Jack Williams</strong>
            </a>
            <a href="#">
              <img src="https://images.pexels.com/photos/4724071/pexels-photo-4724071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                class="image" alt="photo">
              <strong>Dangote Buka</strong>
            </a>
            <a href="#">
              <img src="https://images.pexels.com/photos/4724071/pexels-photo-4724071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                class="image" alt="photo">
              <strong>Jude Okolie</strong>
            </a>
            <a href="#">
              <img src="https://images.pexels.com/photos/4724071/pexels-photo-4724071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                class="image" alt="photo">
              <strong>Mary Spencer</strong>
            </a>
            <a href="#">
              <img src="https://images.pexels.com/photos/4724071/pexels-photo-4724071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                class="image" alt="photo">
              <strong>Tobias Flench</strong>
            </a>
            <a href="#">
              <img src="https://images.pexels.com/photos/4724071/pexels-photo-4724071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                class="image" alt="photo">
              <strong>John White</strong>
            </a>
            <a href="#">
              <img src="https://images.pexels.com/photos/4724071/pexels-photo-4724071.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                class="image" alt="photo">
              <strong>Lilly Little </strong>
            </a>
          </div>
        </div>
      </nav>
      <nav id="leftSideNav">
        <a href="#"><i class="material-icons">&#xe88a;</i><small>Home</small></a>
        <a href="#"><i class='fas fa-fire'></i><small>Trending</small></a>
        <a href="#"><i class="material-icons">&#xe064;</i><small>Subscriptions</small></a>
        <a href="#"><i class="material-icons">&#xe04a;</i><small>Library</small></a>
      </nav>
    </div>
  `
}

export default leftSideNav;