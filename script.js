const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");
const reiniciar = document.getElementById('reiniciar');
const fim = false

const jump = () =>{
    mario.classList.add("jump");

    setTimeout (() => {
        mario.classList.remove("jump");
    }, 500)
}


const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px"," ");

    if (pipePosition <= 120 && pipePosition >0 && marioPosition < 70 ) {
        pipe.style.animation = "none";
        pipe.style.left =  `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom =  `${marioPosition}px`;

        mario.src="./imagens/game-over.png";
        mario.style.width = "75px";
        mario.style.left = "50px";

        clearInterval(loop);
        fim = true;
        if (fim == true) {
            window.location.reload();
        };

    };

}, 10);



document.addEventListener("keydown", jump);