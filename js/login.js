const userLoged = localStorage.getItem('token');
  if(userLoged){
    window.location.href = "/Web/notes.html";
  }



  function login(){
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    fetch("http://192.168.3.77:9901/login",
      {
        headers: {
          "Authorization": "Basic " + btoa(login + ":" + password)
        },
        method: "GET"
      })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("token", data.acessToken);
        window.location.href = "/Web";
      })

  }