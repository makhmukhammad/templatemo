const card = document.querySelector(".card");
const hamberger = document.getElementById("hamberger");

hamberger.addEventListener("click", (e) => {
  card.classList.toggle("active-navbar");
});
