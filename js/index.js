var Hello="I hope this works so badly";
console.log(Hello);

//SLIDESHOW HERO ARROWS//

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

//Skills

  $("#Empathize").hover(function(){
    $("#EmpathySkills").fadeToggle();
  });

  $("#Definition").hover(function(){
    $("#DefinitionSkills").fadeToggle();
  });

  $("#Ideation").hover(function(){
    $("#IdeationSkills").fadeToggle();
  });

  $("#Prototyping").hover(function(){
    $("#PrototypingSkills").fadeToggle();
  });

  $("#Testing").hover(function(){
    $("#TestingSkills").fadeToggle();
  });

  //About Facts
  
    