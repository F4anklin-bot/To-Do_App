const input = document.getElementById("input");
const liste = document.getElementById("list-container");

// Charger les tâches sauvegardées au démarrage de la page
function chargerTaches() {
    const taches = JSON.parse(localStorage.getItem("taches")) || [];
    taches.forEach(tache => {
        let li = document.createElement("li");
        li.innerHTML = tache;
        liste.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    });
}

// Sauvegarder les tâches dans le localStorage
function sauvegarderTaches() {
    const taches = [];
    document.querySelectorAll("#list-container li").forEach(li => {
        taches.push(li.textContent.replace("\u00d7", "")); // Exclure le symbole "×"
    });
    localStorage.setItem("taches", JSON.stringify(taches));
}

// Ajouter une tâche
function ajouter() {
    if (input.value === "") {
        alert("Veuillez entrer une tâche à faire");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input.value;
        liste.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        sauvegarderTaches(); // Sauvegarder les tâches après ajout
    }
    input.value = "";
}

// Gérer les clics sur les tâches
liste.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        sauvegarderTaches(); // Sauvegarder les tâches après modification
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        sauvegarderTaches(); // Sauvegarder les tâches après suppression
    }
}, false);

// Charger les tâches au démarrage de la page
chargerTaches();