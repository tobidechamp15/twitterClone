function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
  const homePage = document.querySelector(".home");
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

const posts = document.querySelector("body");
posts.addEventListener("keypress", (e) => {
  console.log(e.key);
});

$;

// jquery for beginner
$(document).ready(function () {
  $(".menu-btn").click(function () {
    $(".sidebar").toggleClass("active");
  });
});

//function to store in local storage

function store(key, value) {
  localStorage.setItem(key, value);
}

$(document).ready(function () {
  $("#flip").click(function () {
    $("#panel").addClass("slide-up");
    $("#panel").slideToggle(900);
  });
  $("#tweet-cancel").click(() => {
    $("#panel").slideToggle(900);
  });
});
const active = $(".tweet-type").css("bottom");
console.log(active);
if (active == "-365.594px") {
  $(".tweet-page").css("background-color", "rgb(63, 61, 61)");
} else if (active == "0px") {
  $(".tweet-page").css("background-color", "black");
}
$(".drop-down").click(() => {
  $(".tweet-type").toggleClass("tweet-type-active");
  // const homePage = document.querySelector(".home");
  // homePage.style.backgroundColor = "rgb(63, 61, 61)";
  // $(".tweet-page").css("background-color", "rgb(63, 61, 61)");
  const active = $(".tweet-type").css("bottom");
  console.log(active);
  if (active == "-365.594px") {
    $(".tweet-page").css("background-color", "rgb(63, 61, 61)");
  } else if (active == "0px") {
    $(".tweet-page").css("background-color", "black");
  }
});
$(document).ready(function () {
  $('input[name="myRadio"]').change(function () {
     $("#result").text("Everyone");
    var selectedValue = $('input[name="myRadio"]:checked').val();
    $("#selectedValue").text(selectedValue);
  });
});
