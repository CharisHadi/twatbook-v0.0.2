//Reference to page elements
var $username = $("#username-form");
var $password = $("#password-form");
var $repassword = $("#repassword-form")

//Api Object Methods for requests to server
var API = {
    createUser : function(signUp) {
        return $.ajax({
            headers: {
                "Content-Type": "application/json"
            },
            type: "POST",
            url: "api/users/create",
            data: JSON.stringify(signUp)
        });
    },

    getTwerps : function() {
        return $.ajax({
            url: "api/twerps",
            type: "GET"
        });
    }
};

//Show twerps
var populateTwerps = function(){
    API.getTwerps().then((data)=>{
        
    });
};

//Sign up form submission
var userSignUp = function(event) {
    event.preventDefault();

    if($password.val().trim() !== $repassword.val().trim()){
        alert("Make sure your passwords match!");
        return;
    }
    var signup = {
        username : $username.val().trim(),
        pword : $password.val().trim()
    };

    API.createUser(signup).then(()=>{
        console.log("User Created");
        alert("Welcome! You're ready to throw out your twerps, click outside of the form to procede.");
    });

    $username.val("");
    $password.val("");
    $repassword.val("");
};

var wowiezowie = function(event) {
    event.preventDefault();
    alert("WOAH");
}
$("#btn-signup").on("click", userSignUp);
$("#twerpin").on("click", wowiezowie);