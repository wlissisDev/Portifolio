const btn = document.querySelector(".btn-mobile");
const nav = document.querySelector(".nav-mobile");
const icon = document.querySelectorAll(".icon");

let bool = true;
btn.addEventListener("click", () => {
  nav.classList.toggle("open", bool);
  icon[0].classList.toggle("one", bool);
  icon[1].classList.toggle("two", bool);
  icon[2].classList.toggle("three", bool);

  bool = !bool;
});

