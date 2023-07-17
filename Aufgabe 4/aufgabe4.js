function getAll(){

fetch('https://dummyjson.com/products')
.then(res => res.json())
.then(console.log);
            
}

function get(idOne){
const getIt = document.getElementById("idOne");
const productId = getIt.value;

fetch('https://dummyjson.com/products/'+productId)
.then(res => res.json())
.then(console.log);
}

function post(){


fetch('https://dummyjson.com/products/add', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: "bwl"

    /* other product data */
  })
})
.then(res => res.json())
.then(console.log);

}

function put(){

const getIt = document.getElementById("idPut");
const productId = getIt.value;

fetch('https://dummyjson.com/products/'+ productId, {
  method: 'PUT', /* or PATCH */
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    title: 'iPhone Galaxy +1'
  })
})
.then(res => res.json())
.then(console.log);
}

function delet(){
const deleteIt = document.getElementById("idDelete");
const productId = deleteIt.value;
console.log(productId);

fetch('https://dummyjson.com/products/'+productId, {
  method: 'DELETE',
})
.then((response) => {
    
    return response.json();
    })
.then((data) =>  {
    console.log(data);
    })
.catch(function(error){
    console.log(error);
})

console.log("Deleted");
}