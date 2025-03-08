function loginSytem() {
    let user_password = prompt("Enter your password:");
    let user_name = prompt("Enter your username:");

    let stored_password = "mica123"; 

    if (user_password === stored_password) {
        alert('Welcome ${use_name}');
    } else {
        alert("Maybe Username or Password is Invalid or Does not Match");
    }
}