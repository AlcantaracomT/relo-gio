function displayTime(){
    const dateTime = new Date();
    const hrs = dateTime.getHours();
    const min = dateTime.getMinutes();
    const sec = dateTime.getSeconds();
    const session  = document.querySelector('#session');
    
    if(hrs >= 12) {
        session.innerHTML = 'PM'
    } else {
        session.innerHTML = 'AM'
    }

    document.querySelector('#hours').innerHTML = hrs;
    document.querySelector('#minutes').innerHTML = min;
    document.querySelector('#seconds').innerHTML = sec;
}

setInterval(displayTime, 10);

// --------------------------------------------------------------

// cor da pagina ------------------------------------------------
const colors = ["#FFFFFF", "#FFDE00", "#D2DAFF", "#CFD2CF"];
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
	const randomNumber = getRandomNumber();
	document.body.style.backgroundColor = colors[randomNumber];
});

//está função soma a largura (da cor) pelo valor dela(cor) e aredonda o valor.
function getRandomNumber() {
	return Math.floor(Math.random() * colors.length);
}