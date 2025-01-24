const input=document.getElementById("input");
const liste=document.getElementById("list-container");


function ajouter(){
    if (input.value===""){
        alert("Veuiller entrer une tâche à faire");
    }
    else {
        let li=document.createElement("li");
        li.innerHTML=input.value;
        liste.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="SUP";
        li.appendChild(span);
    }
    input.value = "";
    saveData();
}
liste.addEventListener("click", function(e){
    if (e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if (e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
}, false)

function saveData(){
    localStorage.setItem("data", liste.innerHTML);
}
function charger(){
    liste.innerHTML = localStorage.getItem("data");
}
charger();