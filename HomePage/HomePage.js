var slideIndex = 1; // Default slide to show first


var myTimer; // Timer for automatic slideshow


var slideshowContainer; // Container for the slideshow


window.addEventListener("load",function() { // When the page has loaded
   showSlides(slideIndex); // Display the slide with slideIndex
   myTimer = setInterval(function(){plusSlides(1)}, 3000); // Change image every 4 seconds
    slideshowContainer = document.getElementsByClassName('hospital-banner')[0];


    slideshowContainer.addEventListener('mouseenter', pause) // Pause the slideshow when mouse enters the container
   slideshowContainer.addEventListener('mouseleave', resume)
})


// NEXT AND PREVIOUS CONTROL
function plusSlides(n){
 clearInterval(myTimer);
 if (n < 0){
   showSlides(slideIndex -= 1);
 } else {
  showSlides(slideIndex += 1);
 }
  //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  if (n === -1){
   myTimer = setInterval(function(){plusSlides(n + 2)}, 3000);
 } else {
   myTimer = setInterval(function(){plusSlides(n + 1)}, 3000);
 }
}


//Controls the current slide and resets interval if needed
function currentSlide(n){
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(n + 1)}, 2000);
    showSlides(slideIndex = n);
   }
   
   
   function showSlides(n){ // Display the slide with the specific slideIndex
    var i;
    var slides = document.getElementsByClassName("hospital-banner-inner");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1} // If the slideIndex is greater than the number of slides, reset to 1
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " active";
   }
   
   
   pause = () => { // Pause the slideshow
    clearInterval(myTimer);
   }
   
   
   resume = () =>{ // Resume the slideshow
    clearInterval(myTimer);
    myTimer = setInterval(function(){plusSlides(slideIndex)}, 3000);
   }
   

   //for doctors page

   window.addEventListener("load",function() { // When the page has loaded
    showSlides1(slideIndex); // Display the slide with slideIndex
    myTimer = setInterval(function(){plusSlides1(1)}, 3000); // Change image every 4 seconds
     slideshowContainer = document.getElementsByClassName('doctors-image-banner')[0];
 
 
     slideshowContainer.addEventListener('mouseenter', pause) // Pause the slideshow when mouse enters the container
    slideshowContainer.addEventListener('mouseleave', resume)
 })
 
 
 // NEXT AND PREVIOUS CONTROL
 function plusSlides1(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides1(slideIndex -= 1);
  } else {
   showSlides1(slideIndex += 1);
  }
   //COMMENT OUT THE LINES BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
   if (n === -1){
    myTimer = setInterval(function(){plusSlides1(n + 2)}, 3000);
  } else {
    myTimer = setInterval(function(){plusSlides1(n + 1)}, 3000);
  }
 }
 
 
 //Controls the current slide and resets interval if needed
 function currentSlide1(n){
     clearInterval(myTimer);
     myTimer = setInterval(function(){plusSlides1(n + 1)}, 2000);
     showSlides1(slideIndex = n);
    }
    
    
    function showSlides1(n){ // Display the slide with the specific slideIndex
     var i;
     var slides = document.getElementsByClassName("doctors-image-banner");
     var dots = document.getElementsByClassName("dot");
     if (n > slides.length) {slideIndex = 1} // If the slideIndex is greater than the number of slides, reset to 1
     if (n < 1) {slideIndex = slides.length}
     for (i = 0; i < slides.length; i++) {
         slides[i].style.display = "none";
     }
     for (i = 0; i < dots.length; i++) {
         dots[i].className = dots[i].className.replace(" active", "");
     }
     slides[slideIndex-1].style.display = "flex";
     dots[slideIndex-1].className += " active";
    }
    
    
    pause = () => { // Pause the slideshow
     clearInterval(myTimer);
    }
    
    
    resume = () =>{ // Resume the slideshow
     clearInterval(myTimer);
     myTimer = setInterval(function(){plusSlides(slideIndex)}, 3000);
    }
 
