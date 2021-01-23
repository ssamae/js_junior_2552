const body = document.querySelector("body");
const IMG_NUMBER =3;

function paintImage(imgNumber)
{
    const image =new Image();
    image.src = `https://github.com/ssamae/js_junior_2552/tree/main/Img/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.appendChild(image);

}

function getRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
const randomNumber = getRandom();
paintImage(randomNumber);
}

init();
