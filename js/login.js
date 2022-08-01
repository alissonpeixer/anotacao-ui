const userLoged = localStorage.getItem('token');
  if(userLoged){
    window.location.href = "https://alissonpeixer.github.io/anotacao-ui/notes.html";
  }



  function login(){
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;

    fetch("https://TarefasAPI.alissonpeixer.repl.co/login",
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
