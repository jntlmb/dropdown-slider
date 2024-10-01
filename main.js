import './src/input.css';

// Dropdown
const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const nav = button.nextElementSibling;

    if (nav.classList.contains('hidden')) {
      nav.classList.remove('hidden');
      nav.style.maxHeight = nav.scrollHeight + 'px';
    } else {
      nav.style.maxHeight = '0';

      nav.addEventListener(
        'transitionend',
        () => {
          nav.classList.add('hidden');
        },
        { once: true },
      );
    }
  });
});

// Image Slider

const imageDivs = document.querySelectorAll('.images');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const frame = document.getElementById('frame');
const paginationButtons = document.querySelectorAll('.pagination-btn');
const paginationIcons = document.querySelectorAll('.pagination-icon');
let currentIndex = 0;
let autoSlideInterval;

function sliderInit() {
  showImage(currentIndex);
  updatePagination(currentIndex);
  startAutoSlide();
}

function showImage(index) {
  imageDivs[index].classList.remove('hidden');
}

function showNextImage(index) {
  imageDivs[currentIndex].classList.add('hidden');
  if (index + 1 === imageDivs.length) {
    currentIndex = 0;
    showImage(currentIndex);
    updatePagination(currentIndex);
  } else {
    currentIndex += 1;
    showImage(currentIndex);
    updatePagination(currentIndex);
  }
}

function showPrevImage(index) {
  imageDivs[currentIndex].classList.add('hidden');
  if (index === 0) {
    currentIndex = imageDivs.length - 1;
    showImage(currentIndex);
    updatePagination(currentIndex);
  } else {
    currentIndex -= 1;
    showImage(currentIndex);
    updatePagination(currentIndex);
  }
}

function updatePagination(index) {
  paginationIcons.forEach((icon) => {
    icon.classList.remove('bi-circle-fill');
    icon.classList.add('bi-circle');
  });

  paginationIcons[index].classList.remove('bi-circle');
  paginationIcons[index].classList.add('bi-circle-fill');
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    showNextImage(currentIndex);
  }, 5000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

next.addEventListener('click', () => {
  showNextImage(currentIndex);
});

prev.addEventListener('click', () => {
  showPrevImage(currentIndex);
});

paginationButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    imageDivs[currentIndex].classList.add('hidden');
    currentIndex = index;
    showImage(currentIndex);
    updatePagination(currentIndex);
  });
});

frame.addEventListener('mouseover', () => {
  stopAutoSlide();
});

frame.addEventListener('mouseleave', () => {
  startAutoSlide();
});

sliderInit();
