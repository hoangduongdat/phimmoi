const carouselSlide = document.querySelector('.movie-nominate-list');
const carouselItem = document.querySelectorAll('.movie-nominate-item');

const btnPre = document.querySelector('#pre');
const btnNext = document.querySelector('#next');

let counter = 0;
const size = carouselItem[0].clientWidth + 17;
carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';

btnPre.addEventListener('click', () => {
  if (counter <= 0) {
    carouselSlide.style.transition = 'none';
    counter = carouselItem.length - 4;
    carouselSlide.style.transition = 'transform 0.6s ease-in-out';
    carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  } else {
    console.log(counter);
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter-=3;
    carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
    console.log('chiu');
  }
});

btnNext.addEventListener('click', () => {
  console.log(counter);
  if (counter >= carouselItem.length - 4) {
    counter = 0;
    carouselSlide.style.transition = 'none';
    carouselSlide.style.transition = 'transform 0.6s ease-in-out';
    console.log(counter);
    carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  } else {
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter+=3;
    carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  }
});

// tabs movi
const btnNewMovieLe = document.querySelector('#movie-le');
const btnNewMovieBo = document.querySelector('#movie-bo');
const btnNewMovieFull = document.querySelector('#movie-full');
const movieLe = document.querySelector('.movie-content-le');
const movieBo = document.querySelector('.movie-content-bo');
const movieFull = document.querySelector('.movie-content-full');

btnNewMovieLe.addEventListener('click', () => {
  btnNewMovieLe.classList.add('acti-tabs');
  btnNewMovieBo.classList.remove('acti-tabs')
  btnNewMovieFull.classList.remove('acti-tabs')
  movieLe.style.display = 'block';
  movieBo.style.display = 'none';
  movieFull.style.display = 'none';
});

btnNewMovieBo.addEventListener('click', () => {
  btnNewMovieBo.classList.add('acti-tabs');
  btnNewMovieLe.classList.remove('acti-tabs')
  btnNewMovieFull.classList.remove('acti-tabs')
  movieBo.style.display = 'block';
  movieLe.style.display = 'none';
  movieFull.style.display = 'none';
});

btnNewMovieFull.addEventListener('click', () => {
  btnNewMovieFull.classList.add('acti-tabs');
  btnNewMovieBo.classList.remove('acti-tabs')
  btnNewMovieLe.classList.remove('acti-tabs')
  movieFull.style.display = 'block';
  movieLe.style.display = 'none';
  movieBo.style.display = 'none';
});
