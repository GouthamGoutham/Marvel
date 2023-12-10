document.addEventListener('DOMContentLoaded', function() {
    const btn = document.getElementById("btnR");

    var obj={
        username : '',
        email :'',
        number:'',
        password :'',
        confirm_password:''
    }

    btn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default form submission (if any)
         obj.username = document.getElementById("username").value;
         obj.email = document.getElementById("Email").value;
         obj.number = document.getElementById("number").value;
         obj.password = document.getElementById("password").value;
         obj.confirm_password = document.getElementById("Conpassword").value;

        fnValidate(obj.password, obj.confirm_password);
    });

    var fnValidate = (password, confirm_password) => {
        if(obj.username==''){
            alert("username should not be Empty");
        }
        if(obj.email==''){
            alert("Email should not be Empty");
        }
        if(obj.number==''){
            alert("Mobile number should not be Empty");
        }
        if(obj.password==''){
            alert("Password should not be Empty");
        }
        if(obj.confirm_password==''){
            alert("Confirm password should not be Empty");
        }
        if (obj.password !== obj.confirm_password) {
            alert("Password mismatch. Please ensure both passwords are the same");
        }
        fnExists(obj.username);
        localStorage.setItem(obj.username,JSON.stringify(obj));
        window.location.href = "../login.html";
    };
    function fnExists(name){
        var Users = Object.keys(localStorage);
        if(Users.includes(name)){
            alert("Username already exits. Please register unique name");
        }
        else{
        localStorage.setItem(obj.username,JSON.stringify(obj));
        window.location.href = "../login.html";
        }
    }
});
