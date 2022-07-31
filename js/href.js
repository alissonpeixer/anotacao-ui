const userLoged = localStorage.getItem('token');

if(!userLoged){
  window.location.href = "/Web"
}
