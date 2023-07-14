function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
  const homePage = document.querySelector(".home")
  homePage.style.backgroundColor = "rgb(63, 61, 61)";
  // var overlay = document.getElementById("overlay");
  // overlay.style.display = "block";
}
const menu = document.querySelector(".user-img");
menu.addEventListener("click", toggleSidebar);

const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", function () {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("active");
  const homePage = document.querySelector(".home");
  homePage.style.backgroundColor = "black";
  // var overlay = document.getElementById("overlay");
  // overlay.style.display = "none";
});

const screens = document.querySelector(".screen");
screens.addEventListener("click", function () {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("active");
  const homePage = document.querySelector(".home");
  homePage.style.backgroundColor = "black";
});
const screns = document.querySelector(".scren");
screns.addEventListener("click", function () {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("active");
});

const bird = document.querySelector(".bird", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});



const posts=document.querySelector("body");
posts.addEventListener("keypress",(e)=>{
  console.log(e.key);
})

$


// jquery for beginner
$(document).ready(function () {
    $(".menu-btn").click(function () {
        $(".sidebar").toggleClass("active");
      });
});
    

//function to store in local storage

function store(key, value) {
  localStorage.setItem(key, value)
}
 

