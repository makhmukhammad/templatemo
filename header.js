const card = document.querySelector(".card");
const hamberger = document.getElementById("hamberger");

hamberger.addEventListener("click", (e) => {
  card.classList.toggle("active-navbar");
});

const header = document.getElementById("header");
const headerHeight = header.offsetHeight;

const fixHeader = () => {
  if (window.pageYOffset >= headerHeight) {
    header.classList.add("sticky_header");
  } else {
    header.classList.remove("sticky_header");
  }
};

window.addEventListener("scroll", fixHeader);
