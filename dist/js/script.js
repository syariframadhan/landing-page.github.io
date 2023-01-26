const navBar = document.querySelector(".navbar");
window.addEventListener('scroll', () => {
  const windowsPosition = window.scrollY > 0;
  navBar.classList.toggle
    ("scrolling-active", windowsPosition);
})