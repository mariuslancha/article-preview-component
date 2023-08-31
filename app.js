const image = document.getElementById('myIcon');
const popup = document.getElementById('myPopup');
  
  image.addEventListener('click', () => {
    popup.style.display = 'flex';
    popup.animate([
        { transform: 'scale(0)' },
        { transform: 'scale(1)' }
      ], {
        duration: 500,
        easing: 'ease-in-out'
      });
  });