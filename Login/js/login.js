const userLoged = localStorage.getItem('token');

if (userLoged) {
  window.location.href = "https://alissonpeixer.github.io/anotacao-ui/Notes";
}

function login() {
  
  const login = document.getElementById("login").value;
  const password = document.getElementById("password").value;

  if(!login || !password){
    alert("Erro | Validação!");
    return;
  }

  fetch("https://noteapi.alissonpeixer.repl.co/login",
    {
      headers: {
        "Authorization": "Basic " + btoa(login + ":" + password)
      },
      method: "GET"
    })
    .then((res) => res.json())
    .then((data) => {
      const info = {
        name: data.name,
        surname: data.surname,
        id: data.id,
        username: data.username
      }
      const JsonList = JSON.stringify(info)
      localStorage.setItem("token", data.acessToken);
      localStorage.setItem("userdata", JsonList );
      window.location.href = "https://alissonpeixer.github.io/anotacao-ui/Notes";
    })

}