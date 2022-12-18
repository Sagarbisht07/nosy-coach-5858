const Register_btn = document.querySelector(".form form");
Register_btn.addEventListener("submit",RegisterFunction);

async function RegisterFunction(event) {
    try {
      event.preventDefault();
      let all_input_tags = document.querySelectorAll(".form .input-field input");
      let all_select_tags = document.querySelectorAll(".form .input-field select");
      let userObj = {};
      for (let i = 0; i < all_input_tags.length - 2; i++) {
        userObj[all_input_tags[i].id] = all_input_tags[i].value;
      }
      for (let i = 0; i < all_select_tags.length; i++) {
        userObj[all_select_tags[i].id] = all_select_tags[i].value;
      }
      // affiliate code
      userObj[all_input_tags[5].id] = all_input_tags[5].value;
      console.log(userObj);
      let register_request = await fetch("http://localhost:9090/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userObj)
      });
      if(register_request.ok){
          swal("Good job!", "User has been created Sucessfully!!", "success");
          // alert("User has been created Sucessfully!!");
          window.location.href = "Student-Login.html";
      }else{
          alert("Bad request has been made.");
      }
    } catch (error) {
      alert("Something went wrong. Please try again later.");
    }
  }
