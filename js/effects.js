const sideLeft = document.getElementsByClassName("sideLeft")[0];
const sideRight = document.getElementsByClassName("sideRight")[0];
const slideAnimation = document.querySelectorAll(".animationSlide")[0];
const weatherSection = document.getElementsByClassName("weather")[0];
const newsContainer = document.getElementsByClassName("newsContainer")[0];
const root = document.querySelector(':root');

console.log(sideLeft)
sideLeft.addEventListener("click", (e) => {
    if(root.style.getPropertyValue('--width_sidebars') == '17vw'){
        root.style.setProperty('--width_sidebars','40px');
        sideLeft.firstElementChild.style.display = 'none'; //name
        sideLeft.children[1].style.display = 'block' //image
        sideRight.firstElementChild.style.display = 'none'; //options
        sideRight.children[1].style.display = 'block' //image
    }
    else{
        root.style.setProperty('--width_sidebars','17vw');
        sideLeft.firstElementChild.style.display = 'block'; //name
        sideLeft.children[1].style.display = 'none' //image
        sideRight.firstElementChild.style.display = 'flex'; //options
        sideRight.children[1].style.display = 'none' //image
    }
})
sideRight.addEventListener("click", (e) => {
    if(root.style.getPropertyValue('--width_sidebars') == '17vw'){
        root.style.setProperty('--width_sidebars','40px');
        sideLeft.firstElementChild.style.display = 'none';//name
        sideLeft.children[1].style.display = 'block' //image
        sideRight.firstElementChild.style.display = 'none'; //options
        sideRight.children[1].style.display = 'block' //image
    }
    else{
        root.style.setProperty('--width_sidebars','17vw');
        sideLeft.firstElementChild.style.display = 'block'; //name
        sideLeft.children[1].style.display = 'none' //image
        sideRight.firstElementChild.style.display = 'flex'; //options
        sideRight.children[1].style.display = 'none' //image
    }
})
