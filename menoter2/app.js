let stars = document.querySelectorAll(".stars i");
let submit = document.querySelector(".submit");
let theCard = document.querySelector(".card");
let theCard2 = document.getElementById("card2");
let selected = document.querySelector(".selected");
let check = document.querySelector("span");

let startsNum = stars.length;

stars.forEach((star, index1) => {
  star.addEventListener("click", () => {
    stars.forEach((star, index2) => {
      if (index1 >= index2) {
        star.classList.add("active");
      } else {
        star.classList.remove("active");
      }
    });

    submit.onclick = function () {
      theCard.classList.toggle("hidden");
      theCard2.classList.toggle("hidden");
      stars.classList.remove("active");
    };
  });
});

stars.forEach((st) => {
  st.addEventListener("click", () => {
    let rating = st.getAttribute("data-rating");
    selected.innerHTML = `You Selected ${rating} out of ${startsNum}`;
  });
});

check.onclick = function () {
  theCard.classList.toggle("hidden");
  theCard2.classList.toggle("hidden");
};
