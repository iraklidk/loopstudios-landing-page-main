const navOpen = document.querySelector(".hamburger");
const navList = document.querySelector(".nav-mob");
const navClose = document.querySelector(".nav-close");

navOpen.addEventListener('click', () => {
    navList.style.display = "flex";
    navOpen.className += " open";
    navList.style.height = "100vh";
    navList.style.zIndex = 1;
    document.body.style.overflow = "hidden";
});

navClose.addEventListener('click', () => {
    navList.style.display = "none";
    navList.style.height = "0";
    navList.style.zIndex = -1;
    document.body.style.overflow = 'auto';
})