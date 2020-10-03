

function loginSumbit() {
    var user_name = localStorage.getItem('userName');
    var pass_word = localStorage.getItem('password');
    console.log(user_name + "" + pass_word);
    var loginUserName = document.loginForm.userName.value;
    var loginPassword = document.loginForm.password.value;
    if (loginUserName == user_name && loginPassword == pass_word) {
        alert("Successfully");
    } else if (loginUserName.length <= 0) {
        alert("User Name  is required");
        return false
    }else if (loginPassword.length <= 0) {
        alert("Password  is required");
        return false
    }
    else {
        alert("invalid details");
        return false;
    }
}