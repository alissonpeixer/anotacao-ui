getTarefa()
function getTarefa(){ 
  fetch("https://TarefasAPI.alissonpeixer.repl.co/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.length)

    data.length && data.map(tarefa =>{
     
      const li = creatLi(tarefa.tarefa);
  
      li.setAttribute("id",`${tarefa.tarefaId}`);
      
      createFooter(li,`${tarefa.tarefaId}`);
      listTarefas.appendChild(li);

      return;

    })
  })
}


function newTarefa(data){ 
  fetch("https://TarefasAPI.alissonpeixer.repl.co/",
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




