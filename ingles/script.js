const menu = document.getElementById("menu")
const sidebar = document.getElementById("sidebar")
menu.onclick = function(){
    sidebar.classList.toggle("open");
};