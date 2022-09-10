
// Hero right slider
var HeroRightSlider = new Swiper('.hero-right-slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    // autoplay: {
    //   delay: 2500,
    //   disableOnInteraction: false,
    // },
  });


// Profile page order list
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});



// Category slider
// var CategorySlider = new Swiper('.category-slider', {
//   slidesPerView: 4,
//   spaceBetween: 10,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   breakpoints: {
//     640: {
//       slidesPerView: 4,
//       spaceBetween: 10,
//     },
//     767: {
//       slidesPerView: 6,
//       spaceBetween: 10,
//     },
//     1024: {
//       slidesPerView: 8,
//       spaceBetween: 10,
//     },
//   }
// });

// ExpressSlider
var ExpressSlider = new Swiper('.ExpressSlider', {
  slidesPerView: 3,
  spaceBetween: 10,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    767: {
      slidesPerView: 6,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 8,
      spaceBetween: 10,
    },
  }
});

// Brands Slider
// var BrandSlider = new Swiper('.BrandSlider', {
//   slidesPerView: 3,
//   spaceBetween: 10,
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   breakpoints: {
//     440: {
//       slidesPerView: 3,
//       spaceBetween: 10,
//     },
//     640: {
//       slidesPerView: 3,
//       spaceBetween: 10,
//     },
//     767: {
//       slidesPerView: 4,
//       spaceBetween: 10,
//     },
//     1024: {
//       slidesPerView: 8,
//       spaceBetween: 10,
//     },
//   }
// });




// toggle left profile sidebar
function SidebarToggle() {
    var SidebarMenu = document.getElementById("LeftSidebar");
    if (SidebarMenu.style.display === "none" || SidebarMenu.style.display === "") {
      SidebarMenu.style.display = "block";

    } else {
      SidebarMenu.style.display = "none";
    }
  }
  


// toggle right cart sidebar
function CartSidebarToggle() {
  var CartSidebarMenu = document.getElementById("CartSidebar");
  
  if (CartSidebarMenu.style.display === "none"  || CartSidebarMenu.style.display === "") {
    CartSidebarMenu.style.display = "block";
  } else {
    CartSidebarMenu.style.display = "none";
  }
}


// Mobile toggle menu
function OpenMobileMenu() {
  var MobileSidebarMenu = document.getElementById("LeftSidebar");
  if (MobileSidebarMenu.style.display === "none" || MobileSidebarMenu.style.display === "") {
    MobileSidebarMenu.style.display = "block";
  } else {
    MobileSidebarMenu.style.display = "none";
  }
}

// Mobile Cart Sidebar
function MobileCartSidebarToggle() {
  var MobileCartSidebarMenu = document.getElementById("CartSidebar");
  
  if (MobileCartSidebarMenu.style.display === "none" || MobileCartSidebarMenu.style.display === "") {
    MobileCartSidebarMenu.style.display = "block";
  } else {
    MobileCartSidebarMenu.style.display = "none";
  }
}





// Click to top

const ClickToTop = document.querySelector('.ClickTop');

window.addEventListener('scroll', () => {

    if (window.pageYOffset > 100) {
        ClickToTop.classList.add("active");
    } else {
        ClickToTop.classList.remove("active");
    }
})

ClickToTop.addEventListener("click", function(){
    window.scrollTo(0, 0);
});


// Sticky menu
window.onscroll = function() {myFunction()};

var MainMenu = document.getElementById("MainMenu");
var stickyMenu = MainMenu.offsetTop;

function myFunction() {

  if (window.pageYOffset >= stickyMenu) {

    MainMenu.classList.add("stickyMenu")
    document.querySelector('stickyMenu').style.zIndex = "1000";

  } else {

    MainMenu.classList.remove("stickyMenu");

  }

}


// Countdown
// Set the date we're counting down to
var countDownDate = new Date("Feb 31, 2021 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.querySelector(".days").innerHTML = days;
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".seconds").innerHTML = seconds;

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);