//header scroll

document.addEventListener("DOMContentLoaded", function () {
    let nav = document.querySelector(".navbar");
    if (!nav) {
        console.error("Navbar element not found");
        return;
    }

    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            nav.classList.add("header-scrolled");
        } else {
            nav.classList.remove("header-scrolled");
        }
    });
});


// Nav hide

let navBar = document.querySelectorAll(".nav-link")
let navcollapse = document.querySelector(".navbar-collapse.collapse")

navBar.forEach(function(a){
    a.addEventListener("click",function(){
        navcollapse.classList.remove("show")
    })
})


