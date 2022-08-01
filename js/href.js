const userLoged = localStorage.getItem('token');

if(!userLoged){
  window.location.href = "https://alissonpeixer.github.io/anotacao-ui"
}
