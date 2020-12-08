const modalLeftNav = () => {
  return `
    <nav class="modal-left-nav">
      <section>
        <button id="burgerIcon"><i class='fas fa-bars'></i></button>
        <button><i class='fab fa-youtube'></i>
          <strong>YouTube</strong><small><sup>NG</sup></small>
        </button>
      </section>
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
  `
}

export default modalLeftNav;
