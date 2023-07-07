function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  sidebar.classList.toggle("active");
}
const menu = document.querySelector(".user-img");
menu.addEventListener("click", toggleSidebar);

const cancel = document.querySelector(".cancel")
cancel.addEventListener("click", function () {
    var sidebar = document.getElementById("sidebar");
    sidebar.classList.remove("active");
})