

       form.addEventListener("submit", (e) => {
              e.preventDefault();

              validation();

                             
        });


        function validation() {
            let id = (id) => document.getElementById(id);
            let username = id('username').value,
                password = id('password').value,
                cpassword = id('cpassword').value,
                email = id('email').value,
                number = id('number').value,
                postcode = id('postcode').value;
            
            let usercheck = /^[A-Za-z][A-Za-z0-9_]{7,29}$/,
                passwordcheck = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                emailcheck = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/,
                numbercheck = /^(?:(?:\+|00)88|01)?\d{11}$/,
                postcheck = /^\d{4}$/;


            if(usercheck.test(username)){
                  document.getElementById('usererror').innerHTML = "";
            }
                  else {
                        document.getElementById('usererror').innerHTML = " Username is Invalid!";
                        return false;
                  }
            if(passwordcheck.test(password)){
                  document.getElementById('passworderror').innerHTML = "";
            }
                  else {
                        document.getElementById('passworderror').innerHTML = " Password is Invalid!";
                        return false;
                  }      
                 
            if(cpassword.match(password)){

                        document.getElementById('passworderror').innerHTML = "";
            }
                  else {
                        document.getElementById('passworderror').innerHTML = " Password not Match!";
                        return false;
                  }

            if(emailcheck.test(email)){
                  document.getElementById('emailerror').innerHTML = "";
            }
                  else {
                        document.getElementById('emailerror').innerHTML = " Email is Invalid!";
                        return false;
                  } 

             if(numbercheck.test(number)){
                  document.getElementById('phoneerror').innerHTML = "";
            }
                  else {
                        document.getElementById('phoneerror').innerHTML = " Phone Number is Invalid!";
                        return false;
                  } 
              
            if(postcheck.test(postcode)){
                  document.getElementById('posterror').innerHTML = "";
            }
                  else {
                        document.getElementById('posterror').innerHTML = " Postcode is Invalid!";
                        return false;
                  }       

            };

      


