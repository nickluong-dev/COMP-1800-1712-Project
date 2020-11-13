function logIn(){
    var userEmail = document.getElementById("email_signin").value;
    var userPassword = document.getElementById("password_signin").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
        alert(errorMessage)
      });

}