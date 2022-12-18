let cartIcon= document.querySelector("#cart-icon");
let cart= document.querySelector(".cart");
let closecart= document.querySelector("#close-cart");

// open cart
cartIcon.onclick=()=>{
    cart.classList.add("active");
};
 
// closecart

closecart.onclick=()=>{
    cart.classList.remove("active");
};

// slider js starts here
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}
// slider js end here 


let loginbtn=document.querySelector(".signinbut");


loginbtn.addEventListener("click",()=> {
  window.location.href= "Student-Login.html"
});