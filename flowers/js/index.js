let sliderFlower = new Swiper(".slider-flowers", {
  // slidesPerView: 6,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  spaceBetween: 200,

  breakpoints: {
    1400: {
      slidesPerView: 6,
    },
    980: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    576: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let sliderReviews = new Swiper(".slider-reviews", {
  slidesPerView: 1,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//  **********Счетчик Выбора цветов*************
let plus = document.querySelectorAll(".btnplus");
let minus = document.querySelectorAll(".btnminus");
let input = document.querySelectorAll(".counter-input");

function min() {
  return function (ev) {
    if (ev.target.nextElementSibling.value > 0) {
      --ev.target.nextElementSibling.value;
    }
  };
}

function pl() {
  return function (ev) {
    ++ev.target.previousElementSibling.value;
  };
}

minus.forEach((subtrack) => {
  subtrack.addEventListener("click", min());
});
plus.forEach((add) => {
  add.addEventListener("click", pl());
});
// **********/Счетчик Выбора цветов*************

/* Показать все цветы */

function display() {
  let col = document.querySelectorAll(".invisible");
  col.forEach((item) => {
    item.classList.toggle("tog");
    setTimeout(() => {
      item.classList.toggle("op");
    });
  });
}
document.querySelector(".more").onclick = display;
// /* /Показать все цветы */

//  Функция добавления класса при скролле

const el = document.querySelectorAll(".anim");
if (el.length > 0) {
  document.addEventListener("scroll", element_In_Viewport);
  function element_In_Viewport() {
    for (let index = 0; index < el.length; index++) {
      const animItem = el[index];
      const animOffset = offset(animItem).top; // На сколько верх элемента находится выше ,чем верх страницы
      const animItemHeight = animItem.offsetHeight; // Высота элемента
      const animStart = 4; //На сколько высота элемента будет делится
      let animPoint = window.innerHeight - animItemHeight / animStart; //Точка начала Анимации

      if (
        pageYOffset > animOffset - animPoint && // Если количество пикселей, на которое прокручен документ больше >, чем сколько прокрутили - aimPoint
        pageYOffset < animOffset + animItemHeight
      ) {
        // или количество пикселей, на которое прокручен документ больше <, чем сколько прокрутили + высота элемента ,то
        animItem.classList.add("_active");
      } else {
        if (!animItem.classList.contains("animhide-off")) {
          animItem.classList.remove("_active");
        }
      }
    }
  }
  function offset(el) {
    let bounds = el.getBoundingClientRect();
    scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    return { top: bounds.top + scrollTop, left: bounds.left + scrollLeft };
  }
  element_In_Viewport();
}
//  /Функция добавления класса при скролле
