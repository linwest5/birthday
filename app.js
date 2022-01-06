const btn = document.querySelector(".click-me");
let bg = document.querySelector(".black-bg");

btn.addEventListener("click", function () {
  let number = getRandom(1, 10);
  bg.style.display = "flex";
  lottery(number);
});

const close = document.querySelector(".close");
close.addEventListener("click", () => {
  bg.style.display = "none";
});

data = [
  {
    name: "阿罵金幾勒",
    img: "./images/kiss.jpg",
  },
  {
    name: "狗狗精心準備超優質滿分宇宙棒生日禮物",
    img: "./images/3d-balloons-present-box.jpg",
  },
  {
    name: "家犬優質寫真",
    img: "./images/LINE_ALBUM_202211貓狗臺南行_220102.jpg",
  },
];

let text = document.querySelector(".inner p");
let img = document.querySelector(".inner img");
const lottery = function (number) {
  console.log(number);
  if (number < 8) {
    text.textContent = data[0].name;
    img.setAttribute("src", data[0].img);
  } else if (number == 9) {
    text.textContent = data[1].name;
    img.setAttribute("src", data[1].img);
  } else {
    text.textContent = data[2].name;
    img.setAttribute("src", data[2].img);
  }
};

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandom(1, 10));

$(document).ready(function () {
  $(".carousel").slick({
    slidesToShow: 3,
    dots: true,
    centerMode: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

const text2 = ["生日快樂!"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
  if (count === text.length) {
    count = 0;
  }

  //將text[count]擷取出,存入letter
  currentText = text2[count];
  letter = currentText.slice(0, index++);

  document.querySelector(".title_hear").textContent = "吳家貓" + letter;

  //如果長度一樣,歸零重來(index)
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  setTimeout(type, 300);
})();

function appear() {
  let introductionText = document.querySelector(".introductionText");
  let contentPosition = introductionText.getBoundingClientRect().top;
  let screenPosition = window.innerHeight / 1.6;

  if (contentPosition < screenPosition) {
    introductionText.classList.add("appear");
  }
}

//介紹圖片_圖片滾動
window.addEventListener("scroll", imgMove);

function imgMove() {
  let img_01 = document.querySelector(".img_01");

  let img_01Position = img_01.getBoundingClientRect().top;

  let screenPosition = window.innerHeight / 1.6;
  console.log(screenPosition);
  if (img_01Position < screenPosition) {
    img_01.classList.add("imgAnimation");
  }
}

let play = document.querySelector('.play')
let myAudio = document.querySelectorAll('.myAudio')

play.addEventListener('click',function(){
  let num = getRandom(0,1)
  myAudio[num].play();

  play.style.animation = 'playAnimation 1.5s ease-in-out infinite'
  setTimeout(function(){
    play.style.animation = 'playAnimation2 1.5s ease-in-out infinite'
  },1500)
})