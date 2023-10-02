var index = 0;
var slides = document.querySelectorAll(".slides");
var dot = document.querySelectorAll(".dot");

function changeSlide() {
  if (index < 0) {
    index = slides.length - 1;
  }

  if (index > slides.length - 1) {
    index = 0;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dot[i].classList.remove("active");
  }

  slides[index].style.display = "block";
  dot[index].classList.add("active");

  index++;

  setTimeout(changeSlide, 4000);
}

changeSlide();



// Get references to the "Student Infos" and its dropdown
var studentInfos = document.getElementById("studentInfos");
var studentInfosDropdown = document.getElementById("studentInfosDropdown");

// Add a click event listener to toggle the dropdown
studentInfos.addEventListener("click", function () {
  if (studentInfosDropdown.style.display === "block") {
    studentInfosDropdown.style.display = "none";
  } else {
    studentInfosDropdown.style.display = "block";
  }
});
