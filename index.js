let progress = document.querySelector(".progress");
let nextButton = document.getElementById("next");
let prevButton = document.getElementById("prev");
let circles = document.querySelectorAll(".circle");
let smile = document.querySelector(".smile");

let activeCircle = 1;

nextButton.addEventListener("click", () => {
  activeCircle++;
  if (activeCircle >= circles.length) activeCircle = circles.length;
  updates();
});

prevButton.addEventListener("click", () => {
  activeCircle--;
  if (activeCircle === 1) activeCircle = 1;

  updates();
});

const updates = () => {
  circles.forEach((circle, index) => {
    if (activeCircle > index) circle.classList.add("active");
    else circle.classList.remove("active");
  });

  let activeButton = document.querySelectorAll(".active").length;

  smile.style.left =
    ((activeButton - 1) / (circles.length - 1)) * 100 -
    3 * (activeButton - 1) +
    "%";

  progress.style.width =
    ((activeButton - 1) / (circles.length - 1)) * 100 + "%";
  console.log(
    ((activeButton - 1) / (circles.length - 1)) * 100 - 2 * (activeButton - 1)
  );
  console.dir(smile);
  if (activeButton === circles.length) nextButton.disabled = true;
  else if (activeButton === 1) {
    prevButton.disabled = true;
  } else {
    nextButton.disabled = false;
    prevButton.disabled = false;
  }
};
