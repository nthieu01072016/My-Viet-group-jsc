// //  ======================================================NAV======================================================

// //If you do not have an active class set on the button element to start with, use the following code:
// // Get the container element
// var btnContainer = document.querySelector(".nav");

// // Get all buttons with class="main-menu-category" inside the container
// var btns = btnContainer.getElementsByClassName("main-menu-category");

// // Loop through the buttons and add the active class to the current/clicked button
// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//         let current = document.getElementsByClassName("active");
//         // If there's no active class
//         if (current.length > 0) {
//             current[0].className = current[0].className.replace(" active", "");
//         }
//         // Add the active class to the current/clicked button
//         this.className += " active";
//     })
// }

// const liParent = document.querySelector(".li-parent")
// const liChild = document.querySelector(".li-child")

// liParent.addEventListener("click", (e) => {
//     btnContainer.classList.toggle("is-show-1")
// })
// liChild.addEventListener("click", (e) => {
//     btnContainer.classList.toggle("is-show-2")
// })

// const liParent2 = document.querySelector(".li-parent-2")
// const liChild2 = document.querySelector(".li-child-2")
// liParent2.addEventListener("click", (e) => {
//     btnContainer.classList.toggle("is-show-3")
// })
// liChild2.addEventListener("click", (e) => {
//     btnContainer.classList.toggle("is-show-4")
// })

//  ======================================================NAV-2======================================================
const currentLocation = location.href;
const menuItem = document.querySelectorAll('.main-menu-category');
for (let i = 0; i < menuItem.length; i++) {
    if (menuItem[i].href === currentLocation) {
        menuItem[i].className += " active";
    }
}


// ======================================================SMALL SCREEN - NAVBAR======================================================

//use with this libary:, set in head tag: <script src="https://code.jquery.com/jquery-3.6.0.js"
// integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"><script>

$(document).ready(function () {//when website has finished loading then execute function
    $('#nav-toggle').click(function () {//when click to toggle button then execute function
        $('.nav').slideToggle();
        $(this).toggleClass('fa-times');
    })
})


$('#search-icon').click(function () {
    $(this).toggleClass('fa-times');
    $('#search-form').toggleClass('active');
});

//========================================RESIZE THE NAVBAR AND SCROLL TO TOP========================================

// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 80px and 20px from the top of the document, resize the navbar's padding, the logo's font size and show the button

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 || document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

        mybutton.style.display = "block";

        document.querySelector(".banner-image").style.height = "60px";

        const nodeList = document.querySelectorAll(".main-menu-category");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.margin = "20px 15px";
        }

        document.getElementById("search-icon").style.margin = "22px 0";

        document.querySelector(".nav").style.top = "61px";

        document.querySelector("#search-form").style.top = "61px";


    } else {

        mybutton.style.display = "none";

        document.querySelector(".banner-image").style.height = "85px";

        const nodeList = document.querySelectorAll(".main-menu-category");
        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.margin = "30px 15px";
        }

        document.getElementById("search-icon").style.margin = "35px 0";

        document.querySelector(".nav").style.top = "85px";

        document.querySelector("#search-form").style.top = "85px";

    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

