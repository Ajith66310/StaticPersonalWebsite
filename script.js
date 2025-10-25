    $('.js-scroll-trigger').click(function(){
            $('.navbar-collapse').collapse('hide');
          });

let email;
let textarea;

document.addEventListener("DOMContentLoaded", function() {
  gsap.from(".navbar-nav li",{
    y:-5,
    opacity:0,
    stagger:1,
  })
    gsap.from(".left-image", {
    x: -600,
    opacity: 0,
    duration: 2,
    delay:1,
    ease: "power2.out"
  });

  gsap.from(".gsap-right p", {
    x: 200,
    opacity: 0,
    duration: 1,
    delay: 0.5,
    ease: "power2.out",
    stagger:1,
  });

});



  