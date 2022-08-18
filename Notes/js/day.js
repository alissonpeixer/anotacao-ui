function daySec(){
    let msg

    var data = new Date()
    let hour = data.getHours();
    
    if(hour <= 12){
        msg = "Bom dia,";
    }
    else if(hour <= 18 ){
        msg = "Bom tarde,";
    }
    else if(hour <= 24){
        msg = "Boa noite,";
    }

    return msg
}



const userLoged = localStorage.getItem('token');

if(!userLoged){
  window.location.href = "https://alissonpeixer.github.io/anotacao-ui"
}
