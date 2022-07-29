const btn = document.querySelector(".btn__add");
const tarefasInput = document.querySelector(".tarefas");

const listTarefas = document.querySelector(".tarefas__");


btn.addEventListener("click", (e) =>{
  e.preventDefault();
  
  if(!tarefasInput.value){
    return;
  }

  creatNewTarefa(tarefasInput.value);
})


document.addEventListener('click', (e)=>{
  const el = e.target;
  const classBtn = el.className.baseVal
  if(!Boolean(classBtn)){
    console.log("Erro")
    return
  }
  console.log("qui")
  
  const removeli = document.getElementById(classBtn);
  console.log("qui")
  removeli.remove()

})



function creatNewTarefa(tarefa){
  const li = creatLi(tarefa);
  const randomID = newId()
  const ID = randomID;
  li.setAttribute("id",`${randomID}`);

  createFooter(li,randomID);
  listTarefas.appendChild(li);

  clearinput();
  return;
}

function creatLi(value){
  let li = document.createElement("li");
  let div = document.createElement("div");

  div.classList.add("tarefa__div");
  div.innerText = value;
  li.classList.add(`tarefa__li`);
  li.appendChild(div);
  return li
}

function createFooter(li,randomID){
  let div = document.createElement("div");
  div.classList.add("tarefa__footer");
  addData(div);
  removeTarefa(div,randomID);

  return li.appendChild(div);
}

function addData(div){
  var data = new Date()
  let span = document.createElement("span");

  span.classList.add("tarefa__data");
  span.innerText = `${data.toLocaleDateString()} | ${data.getHours()}:${data.getMinutes()}`;

  div.appendChild(span);
  return
}


function removeTarefa(div, randomID){
  
  let span = document.createElement("span",);
  span.classList.add("tarefa__remove");
  span.innerHTML = `
  <svg  class="${randomID}" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
  `

  div.appendChild(span);
  return 
}



function newId(){
  let id = Math.floor(Math.random() * 1000)
  return id+"alisson"
}



function clearinput(){
  tarefasInput.value = "";
  tarefasInput.focus();

  return
}
