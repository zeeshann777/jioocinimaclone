function checkinfo() {
    
    var userinfo;
    userinfo = {
        "pravin":{
            "email":"pravinshinde99300@gmail.com",
            "password":"123"
        },
        "zeeshan" : {
            "email" :"zeeshan123@gmail.com",
            "password" : "1234"
        },
    }
    var a = 1;
    var email, password,username;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    username = document.getElementById("username").value;
    if (email == userinfo[username]["email"] && password == userinfo[username]["password"])
    {
        alert("your email and password is correct");
    }
    else{
        alert("your email and password is wrong");
    }
}
