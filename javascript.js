
var sl = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  sl++;
  if (sl > slides.length) {sl = 1}    
  slides[sl-1].style.display = "block";  
  setTimeout(showSlides, 3000);
}