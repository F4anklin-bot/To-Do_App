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
    }

}