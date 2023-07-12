function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
  // var overlay = document.getElementById("overlay");
  // overlay.style.display = "block";
}
const menu = document.querySelector(".user-img");
menu.addEventListener("click", toggleSidebar);

const cancel = document.querySelector(".cancel");
cancel.addEventListener("click", function () {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("active");
  // var overlay = document.getElementById("overlay");
  // overlay.style.display = "none";
});

const screens = document.querySelector(".screen");
screens.addEventListener("click", function () {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.remove("active");
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






// const topBar = document.querySelector("#mySection")
// topBar.addEventListener("mouseover", () => {
//   const section = document.querySelector("nav")
//   section.classList.remove("hide")
//   section.classList.add("trans")
// })
// topBar.addEventListener("mouseout", () => {
//   const section = document.querySelector("nav");
//   section.classList.add("hide");
// });
