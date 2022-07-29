function newTarefa(data){ 
  fetch("http://localhost:9901/",
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

