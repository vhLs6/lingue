const menu = document.getElementById("menu");
const sidebar = document.getElementById("sidebar");

if (menu && sidebar) {
  menu.addEventListener("click", () => {
    const isOpen = sidebar.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      sidebar.classList.remove("open");
      menu.setAttribute("aria-expanded", "false");
    }
  });
}
