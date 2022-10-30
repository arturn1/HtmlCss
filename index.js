console.log("OI");
console.log(document);

// const element = document.querySelector('#box4');
// element.style.backgroundColor = 'red';

document.getElementById("box4").style.backgroundColor = "red";

// document.querySelector(".btn").addEventListener('click',
//     () => { console.log("clicado") });

const button = document.querySelector('.btn-box2');

button.addEventListener('click', () => {
    console.log("in");
    document.querySelector(".box4").style.transition = "2s";
    document.getElementById("box4").style.transition = "2s";
    document.querySelector('.box4').style.backgroundColor = 'red';
    document.querySelector('#box4').style.backgroundColor = 'purple';
    button.classList.toggle("btn-hover")
});

const btn = document.querySelector("#btn-box3");
btn.addEventListener("click", () => btn.classList.toggle("toogle-color"));

