function signalAleart()
{
    const weather = document.getElementsByClassName('weather')[0];
    const sideLeft= document.getElementsByClassName("sideLeft")[0];
    const sideRight= document.getElementsByClassName("sideRight")[0];
    const upperNav = document.getElementsByClassName('upperNav')[0];
    const newsSection = document.getElementsByClassName('newsSection')[0];
    const salutation = document.getElementById("salutations_id")

    weather.style.animation = 'aleart .7s ease-in-out infinite alternate';
    sideLeft.style.animation = 'aleart .7s ease-in-out infinite alternate';
    sideRight.style.animation = 'aleart .7s ease-in-out infinite alternate';
    upperNav.style.animation = 'aleart .7s ease-in-out infinite alternate';
    newsSection.style.animation = 'aleart .7s ease-in-out infinite alternate';

    salutation.innerHTML = 'ALEART!'
}
function stopAleart()
{
    const weather = document.getElementsByClassName('weather')[0];
    const sideLeft= document.getElementsByClassName("sideLeft")[0];
    const sideRight= document.getElementsByClassName("sideRight")[0];
    const upperNav = document.getElementsByClassName('upperNav')[0];
    const newsSection = document.getElementsByClassName('newsSection')[0];

    weather.style.animation = 'none';
    sideLeft.style.animation = 'none';
    sideRight.style.animation = 'none';
    upperNav.style.animation = 'none';
    newsSection.style.animation = 'none';
}