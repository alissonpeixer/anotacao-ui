getTarefa()
function getTarefa(){ 
  fetch("https://TarefasAPI.alissonpeixer.repl.co/anotacao")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.length)

    data.length && data.map(tarefa =>{
     
      const li = creatLi(tarefa.tarefa);
  
      li.setAttribute("id",`${tarefa.tarefaId}`);
      
      createFooterAPI(li,tarefa);
      listTarefas.appendChild(li);

      return;

    })
  })
}


function newTarefa(data){ 
  fetch("https://TarefasAPI.alissonpeixer.repl.co/anotacao",
  {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(data)
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
}


function deletTarefa(tarefaId){ 

  fetch("https://TarefasAPI.alissonpeixer.repl.co/remove",
  {
      headers: {
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify({
        tarefaId: tarefaId
      })
  })
  .then((res) => res.json())
  .then((data) => console.log(data))
}








function createFooterAPI(li,tarefa){

  let div = document.createElement("div");
  div.classList.add("tarefa__footer");
  creatData(div,tarefa.data.split("|"));
  removeTarefa(div,`${tarefa.tarefaId}`);

  return li.appendChild(div);
}


function creatData(div,data){
  let span = document.createElement("span");

  span.classList.add("tarefa__data");
  span.innerText = `📝 Criado dia ${data[0]} as ${data[1]}`;

  div.appendChild(span);
  return
}