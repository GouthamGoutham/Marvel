const btn=document.getElementById("mybtn");

btn.addEventListener('click',function(){
    //window.location.href = "../home/home.html";
    fnValidate();
});

fnValidate=function(){
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username==''){
        alert("Username should not be null");
    }
    if(password==''){
        alert("password should not be empty");
    }
    var users=Object.keys(localStorage);
    if(users.includes(username)){
        UserData= JSON.parse(localStorage.getItem(username));
        UserPassword = UserData.password;
        if(password==UserPassword){
            alert("Login successful...");
            window.location.href = "../home/home.html";
        }
        else{
            alert("Incorrrect password!");
        }
    }
    else{
        alert("Username does not exists. Please register!");
    }
}
