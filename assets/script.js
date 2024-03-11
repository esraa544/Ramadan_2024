
function insertName(){
    let form_input = document.getElementById("form_input");

    let congrats = document.getElementById("congrats");
    let result = document.getElementById("result");
    var nameInput = document.getElementById("name").value;
    congrats.innerHTML = nameInput;

    form_input.classList.add('hidden');

    result.classList.remove('hidden');

    //Slider
    var slide = document.getElementById("slide");
    var upArrow = document.getElementById("downArrow");
    var downArrow = document.getElementById("upArrow");

    let x = 0;
    let width = document.querySelector(".result-box").offsetWidth;
    let equation = width * 4; //slides No. - 1
    console.log(width);

    downArrow.addEventListener("click", (e) =>{
        if(x > -equation){
            x = x - width;
        slide.style.right = x + "px"
        };
        e.preventDefault();
    });
    upArrow.addEventListener("click", (e) =>{
        if(x < "0"){
            x = x + width;
        slide.style.right = x + "px"
        };
        e.preventDefault();
    });
}

// addEventListener to the input field to listen for the Enter key
document.addEventListener('DOMContentLoaded', function () {

    
    document.getElementById('name').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {

        insertName();
        event.preventDefault(); // Prevent the default form submission behavior
    }
    });
    
});


//Background Animation
function stars() {
    let e = document.createElement("div");
    e.setAttribute("class", "star");
    document.body.appendChild(e);
    e.style.left = Math.random() * +innerWidth + "px";

    let size = Math.random() * 12;
    let duration = Math.random() * 3;

    e.style.fontSize = 18 + "px";
    e.style.animationDuration = 2 + duration + "s";
    setTimeout(function () {
        document.body.removeChild(e);
    }, 5000);
}

setInterval(function () {
    stars();
}, 100);
