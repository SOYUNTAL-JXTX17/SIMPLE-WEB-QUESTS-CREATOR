var num_pregunta = -1;
var theAnswers = answersJson;
var edQuest = JSON.parse(localStorage.getItem("editQuest"));
var notificacionActiva = false;
var notiplantilla;
notiplantilla = document.createElement("div");
notiplantilla.setAttribute("id", "respuestaincorrecta");
            

document.getElementById('añadirpregunta').addEventListener("click", () => {
    num_pregunta += 1;

    var respuestaParaponer = document.createElement("input");
    respuestaParaponer.setAttribute("class", "inputpreguntaeditar unarespuesta");
    respuestaParaponer.setAttribute("data_res", `${num_pregunta}`);
    respuestaParaponer.setAttribute("placeholder", "RESPUESTA");


    var numPcontainer = document.createElement("div");
    numPcontainer.setAttribute("class", "container8 xdlol");
    numPcontainer.style.color = edQuest > 0 ? `${theAnswers[edQuest].colorT}` : `${document.getElementById("colortextoañadido").value}`;
    numPcontainer.textContent = `${Number(num_pregunta) + 1}`;

    var exitcontainer = document.createElement("div");
    exitcontainer.setAttribute("class", "container7");
    exitcontainer.textContent = "X";

    var respuestaParaponercontainer = document.createElement("div");
    respuestaParaponercontainer.setAttribute("class", "container6");

    var preguntaParaponer = document.createElement("input");
    preguntaParaponer.setAttribute("class", "preguntaeditar unapregunta");
    preguntaParaponer.setAttribute("data_num", `${num_pregunta}`);
    preguntaParaponer.setAttribute("placeholder", "PREGUNTA");
    
    var preguntaParaponercontainer = document.createElement("div");
    preguntaParaponercontainer.setAttribute("class", "container5");
        
    var nuevaPregunta = document.createElement("div");
    nuevaPregunta.setAttribute("class", "containerventanapreguntas");
    nuevaPregunta.style = edQuest > 0 ? `background-color: ${theAnswers[edQuest].bcolor}; border-color: ${theAnswers[edQuest].brcolor};` : `background-color: ${document.getElementById("colorañadido").value}; border-color: ${document.getElementById("colorbordeañadido").value};`;

    respuestaParaponercontainer.appendChild(respuestaParaponer);
    preguntaParaponercontainer.appendChild(preguntaParaponer);
    nuevaPregunta.appendChild(numPcontainer);
    nuevaPregunta.appendChild(preguntaParaponercontainer);
    nuevaPregunta.appendChild(respuestaParaponercontainer);
    nuevaPregunta.appendChild(exitcontainer);
    document.getElementById('containerParapreguntas').appendChild(nuevaPregunta);

    exitcontainer.addEventListener("click", function() {
        exitcontainer.parentElement.remove();
        num_pregunta -= 1;
    });
});

