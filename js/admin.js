function loginAdmin(){

    const username =
    document.getElementById(
    "username"
    ).value;

    const password =
    document.getElementById(
    "password"
    ).value;

    const status =
    document.getElementById(
    "loginStatus"
    );

    /* USERNAME & PASSWORD */

    const adminUser =
    "admin";

    const adminPass =
    "goldsilver2026";

    if(
        username === adminUser
        &&
        password === adminPass
    ){

        status.innerHTML =
        "Login Success ✨";

        localStorage.setItem(
        "adminLogin",
        "true"
        );

        setTimeout(()=>{

            window.location.href =
            "dashboard.html";

        },1000);

    }else{

        status.innerHTML =
        "Wrong Username or Password";

    }
}
