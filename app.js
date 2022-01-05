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


const gap = 14
const photosContainer= document.getElementById('photos__container')
const photos = document.getElementsByClassName('photo')

function cascadeDisplay() {
  const photosContainerWidth = photosContainer.offsetWidth
  const photoWidth = photos[0].offsetWidth
  // 計算一列最多有幾欄
  const columnsCount = parseInt((photosContainerWidth) / ( photoWidth + gap ))
  const fistRowPhotosHeightArray = []
  // 進行照片排序
  for (let i = 0; i < photos.length; i++) {
    // 放上第一列的照片
    if (i < columnsCount) {
      photos[i].style.top = 0
      photos[i].style.left = (photoWidth + gap) * i + 'px'
      // 紀錄第一列的照片高
      fistRowPhotosHeightArray.push(photos[i].offsetHeight)
    } else {
      // 放上第二列開始的照片
      // 找出第一列的最小高度
      let minHeight = Math.min(...fistRowPhotosHeightArray)
      // 紀錄最小高度的index，以取得對應到第一列的位置，來決定left要移動多少
      let index = fistRowPhotosHeightArray.indexOf(minHeight)
      // 調整接續的photo位置，放到目前最小高度的地方
      photos[i].style.top = minHeight + gap + 'px'
      // 取得對應到第一列photo的left位置
      photos[i].style.left = photos[index].offsetLeft + 'px'
      // 最後!!再把原本儲存在陣列裡面為最小高度的值，更新上最新的高度(原本的高度+新的高度+間隔)
      fistRowPhotosHeightArray[index] = fistRowPhotosHeightArray[index] + photos[i].offsetHeight + gap
    }
  }

}

// 畫面一進來
window.onload = function() {
  cascadeDisplay()
}

// 畫面寬度有變動
window.onresize = function() {
  cascadeDisplay()
}