function myFunction() {
  var element = document.querySelector(".box_1");
  console.log(element);
  element.classList.toggle("dark-mode");
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//   window.onload = function() {
//       slider = document.querySelector(".slider input");
//       slider.oninput = function() {
//           progressBar = document.querySelector(".slider progress");
//           console.log(progressBar.value);
//           progressBar.value = slider.value;
//           sliderValue = document.querySelector(".sliderValue");
//           sliderValue.innerHTML = slider.value;
//   }
// }