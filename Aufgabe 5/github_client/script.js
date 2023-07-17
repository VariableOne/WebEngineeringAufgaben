function getRepos(){
document.getElementById('repos-list').innerHTML='';
document.getElementById('message').value = '';
fetch('https://api.github.com/user/repos',{

headers:{
'Authorization': 'Bearer ' + document.getElementById('password').value

}

})
.then(data => data.json())
.then(response => {

    console.log(response)
    response.forEach(element=> {
        let item = document.createElement('li');
        item.innerHTML=element.name;
        document.getElementById('repos-list').appendChild(item);
        console.log(element.name);

        let messageSuccess = "Values found!";
        message.style.color = 'green';
        document.getElementById('message').innerText = messageSuccess;
    })
})
.catch(error => {

    console.log(error)
    let messageError = "No values found";
    message.style.color = 'red';
    document.getElementById('message').innerText = messageError;


});
}





