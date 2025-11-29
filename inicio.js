document.getElementById('cNC').addEventListener("click", function() {
    localStorage.setItem("editQuest", "-1");
    location.assign("crearcuestionario.html");
});

document.getElementById('vMC').addEventListener("click", function() {
    location.assign("vercuestionarios.html");
});