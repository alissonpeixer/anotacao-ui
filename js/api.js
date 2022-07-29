function newTarefa(data){ 
  fetch("http://192.168.3.97:9901/",
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


getTarefa()
function getTarefa(){ 
  fetch("http://192.168.3.97:9901/")
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





function deletTarefa(tarefaId){ 



  fetch("http://192.168.3.97:9901/remove",
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
