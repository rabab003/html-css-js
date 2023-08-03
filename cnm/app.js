// document.addEventListener("DOMContentLoaded", function() {
//     const slides = document.querySelectorAll(".slide");
//     let currentSlide = 0;

//     function showSlide(slideIndex) {
//         slides.forEach((slide, index) => {
//             slide.classList.remove("active");
//             if (index === slideIndex) {
//                 slide.classList.add("active");
//             }
//         });
//     }

//     function nextSlide() {
//         currentSlide = (currentSlide + 1) % slides.length;
//         showSlide(currentSlide);
//     }

//     // Interval time for auto-sliding (in milliseconds)
//     const intervalTime = 7000;
//     setInterval(nextSlide, intervalTime);

//     // Initial slide display
//     showSlide(currentSlide);
// });

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(slideIndex) {
        slides.forEach((slide, index) => {
            slide.classList.remove("active");
            if (index === slideIndex) {
                slide.classList.add("active");
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Interval time for auto-sliding (in milliseconds)
    const intervalTime = 6000;
    setInterval(nextSlide, intervalTime);

    // Initial slide display
    showSlide(currentSlide);
});