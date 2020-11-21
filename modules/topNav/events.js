const topNavEvents = () => {
  const profilePhoto = document.querySelector('#profilePhoto');
  const userPhoto = document.querySelector('#userPhoto');
  const overlay = document.querySelector('#overlay');
  const rightNavModal = document.querySelector('.rightNav-modal');
  const theme = document.querySelector('#theme');
  const themeModal = document.querySelector('#themeModal');
  const arrowLeft = document.querySelector('#arrowLeft');

  profilePhoto.addEventListener('click', () => {
    rightNavModal.style.display = 'block';
    overlay.style.display = 'block';
    profilePhoto.style.display =  'none';
    userPhoto.style.display =  'inline';
  })

  theme.addEventListener('click', () => {
    themeModal.style.display = 'block';
    rightNavModal.style.display = 'none';
  })

  arrowLeft.addEventListener('click', () => {
    rightNavModal.style.display = 'block';
    themeModal.style.display = 'none';
  })

  userPhoto.addEventListener('click', () => {
    rightNavModal.style.display = 'none';
    overlay.style.display = 'none';
    profilePhoto.style.display =  'inline';
    userPhoto.style.display =  'none';
    themeModal.style.display = 'none';
  })

  overlay.addEventListener('click', () => {
    rightNavModal.style.display = 'none';
    themeModal.style.display = 'none';
    overlay.style.display = 'none';
  })

  
}

export default topNavEvents;
