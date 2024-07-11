function HandleLogin(login) { 
    if(login === "true"){ 
        localStorage.setItem("isLogged", false)
        window.location.reload(false); 
    } 
    else { 
        localStorage.setItem("isLogged", true);
    }
}

export default HandleLogin;

