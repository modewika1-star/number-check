function validatePassword() {
     let password = document.getElementById('password').value;
     let confirmPassword = document.getElementById('confirmPassword').value;

     if (password === confirmPassword) {
          console.log("Password is validation");
          document.getElementById('result').innerHTML = "Password is validation";
     } else {
          console.log("no valied");
          document.getElementById('result').innerHTML = "password is Not matching";
     }
}