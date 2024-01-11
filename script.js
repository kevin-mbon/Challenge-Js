const input = document.getElementById("input-box")
const container = document.getElementById("list-container")

function addTask(){
   if(input.value === ''){
    alert('you must enter something');
   }
   else{
    let li = document.createElement("li")
    li.innerHTML = input.value
    container.appendChild(li)
    let span = document.createElement("span")
    span.innerHTML = "delete"
    li.appendChild(span)
   }
   input.value = "";  
  saveData()
}
container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData() 
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData() 
    } 
}, false);

function saveData(){
    localStorage.setItem("todos", container.innerHTML)
}

let showToDOs = () =>{
    container.innerHTML = localStorage.getItem("todos")
}
showToDOs()