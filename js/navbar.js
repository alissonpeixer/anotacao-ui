const navIcon = document.querySelector(".nav__icon");
const closedSidebar = document.querySelector(".closed__sidebar");
const sidebar = document.getElementById("sidebar");
const iconNavIcon = document.getElementById("right");


navIcon.addEventListener('click', e =>{

  sidebar.setAttribute("class", "active");
})

closedSidebar.addEventListener('click', e =>{
  sidebar.setAttribute("class", "");

})