let slideIndex = 0;
showSlides();

function showSlides() { 
    let i;
    let slides = document.getElementsByClassName("mySlides"); //ensures that all the slides are not showing//
    for (i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slideIndex++; //starting at 0, after the slides are all not showing, increases the counter by 1//
    if (slideIndex > slides.length) { //enusres that the slideshow repeats itself//
        slideIndex =1
    }
    slides[slideIndex-1].style.display = "block"; //switches the 'current' slide to be visible//
    setTimeout(showSlides, 2000); //waits 2 seconds//
}