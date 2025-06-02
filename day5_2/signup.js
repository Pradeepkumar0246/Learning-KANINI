    document.getElementById("signup").addEventListener("submit",function(event){
    event.preventDefault();
    const username =document.getElementById("username").value.trim();
    const email=document.getElementById("email").value.trim();
    const password=document.getElementById("password").value.trim();
    const confrimpassword=document.getElementById("confrimpassword").value.trim();
    const usernameerror =document.getElementById("usernameerror");
    const emailerror=document.getElementById("emailerror");
    const passworderror=document.getElementById("passworderror");
    const confrimpassworderror=document.getElementById("confrimerror");
    let valid=true;
    usernameerror.textContent="";
    emailerror.textContent="";
    passworderror.textContent="";
    confrimpassworderror.textContent="";
    if(username===""){
        usernameerror.textContent="UserName can not be empty";
        valid=false;
    }
    if(email===""){
        emailerror.textContent="email can not be empty";
        valid=false;
    }
    if (password === "") {
    passworderror.textContent = "Password can not be empty";
    valid = false;
    }
    else if (!/^(?=.*[A-Z])(?=.*[\W_]).{8,}$/.test(password)) {
    passworderror.textContent = "Password must be at least 8 characters, include 1 capital letter and 1 symbol";
    valid = false;
    }
    if(confrimpassword===""){
        confrimpassworderror.textContent="This field can not be empty";
        valid=false;
    }
    else if(password!==confrimpassword){
        confrimpassworderror.textContent="Password does not match";
        valid=false;
    }
    if(valid){
        alert("Sign Up was successfully completed");
        document.getElementById("signup").reset();
    }
});