if (Number(edQuest) >= 0) {
    document.getElementById("colorañadido").value = `${theAnswers[edQuest].bcolor}`;
    document.getElementById("haytiempolimite").checked = JSON.parse(theAnswers[edQuest].hayTiempo);
    document.getElementById("tiempolimite").value = `${theAnswers[edQuest].tiempo}`;
    document.getElementById("colorbordeañadido").value = `${theAnswers[edQuest].brcolor}`;
    document.getElementById("colorfondoañadido").value = `${theAnswers[edQuest].bodycolor}`;
    document.getElementById('colortextoañadido').value = `${theAnswers[edQuest].colorT}`;
    document.getElementById("guardarcuestionario").textContent = "ACTUALIZAR CUESTIONARIO";
    document.getElementById('ventanavisual').style.backgroundColor = `${theAnswers[edQuest].bodycolor}`;
    document.getElementById('tituloventana').value = `${theAnswers[edQuest].nombre}`;
    document.getElementById('tituloventana').style.color = `${theAnswers[edQuest].colorT}`;
    document.getElementById('tituloventana').style.backgroundColor = `${theAnswers[edQuest].bcolor}`;
    document.getElementById('tituloventana').style.borderColor = `${theAnswers[edQuest].brcolor}`;
    document.getElementById('ventanavacia').style.backgroundColor = `${theAnswers[edQuest].bcolor}`;
    document.getElementById('ventanavacia').style.borderColor = `${theAnswers[edQuest].brcolor}`;

    for (m = 0; m < theAnswers[edQuest].preguntas.length; m++) {
        num_pregunta += 1;

        var respuestaParaponer2 = document.createElement("input");
        respuestaParaponer2.setAttribute("class", "inputpreguntaeditar unarespuesta");
        respuestaParaponer2.setAttribute("data_res", `${num_pregunta}`);
        respuestaParaponer2.setAttribute("placeholder", "RESPUESTA");
        respuestaParaponer2.value = `${theAnswers[edQuest].preguntas[num_pregunta].respuesta}`;
        respuestaParaponer2.style.color = `${theAnswers[edQuest].colorT}`;

        var numPcontainer2 = document.createElement("div");
        numPcontainer2.setAttribute("class", "container8 xdlol");
        numPcontainer2.style.color = `${theAnswers[edQuest].colorT}`;
        numPcontainer2.textContent = `${Number(theAnswers[edQuest].preguntas[num_pregunta].num) + 1}`;

        var exitcontainer2 = document.createElement("div");
        exitcontainer2.setAttribute("class", "container7");
        exitcontainer2.textContent = "X";

        var respuestaParaponercontainer2 = document.createElement("div");
        respuestaParaponercontainer2.setAttribute("class", "container6");

        var preguntaParaponer2 = document.createElement("input");
        preguntaParaponer2.setAttribute("class", "preguntaeditar unapregunta");
        preguntaParaponer2.setAttribute("data_num", `${num_pregunta}`);
        preguntaParaponer2.setAttribute("placeholder", "PREGUNTA");
        preguntaParaponer2.value = `${theAnswers[edQuest].preguntas[num_pregunta].pregunta}`;
        preguntaParaponer2.style.color = `${theAnswers[edQuest].colorT}`;
        
        var preguntaParaponercontainer2 = document.createElement("div");
        preguntaParaponercontainer2.setAttribute("class", "container5");
            
        var nuevaPregunta2 = document.createElement("div");
        nuevaPregunta2.setAttribute("class", "containerventanapreguntas");
        nuevaPregunta2.style = `background-color: ${theAnswers[edQuest].bcolor}; border-color: ${theAnswers[edQuest].brcolor};`;

        respuestaParaponercontainer2.appendChild(respuestaParaponer2);
        preguntaParaponercontainer2.appendChild(preguntaParaponer2);
        nuevaPregunta2.appendChild(numPcontainer2);
        nuevaPregunta2.appendChild(preguntaParaponercontainer2);
        nuevaPregunta2.appendChild(respuestaParaponercontainer2);
        nuevaPregunta2.appendChild(exitcontainer2);
        document.getElementById('containerParapreguntas').appendChild(nuevaPregunta2);

        exitcontainer2.addEventListener("click", function() {
            this.parentElement.remove();
            num_pregunta -= 1;
        });
    };
};


document.getElementById('goback3').addEventListener("click", function() {
    localStorage.setItem("editQuest", "-1");
    location.assign("inicio.html");
    console.log("click");
});

document.getElementById("añadircolor").addEventListener("click", () => {
    var colorAñadido = document.getElementById("colorañadido").value;
    var variableBCContainer = document.querySelectorAll(".containerventanapreguntas");
    document.getElementById('ventanavacia').style.backgroundColor = `${colorAñadido}`;
    document.getElementById('tituloventana').style.backgroundColor = `${colorAñadido}`;
    variableBCContainer.forEach(variableBCC => {
        variableBCC.style.backgroundColor = `${colorAñadido}`;
    });
});

document.getElementById("añadircolorborde").addEventListener("click", () => {
    var variableBRCContainer = document.querySelectorAll(".containerventanapreguntas");
    var colorbordeAñadido = document.getElementById("colorbordeañadido").value;
    document.getElementById('ventanavacia').style.borderColor = `${colorbordeAñadido}`;
    document.getElementById('tituloventana').style.borderColor = `${colorbordeAñadido}`;
    variableBRCContainer.forEach(variableBRCC => {
        variableBRCC.style.borderColor = `${colorbordeAñadido}`;
    });
});

document.getElementById("añadircolortexto").addEventListener("click", () => {
    var colortextoAñadido = document.getElementById("colortextoañadido").value;
    var variableCtexto = document.querySelectorAll(".xdlol, .unapregunta, .unarespuesta");
    document.getElementById('tituloventana').style.color = `${colortextoAñadido}`;
    variableCtexto.forEach(variableCT => {
        variableCT.style.color = `${colortextoAñadido}`;
    });
});

document.getElementById("añadircolorfondo").addEventListener("click", () => {
    var colorbodyAñadido = document.getElementById("colorfondoañadido").value;
    document.getElementById('ventanavisual').style.backgroundColor = `${colorbodyAñadido}`;
});

var plantillaCuestionario = [];

