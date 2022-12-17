let emailId = document.querySelector(".email");
let pNumber = document.querySelector(".pNumber");
let subject = document.querySelector(".subject");
let message = document.querySelector(".mes");
let submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
  console.log("clicked");
  let obj = {
    emailId: emailId.value,
    pNumber: pNumber.value,
    subject: subject.value,
    message: message.value,
  };

  Swal.fire(
    `${obj.emailId}`,
    "We successfully received your details. Will contact you soon",
    "success"
  );
  console.log(obj);
});

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