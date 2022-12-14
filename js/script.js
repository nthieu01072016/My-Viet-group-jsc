// //  ======================================================NAV======================================================

// //If you do not have an active class set on the button element to start with, use the following code:
// // Get the container element
// var btnContainer = document.getElementById("nav");

// // Get all buttons with class="btn" inside the container
// var btns = btnContainer.getElementsByClassName("btn");

// // Loop through the buttons and add the active class to the current/clicked button
// for (var i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//         var current = document.getElementsByClassName("active");

//         // If there's no active class
//         if (current.length > 0) {
//             current[0].className = current[0].className.replace(" active", "");
//         }

//         // Add the active class to the current/clicked button
//         this.className += " active";
//     });
// }

//  ======================================================NAV-EDITED======================================================

//If you do not have an active class set on the button element to start with, use the following code:
// Get the container element
var btnContainer = document.querySelector(".nav");

// Get all buttons with class="main-menu-category" inside the container
var btns = btnContainer.getElementsByClassName("main-menu-category");

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        let current = document.getElementsByClassName("active");
        // If there's no active class
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active", "");
        }
        // Add the active class to the current/clicked button
        this.className += " active";
    })
}

const liParent = document.querySelector(".li-parent")
const liChild = document.querySelector(".li-child")
// const subMenuChild = document.querySelector(".sub-menu-child")
// const li = document.querySelector(".li")
liParent.addEventListener("click", (e) => {
    btnContainer.classList.toggle("is-show-1")
})
liChild.addEventListener("click", (e) => {
    btnContainer.classList.toggle("is-show-2")
})
// document.body.addEventListener("click", function (e) {
//     if (!liChild.contains(e.target) && !e.target.matches("sub-menu-child")) {
//         btnContainer.classList.remove("is-show2")
//     }
// })

const liParent2 = document.querySelector(".li-parent-2")
const liChild2 = document.querySelector(".li-child-2")
liParent2.addEventListener("click", (e) => {
    btnContainer.classList.toggle("is-show-3")
})
liChild2.addEventListener("click", (e) => {
    btnContainer.classList.toggle("is-show-4")
})

//======================================================SLIDE======================================================

var slideIndex = 0;
showSlides();
//add the global timer variable
var slides, dots, timer;

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");// All of the slides in the document
    dots = document.getElementsByClassName("dot");// All of the slide dots in the document
    for (i = 0; i < slides.length; i++) {// Hide each of the slides
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {// Replace each of the dots with the class "active" with ""
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";// Set the current slide to display as a block element
    dots[slideIndex - 1].className += " active";// Set the current slide's respective dot to the "active" class
    //put the timeout in the timer variable
    // timer = setTimeout(showSlides, 4000); // Change image every 8 seconds
}

// function plusSlides(position) {
//     //clear/stop the timer
//     clearTimeout(timer);
//     slideIndex += position;
//     if (slideIndex > slides.length) { slideIndex = 1 }
//     else if (slideIndex < 1) { slideIndex = slides.length }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     for (i = 0; i < dots.length; i++) {
//         dots[i].className = dots[i].className.replace(" active", "");
//     }
//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//     //create a new timer
//     timer = setTimeout(showSlides, 4000);
// }

function currentSlide(index) {
    //clear/stop the timer
    clearTimeout(timer);
    if (index > slides.length) { index = 1 }
    else if (index < 1) { index = slides.length }
    //set the slideIndex with the index of the function
    slideIndex = index;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index - 1].style.display = "block";
    dots[index - 1].className += " active";
    //create a new timer
    // timer = setTimeout(showSlides, 2000);
}

// ======================================================ANIMATION TEXT 1======================================================

// document.addEventListener('DOMContentLoaded', function (event) {
//     // array with texts to type in typewriter
//     var dataText = ["Lorem ipsum dolor sit amet", "consectetur adipisicing elit.Sequi, vel."];

//     // type one text in the typewriter
//     // keeps calling itself until the text is finished
//     function typeWriter(text, i, fnCallback) {
//         // check if text isn't finished yet
//         if (i < (text.length)) {
//             // add next character to h1
//             document.querySelector("h1").innerHTML = text.substring(0, i + 1) + '<span aria-hidden="true"></span>';

//             // wait for a while and call this function again for next character
//             setTimeout(function () {
//                 typeWriter(text, i + 1, fnCallback)
//             }, 100);
//         }
//         // text finished, call callback if there is a callback function
//         else if (typeof fnCallback == 'function') {
//             // call callback after timeout
//             setTimeout(fnCallback, 700);
//         }
//     }
//     // start a typewriter animation for a text in the dataText array
//     function StartTextAnimation(i) {
//         if (typeof dataText[i] == 'undefined') {
//             setTimeout(function () {
//                 StartTextAnimation(0);
//             }, 200);
//         }
//         // check if dataText[i] exists
//         if (i < dataText[i].length) {
//             // text exists! start typewriter animation
//             typeWriter(dataText[i], 0, function () {
//                 // after callback (and whole text has been animated), start next text
//                 StartTextAnimation(i + 1);
//             });
//         }
//     }
//     // start the text animation
//     StartTextAnimation(0);
// });

// ======================================================ANIMATION TEXT 2======================================================
//dùng với thư viện này: <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>, đã ad bên file index.html

const app = document.getElementById("text-animate");

let typewriter = new Typewriter(app, {
    strings: ["I love coding", "I love laptop too", "so I spend a lot of time learning programming "],
    autoStart: true,
    loop: true,
    delay: 60,
    pauseFor: 1000,
});
// ======================================================SMALL SCREEN - NAVBAR======================================================

//      dùng kèm với thư viện này, đã đặt trên thẻ head: <script src="https://code.jquery.com/jquery-3.6.0.js"
// integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"><script>

$(document).ready(function () {//khi website load xong thì thực hiện hàm
    $('#toggle').click(function () {//khi click vào nút toggle thì thực hiện hàm
        $('.nav').slideToggle();
    })
})


$('#search-icon').click(function () {
    $(this).toggleClass('fa-times');
    $('#search-form').toggleClass('active');
});



// ======================================================SCROLL TO TOP======================================================


// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// ======================================================RESIZE THE NAVBAR======================================================

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

        document.querySelector(".banner-image").style.height = "60px";

        const nodeList = document.querySelectorAll(".main-menu-category");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.margin = "15px 15px";
        }

        document.getElementById("search-icon").style.margin = "22px 0";

        } else {

        document.querySelector(".banner-image").style.height = "85px";

        const nodeList = document.querySelectorAll(".main-menu-category");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.margin = "30px 15px";
        }

        document.getElementById("search-icon").style.margin = "35px 0";
    }
}