document.getElementById("guardarcuestionario").addEventListener("click", () => {
    if (notificacionActiva) {
        console.log("LOL");
        return;
    }

    // DEFINIMOS VARIABLES PARA COMPROBAR LA EXISTENCIA DE X CUESTIONARIOS
    var result2;

    // AÑADIR EL TITULO Y DEMÁS ATRIBUTOS DEL NUEVO CUESTIONARIO AL ARRAY plantillaCuestionario
    plantillaCuestionario.push({
        titulo: `${document.getElementById('tituloventana').value}`,
        nombre: `${document.getElementById('tituloventana').value}`,
        id: `${document.getElementById('tituloventana').value}`,
        bcolor: `${document.getElementById("colorañadido").value}`,
        brcolor: `${document.getElementById("colorbordeañadido").value}`,
        bodycolor: `${document.getElementById("colorfondoañadido").value}`,
        colorT: `${document.getElementById('colortextoañadido').value}`,
        hayTiempo: `${document.getElementById("haytiempolimite").checked}`,
        tiempo: `${document.getElementById("tiempolimite").value}`,
        preguntas: []
    });


    // AÑADIR LAS PREGUNTAS Y RESPUESTAS DEL NUEVO CUESTIONARIO AL ARRAY preguntas QUE ESTA DENTRO DEL ARRAY plantillaCuestionario
    for (i = 0; i <= num_pregunta; i++) {
        plantillaCuestionario.map((obj) => obj.preguntas.push({num: `${i}`,pregunta: `${document.querySelector(`[data_num="${i}"]`).value}`, respuesta: `${document.querySelector(`[data_res="${i}"]`).value}`}));
    };

    // COMPROBANDO SI EXISTE UNA LISTA DE CUESTIONARIOS
    if (localStorage.getItem("allQuests") == null) {
        console.log("LISTA DE CUESTIONARIOS NO ENCONTRADA. CREANDO NUEVA LISTA...");
        localStorage.setItem("allQuests", JSON.stringify(plantillaCuestionario));
        plantillaCuestionario = [];
        return;
    }
    
    // DEFINIMOS AL ARRAY CON LA INFORMACIÓN DEL CUESTIONARIO COMO arrQuests2
    var arrQuests2 = JSON.parse(localStorage.getItem("allQuests"));
    var result = arrQuests2.some(obj => obj && obj.nombre === plantillaCuestionario[0].nombre);
    var hayPreguntas = JSON.stringify(plantillaCuestionario[0].preguntas) === "[]";


    if (!hayPreguntas) {
        if (edQuest >= 0) { // Si se esta editando un cuestionario existente
            result2 = arrQuests2[edQuest].nombre !== plantillaCuestionario[0].nombre;
            if (result && result2) {
                if (notificacionActiva == false) {
                    notificacionActiva = true;

                    notiplantilla.textContent = `YA EXISTE UN CUESTIONARIO CON EL NOMBRE: ${plantillaCuestionario[0].nombre}`;
                    plantillaCuestionario = [];
                    document.body.appendChild(notiplantilla);
                    setTimeout(() => {
                        notificacionActiva = false;
                        notiplantilla.remove();
                    }, 2000);
                    return;
                } else {
                    return;
                }
            } else {
                if (notificacionActiva == false) {
                    arrQuests2.splice(Number(edQuest), 1, plantillaCuestionario[0]);
                    localStorage.setItem("allQuests", JSON.stringify(arrQuests2));

                    notificacionActiva = true; 

                    notiplantilla.textContent = "EDITANDO CUESTIONARIO...";
                    plantillaCuestionario = [];
                    document.body.appendChild(notiplantilla);
                    setTimeout(() => {
                        notificacionActiva = false;
                        notiplantilla.remove();
                    }, 2000);
                    return;
                } else {
                    return;
                }
            }
        }

        if (edQuest < 0) {  // Si se esta creando un nuevo cuestionario       
            if (result) {
                if (notificacionActiva == false) {
                    notificacionActiva = true;

                    notiplantilla.textContent = `YA EXISTE UN CUESTIONARIO CON EL NOMBRE: ${plantillaCuestionario[0].nombre}`;
                    plantillaCuestionario = [];
                    document.body.appendChild(notiplantilla);
                    setTimeout(() => {
                        notificacionActiva = false;
                        notiplantilla.remove();
                    }, 2000);
                    return;
                } else {
                    return;
                }                
            } else {
                if (notificacionActiva == false) {
                    notificacionActiva = true;

                    arrQuests2.push(plantillaCuestionario[0]);
                    localStorage.setItem("allQuests", JSON.stringify(arrQuests2));
                    
                    notiplantilla.textContent = "CREANDO NUEVO CUESTIONARIO...";
                    plantillaCuestionario = [];
                    document.body.appendChild(notiplantilla);
                    setTimeout(() => {                        
                        notificacionActiva = false;
                        notiplantilla.remove();
                    }, 2000);
                    return;
                } else {
                    return;
                }
            }
        }
    } else {
        notificacionActiva = true;

        notiplantilla.textContent = "Debes de añadir como mínimo 1 pregunta al cuestionario";
        document.body.appendChild(notiplantilla);
        plantillaCuestionario = [];
        setTimeout(() => {                        
            notificacionActiva = false;
            notiplantilla.remove();
        }, 2000);
        return;
    }
});

document.addEventListener("keyup", (e) => {
    if (e.keyCode === 27) {
        location.assign("inicio.html");
    }
});