const userLoged = localStorage.getItem('token');

validUserSession(userLoged)
function validUserSession(value){
  
  fetch("http://localhost:9901/session",
  {
    headers: {
      "Authorization": "Basic " + ":" + btoa(value)
    },
    method: "GET"
  })
  .then((res) => res.json())
  .then((data) => {
    const userInfo = data.userPrisma[0]
    

    console.log(userInfo)
  })
}

if(!userLoged){
  window.location.href = "http://localhost:5500/anotacao-ui"
}
