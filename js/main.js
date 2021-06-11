$(document).ready(function() {
  $('.view').magnificPopup({
    type:'image',
    width:500,
  });
});



// ------------------------------navigation menu------------------------

(() =>{
  const hamburgerBtn = document.querySelector(".hamburger-btn"),
  navMenu =document.querySelector(".nav-menu"),
  closeNavBtn= document.querySelector(".close-nav-menu");

  hamburgerBtn.addEventListener("click",showNavMenu);
  closeNavBtn.addEventListener("click",hideNavMenu);

  function showNavMenu(){
    navMenu.classList.add("open");
    bodyScrollingToggle();
  }
  function hideNavMenu(){
    navMenu.classList.remove("open");
    fadeOutEffect();
    bodyScrollingToggle();
  }
  function fadeOutEffect(){
    document.querySelector(".fade-out-effect").classList.add("active");
    setTimeout(() =>{
      document.querySelector(".fade-out-effect").classList.remove("active");
    },300)
  }
  function bodyScrollingToggle(){
    document.querySelector("body").classList.add("hidden-scrolling");
  }
  //atach an event handler to documnt
  document.addEventListener("click", (event) =>{
    if (event.target.classList.contains('link-item')) {
      /*make sure event.target.hash a value before overridding default behavior*/
      if (event.target.hash !=="") {
      //prevernt default anchor click behavior
      event.preventDefault();
      const hash = event.target.hash; 
      //deactive existing active secion
      document.querySelector(".section.active").classList.add("hide");
      document.querySelector(".section.active").classList.remove("active");
      //active a new section
      document.querySelector(hash).classList.add("active");
      document.querySelector(hash).classList.remove("hide");

      // deactive active naviagtion manu 'link-item'
      navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
      navMenu.querySelector(".active").classList.remove("active","inner-shadow");
      //if clicked "link-itme is contains within the navigation menu "
      if (navMenu.classList.contains("open")) {
        //active new navigation menu 'link-menu'
        event.target.classList.add("active","inner-shadow");
        event.target.classList.remove("outer-shadow","hover-in-shadow");
        //hide navigation menu
        hideNavMenu();
        }else{
          let navItems = navMenu.querySelectorAll(".link-item");
          navItems.forEach((item) =>{
            if (hash === item.hash) {
              //active new navigation menu "link-item"
              item.classList.add("active","inner-shadow");
              item.classList.remove("outer-shadow","hover-in-shadow");
            }
          })
          fadeOutEffect();
        }
        // add hash to url .............
        window.location.hash = hash;
      }
    }
  })
})();


// ------------------------------testimonial slider------------------------
(() =>{
  const sliderContainer = document.querySelector(".testi-slider-container"),
  slides = document.querySelectorAll(".testi-item"),
  sliderWidth = sliderContainer.offsetWidth,
  prevBtn = document.querySelector(".testi-slider-nav .prev"),
  nextBtn = document.querySelector(".testi-slider-nav .next"),
  activeSlide = document.querySelector(".testi-item.active");
  let sliderIndex = Array.from(activeSlide.parentElement.children).indexOf(activeSlide);

  //set width of all slides
  slides.forEach((slide) =>{
    slide.style.width = sliderWidth + "px"
  })


  // set width of sliderConainer 
  sliderContainer.style.width = sliderWidth * slides.length + "px";

  nextBtn.addEventListener('click',() =>{
    if (sliderIndex === slides.length-1) {
      sliderIndex = 0;
    }else{
      sliderIndex++;
    }
    slide();
  });
  prevBtn.addEventListener('click',() =>{
    if (sliderIndex === 0) {
      sliderIndex = slides.length-1;
    }else{
      sliderIndex--;
    }
    slide();
  })
  function slide(){
    //deactive existing active slides
    sliderContainer.querySelector(".testi-item.active").classList.remove("active");
    //active new slide
    slides[sliderIndex].classList.add("active");
    sliderContainer.style.marginLeft = -(sliderWidth * sliderIndex) + "px";
  }
  slide();
})();


/* ----------------------------------------
hide all section acpeted active
-------------------------------------------*/
(() =>{
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) =>{
    if (!section.classList.contains("active")) {
      section.classList.add("hide");
    }
  })
})();

