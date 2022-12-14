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
