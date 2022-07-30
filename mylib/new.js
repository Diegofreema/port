var typed = new Typed(".typing",{
  strings: ["Web Designer", " Web Developer", "Blockchain Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 500,
	speedAsDuration: true
});


myBtn = document.getElementById("myBtn");

window.onscroll = function () {scrollFunction()};

function scrollFunction(){
  if(document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    myBtn.style.display = "block";
  }else {
    myBtn.style.display = "none";
  }
  this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 28,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
0: {
slidesPerView: 1,
spaceBetween: 25,
},
540: {
slidesPerView: 2,
spaceBetween: 25,
},
1050: {
slidesPerView: 3,
spaceBetween: 30,
},
},
});


const scriptURL = 'https://script.google.com/macros/s/AKfycbx5WKn3775tUXANazDHRJfKghjbBmvWkJLp-0XlPEhWN8-hoSrDKA2PLFusfvsXj4Ma/exec'
      const form = document.forms['submit-to-google-sheet']
      const msg = document.getElementById("msg")
      form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
          .then(response => {

            msg.innerHTML = "Message has been sent!!!"
            setTimeout(function(){
              msg.innerHTML = ""
            },5000)
            form.reset()
          })
          .catch(error => console.error('Error!', error.message))
      })


const loader = document.querySelector(".loader");
      window.addEventListener("load", function() {
          loader.style.display = "none";
      })