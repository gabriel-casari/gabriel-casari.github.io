
//Movimiento de la pupila
var pupil = document.getElementsByClassName("pupil");

document.onmousemove = function()
{
    var x = (event.clientX - (window.innerWidth * 0.5)) * 75 / window.innerWidth + "%";
    var y = (event.clientY - (window.innerHeight * 0.5)) * 75 / window.innerHeight + "%";
    
    for (var i=0; i<1; i++)
    {   
        pupil[i].style.left = x / 2;
        pupil[i].style.top = y / 2;
        pupil[i].style.transform = "translate("+x+","+y+")";
    }
}

//Texto circular
const text1 = document.querySelector('.text1 p');

text1.innerHTML = text1.innerText.split('').map(
    (char, i) =>
    `<span style="transform:rotate(${i * 5.29}deg)">${char}</span>`
).join('');
    
//Texto circular opuesto
const text2 = document.querySelector('.text2 p');
text2.innerHTML = text2.innerText.split('').map(
    (char, i) =>
    `<span style="transform:rotate(${i * 6.42 + 180}deg)">${char}</span>`
).join('');

//Logo animation after click
var eyeball = document.querySelector('.eyeball');
var preloader = document.querySelector('.preloader');
var preloader_texture = document.querySelector('.preloader_texture');

eyeball.onclick = function(){
    eyeball.outerHTML = "<div class='eyeball_afterclick'> <div class='pupil' id='pupil'></div> <div class='shadow'></div> </div>";
    
    preloader.classList.add("preloader--hidden");
    preloader_texture.classList.add("preloader_texture--hidden");

    setTimeout(() => {
        preloader.parentNode.removeChild(preloader);
        preloader_texture.parentNode.removeChild(preloader_texture);

        var eyeball = document.querySelector('.eyeball_afterclick');
        eyeball.parentNode.removeChild(eyeball);
    }, "5000");
}