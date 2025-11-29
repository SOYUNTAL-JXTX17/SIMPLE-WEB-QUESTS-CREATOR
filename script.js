var theAnswers;

if (localStorage.getItem("allQuests") == null) {
    console.log("VACIO");
    localStorage.setItem("allQuests", "[]");
    theAnswers = JSON.parse(localStorage.getItem("allQuests"));
} else {
    console.log("LLENO");
    theAnswers = JSON.parse(localStorage.getItem("allQuests"));
}

var loscuestionarios = document.getElementById('loscuestionarios');


for (i = 0; i < theAnswers.length; i++) {
    var dQuest = document.createElement("div");
    dQuest.setAttribute("class", "descargarquest");
    dQuest.setAttribute("data_qid", `${i}`);
    dQuest.textContent = "EDITAR";

    var nQuest = document.createElement("div");
    nQuest.textContent = `${theAnswers[i].nombre}`;
    nQuest.style.color = `${theAnswers[i].colorT}`;
    nQuest.setAttribute("id", `${theAnswers[i].id}`);
    nQuest.setAttribute("class", "titleQuestt");

    var eQuest = document.createElement("div");
    eQuest.setAttribute("class", "eliminarquest");
    eQuest.setAttribute("id", `${i}`);
    eQuest.textContent = "X";

    var ventQuest = document.createElement("div");
    ventQuest.setAttribute("class", "ventanaquest");
    ventQuest.setAttribute("style", `background-color: ${theAnswers[i].bcolor}; border: 3px solid ${theAnswers[i].brcolor};`);

    ventQuest.appendChild(nQuest);
    ventQuest.appendChild(dQuest);
    ventQuest.appendChild(eQuest);
    loscuestionarios.appendChild(ventQuest);

    nQuest.addEventListener("click", function() {
        localStorage.setItem("quest", `${this.getAttribute("id")}`);
        console.log(localStorage.getItem("quest"));
        location.assign("cuestionario.html");
    });

    eQuest.addEventListener("click", function() {
        this.parentElement.remove();
        var rtj = Number(this.getAttribute("id"));
        theAnswers.splice(rtj, 1);
        localStorage.setItem("allQuests", JSON.stringify(theAnswers));
    });

    dQuest.addEventListener("click", function() {
        localStorage.setItem("editQuest", `${this.getAttribute("data_qid")}`);
        location.assign("crearcuestionario.html");
    });
};

document.getElementById('goback').addEventListener("click", function() {
    location.assign("inicio.html");
});

document.addEventListener("keyup", (e) => {
    if (e.keyCode === 27) {
        location.assign("inicio.html");
    }
});