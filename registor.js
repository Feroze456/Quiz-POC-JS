
function registorSumbit() {
    var first_name = document.registorForm.firstName.value;
    var user_name = document.registorForm.userName.value;
    var password = document.registorForm.password.value;
   
    if (first_name.length <= 0) {
        alert("first name is  required");
        return false;
    }
    else if (user_name.length <= 0) {
        alert("user name  is required");

        return false;

    }

    else if (password.length < 4) {
        alert("password is 4 chartecrt required");
        return false;

    }

    else {
        var obj={
            "user_name": user_name,
            "password": password,
         
          }
         // alert(obj.user_name)
        alert("Successfully")
        localStorage.setItem('userName',obj.user_name);
        localStorage.setItem('password', obj.password);

        return true;

    }
}