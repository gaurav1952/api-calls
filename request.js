// first way
// xmlhttp
const requset = new XMLHttpRequest();
requset.open("GET", "https://jsonplaceholder.typicode.com/users");
requset.send();
requset.onload = ()=>{
    
    if (requset.status == 200){
        let obj = JSON.parse(requset.response); 
    function apicalls(user){
        return `
        <div class = "sections"> 

            <span class = "user-section" id = "ids" >${user["id"]}</span >
            <span class = "user-section" id = "name" >${user["name"]}</span >
            <span class = "user-section" id = "username" >${user.username}</span >
            <span class = "user-section" id = "email" >${user.email}</span >
        </div>        
        `
    } 
    document.querySelector('#main').innerHTML = `
    <h1> There are ${ Object.keys(obj).length} users </h1>
    
    `
    document.querySelector('#second').innerHTML = `
         ${obj.map(apicalls).join('')}
    `
        // console.log(JSON.parse(requset.response))
        console.log(obj)
       
    } else {
    console.log(`error ${requset.status}`)
    }


    
}
