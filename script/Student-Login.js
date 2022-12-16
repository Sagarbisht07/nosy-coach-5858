const Login_btn = document.querySelector(".form form");
Login_btn.addEventListener("submit",LoginFunction);

async function LoginFunction(event){
  try {
      event.preventDefault();
      let all_login_input = document.querySelectorAll(".form .input-field input");
      let obj = {};
      for(let i=0;i<all_login_input.length-1;i++){
          obj[all_login_input[i].id] = all_login_input[i].value;
      }
      console.log(obj);
      let login_request = await fetch("http://localhost:9090/user/login",{
          method : "POST",
          body : JSON.stringify(obj),
          headers : {
              "Content-Type" : "application/json"
          },
      })
      if(login_request.ok){
          let token = await login_request.json();
          sessionStorage.setItem("access_token", token.accessToken);
          alert("User has been successfully Logged In.");
      }else{
          alert("User not found.");
      }
  } catch (error) {
      alert("wrong username or password.");
  }
}
