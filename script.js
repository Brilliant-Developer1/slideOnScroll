const images = document.querySelectorAll('.slide-in');

const scrollEvent = new IntersectionObserver(e => {
  e.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('active');
      }, 200);
    }
  });
});

images.forEach(image => {
  scrollEvent.observe(image);
});

//   console.log(entry.target);
//   if (entry.target.classList.contains('align-left')) {
//     console.log(entry.target, 'Left Side');
//     entry.target.classList.add('active');
//   } else {
//     console.log(entry.target, 'Right Side');
//     entry.target.classList.add('active');
//   }
