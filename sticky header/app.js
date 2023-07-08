let menu = document.querySelector(".menu")
let navbarr = document.querySelector(".navbarr")
let close = document.querySelector(".close")

window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 20);
})


menu.onclick = () => {
    navbarr.classList.add('active');
    close.style.display = 'block';
    close.style.zIndex = '3000';
}

close.onclick = () => {
    navbarr.classList.remove('active');
    // close.style.zIndex = '100';
    close.style.display = 'none';
}