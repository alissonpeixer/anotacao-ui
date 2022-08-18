function logout(){
    const data = localStorage.removeItem('token') ||  localStorage.removeItem('userdata');
    window.location.href = "/"
    return data
}


// function endSession(){
//     const acessToken = localStorage.getItem('token');
    
//     fetch('http://192.168.3.117:9901/session',{
//         headers:{
//             'Authorization': "Basic" + ":" +  btoa(acessToken)
//         },
//         method: 'GET'
//     })
//     .then(res=>  console.log(res))
// }

// setInterval(
//     function sessionTime(){
//         fetch('http://192.168.3.117:9901/session',{
//             headers:{
//                 'Authorization': 1
//             },
//             method: 'GET'
//         })
//         .then(res=>console.log(res))
//     },1000
// )
