var color1 = document.querySelector(".color1");var css= document.querySelector("h3");var color2 = document.querySelector(".color2");var body = document.getElementById("bg");function setgradient(){body.style.backgroundImage = ("linear-gradient(to right, "+color1.value+","+color2.value+")");css.textContent= "background : "+body.style.backgroundImage +";";}
