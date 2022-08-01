function singUp() {
  const form = document.getElementById("form-register");
    
  const name = document.getElementById("name").value;
  const surName = document.getElementById("surname").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if(!name || !surName || !username || !password || !email || !password){
    alert("Erro | Validação!");
    return;
  }


  fetch('https://TarefasAPI.alissonpeixer.repl.co/singup',{
    headers: {'Content-Type': 'application/json'},
    method: 'POST',
    body: JSON.stringify({
      name: name,
      surname: surName,
      username: username,
      email: email,
      password: password
    })
  })
  .then((res) => res.json())
  .then((data) => {
    localStorage.setItem("token", data.acessToken);
    alert("Conta criada com sucesso!")
    window.location.href = "/Web";
  }

  )
}
