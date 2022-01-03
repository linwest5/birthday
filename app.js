const btn = document.querySelector('.click-me');
let bg = document.querySelector('.black-bg');

btn.addEventListener('click', function(){
    let number = getRandom(1,10);
    bg.style.display = 'flex';
    lottery(number);
})

const close = document.querySelector('.close');
close.addEventListener('click',()=>{
    bg.style.display = 'none';

})

data = [
    {
        name: '阿罵金幾勒',
        img: './images/kiss.jpg'
    },
    {
        name: '狗狗精心準備超優質滿分宇宙棒生日禮物',
        img: './images/3d-balloons-present-box.jpg'
    },
    {
        name: '家犬優質寫真',
        img: './images/LINE_ALBUM_202211貓狗臺南行_220102.jpg'
    }
]

let text = document.querySelector('.inner p');
let img = document.querySelector('.inner img')
const lottery = function(number){
    console.log(number);
    if(number < 8){
        text.textContent = data[0].name
        img.setAttribute('src', data[0].img)
    }else if(number == 9){
        text.textContent = data[1].name
        img.setAttribute('src', data[1].img)
    }else {
        text.textContent = data[2].name
        img.setAttribute('src', data[2].img)
    }
    
}

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
};

console.log(getRandom(1,10));