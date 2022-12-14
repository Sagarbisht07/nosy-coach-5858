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
