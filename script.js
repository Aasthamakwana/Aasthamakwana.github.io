//Pre-loader
var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
})

//Opactiy for nav
var navbar = document.querySelector('nav')
window.onscroll = function () {

  // pageYOffset or scrollY
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
  } else {
    navbar.classList.remove('scrolled')
  }
}

//Mobile-menu bg 
var clicked = false;

function toggleMobileMenu(menu) {
  if (clicked) {
    menu.classList.toggle('open');
    document.getElementById("km-btn").style.display = "inline-block";
    document.getElementById("content-text").style.display = "inline-block";
  }
  else {
    menu.classList.toggle('open');
    document.getElementById("km-btn").style.display = "none";
    document.getElementById("content-text").style.display = "none";
  }
  clicked = !clicked;
}

//Navbar Scroll effect
var lastScrollTop; // This Varibale will store the top position
navbar = document.getElementById('navbar'); // Get The NavBar
window.addEventListener('scroll', function () {
  //on every scroll this funtion will be called
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  //This line will get the location on scroll
  if (scrollTop > lastScrollTop) { //if it will be greater than the previous
    navbar.style.top = '-80px';
    //set the value to the negetive of height of navbar 
  }
  else {
    navbar.style.top = '0';
  }
  lastScrollTop = scrollTop; //New Position Stored
});


//famous color 0f1922  purple 6919ff  fc0034 

//Submit button
        const btn = document.querySelector("#btn");
        const btnText = document.querySelector("#btnText");

        btn.onclick = () => {
          if(document.getElementById("textsend").value==="" ){
            // alert("Fill up the values");
          }else if(document.getElementById("mailmail").value===""){
            // alert("Fill up the email-value");
          }
          else{
            btnText.innerHTML = "Thanks";
            btn.classList.add("active1");
            btn.style.backgroundColor="#6919ff";
        };
      };

        









 






        

