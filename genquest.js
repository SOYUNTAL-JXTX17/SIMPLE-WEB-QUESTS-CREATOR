var avisoActivo = false;
var notificacionActiva = false;
var progreso = 0;
var preguntaRespondiendose = false;
var theAnswers = answersJson;
var indexQuest = theAnswers.findIndex(j => j.id === `${localStorage.getItem("quest")}`);
var numeroFormateado;
var tiempoReal;
var tiempoEnsegundos;


function generarCuestionario() {    
    console.log(indexQuest);

    var tituloCuestionario = document.createElement("div");
    tituloCuestionario.setAttribute("id", "titulo");
    tituloCuestionario.style.color = `${theAnswers[indexQuest].colorT}`;
    tituloCuestionario.textContent = `${theAnswers[indexQuest].titulo}`;

    var containerPreguntas = document.createElement("div");
    containerPreguntas.setAttribute("class", "container");
    containerPreguntas.setAttribute("id", "preguntas");
    containerPreguntas.style = `background-color: ${theAnswers[indexQuest].bcolor}; border-color: ${theAnswers[indexQuest].brcolor}; overflow-y: scroll; overflow-x: hidden; max-height: 70%;`;

    document.body.prepend(containerPreguntas);
    document.body.style.backgroundColor = `${theAnswers[indexQuest].bodycolor}`;
    containerPreguntas.appendChild(tituloCuestionario);

    for (i = 0; i < theAnswers[indexQuest].preguntas.length; i++) {
        var divPregunta = document.createElement("div");
        var numeroSumado = JSON.parse(theAnswers[indexQuest].preguntas[i].num) + 1;
        divPregunta.setAttribute("class", "pregunta");
        divPregunta.setAttribute("id", `${theAnswers[indexQuest].preguntas[i].num}`);
        divPregunta.style = `background-color: ${theAnswers[indexQuest].bcolor}; border-style: solid; border-width: 3px; border-color: ${theAnswers[indexQuest].brcolor}; color: ${theAnswers[indexQuest].colorT};`;
        divPregunta.textContent = `Pregunta ${numeroSumado}`;

        containerPreguntas.appendChild(divPregunta);
    }

    document.querySelectorAll('.pregunta').forEach(pregunta => {
        var pId = pregunta.getAttribute("id");
        pregunta.addEventListener('click', function() {
            if (pId > progreso) {
                if (notificacionActiva == false) {
                    notificacionActiva = true;

                    var preguntaActual = pId;
                    var siguientePregunta = Number(pId) + 1;
                    var notificacion = document.createElement("div");
                    notificacion.setAttribute("id", "notificacion");
                    notificacion.textContent = `Para responder a la pregunta ${siguientePregunta}, debes de responder antes a la pregunta ${preguntaActual}`;
                    document.body.append(notificacion);

                    setTimeout(() => {
                        notificacion.remove();
                        notificacionActiva = false;
                    }, 1000);

                    return;
                }
                return;
            }
            
            if (pId < progreso) {
                return;
            }

            if (preguntaRespondiendose == false) {
                preguntaRespondiendose = true;
                var numeroSumado2 = JSON.parse(theAnswers[indexQuest].preguntas[pId].num) + 1;

                var enunciado = document.createElement("h1");
                enunciado.setAttribute("class", "enunciadopregunta");
                enunciado.textContent = `Pregunta ${numeroSumado2}`;

                var texto = document.createElement("p");
                texto.setAttribute("class", "textopregunta");
                texto.textContent = `${theAnswers[indexQuest].preguntas[pId].pregunta}`;

                var input = document.createElement("input");
                input.setAttribute("class", "entradarespuesta");
                input.setAttribute("id", "entradarespuesta");
                input.setAttribute("placeholder", "Introduce tu respuesta");

                var submit = document.createElement("div");
                submit.setAttribute("class", "enviarrespuesta");
                submit.textContent = "ACEPTAR";

                var cancel = document.createElement("div");
                cancel.setAttribute("class", "cancelarenviorespuesta");
                cancel.textContent = "SALIR";

                var containerOpciones = document.createElement("div");
                containerOpciones.setAttribute("id", "containeropciones");

                var ventana = document.createElement("div");
                ventana.setAttribute("id", "ventanapregunta");
                
                containerOpciones.appendChild(submit);
                containerOpciones.appendChild(cancel);

                ventana.appendChild(enunciado);
                ventana.appendChild(texto);
                ventana.appendChild(input);
                ventana.appendChild(containerOpciones);

                document.body.append(ventana);

                function submitt() {
                    var respuestaPuesta = input.value;

                    if (avisoActivo == false) {
                        if (respuestaPuesta.length <= 0) {
                            avisoActivo = true;

                            var respuestaVacia = document.createElement("div");
                            respuestaVacia.setAttribute("id", "respuestavacia");
                            respuestaVacia.textContent = "PARA RESPONDER, DEBES DE ESCRIBIR ALGO EN EL INPUT";
                            document.body.append(respuestaVacia);
                
                            setTimeout(() => {
                                avisoActivo = false;

                                respuestaVacia.remove();
                                preguntaRespondiendose = false;
                            }, 1000);
                            
                            return;
                        }
                    } else {
                        return;
                    }



                    if (respuestaPuesta.localeCompare(theAnswers[indexQuest].preguntas[progreso].respuesta, "en", { sensitivity: "base"})===0) {
                        ventana.remove();

                        var respuestaCorrecta = document.createElement("div");
                        respuestaCorrecta.setAttribute("id", "respuestacorrecta");
                        respuestaCorrecta.textContent = "¡RESPUESTA CORRECTA!";
                        document.body.append(respuestaCorrecta);

                        progreso += 1;
            
                        setTimeout(() => {
                            respuestaCorrecta.remove();
                            pregunta.setAttribute("class", "pregunta adivinada");
                            pregunta.removeAttribute("style");          
                            preguntaRespondiendose = false;

                            if (theAnswers[indexQuest].preguntas.length == progreso) {
                                if (JSON.parse(theAnswers[indexQuest].hayTiempo)) {
                                    document.getElementById('container').remove;
                                    clearInterval(intervalTiempo);
    
                                } 
                                document.getElementById('container').remove;
                                return;
                            }
                        }, 1000);
                        
                    } else {
                        ventana.remove();
                        
                        var respuestaIncorrecta = document.createElement("div");
                        respuestaIncorrecta.setAttribute("id", "respuestaincorrecta");
                        respuestaIncorrecta.textContent = "RESPUESTA INCORRECTA";
                        document.body.append(respuestaIncorrecta);
            
                        setTimeout(() => {
                            respuestaIncorrecta.remove();
                            preguntaRespondiendose = false;
                        }, 1000);
                    }
                }

                submit.addEventListener("click", function() {
                    submitt();
                })



                cancel.addEventListener("click", function() {
                    if (avisoActivo == true) {
                        document.getElementById("respuestavacia").remove();
                        ventana.remove();

                        avisoActivo = false;
                        preguntaRespondiendose = false;

                        return;
                    }

                    ventana.remove();
                    preguntaRespondiendose = false;
                })

                ventana.addEventListener("keydown", (e) => {
                    if (e.keyCode === 13) {
                        submitt();
                    }
                })
            } else {
                return;
            }
        })
    });
}

generarCuestionario();


if (JSON.parse(theAnswers[indexQuest].hayTiempo)) {
    // INICIALIZANDO VARIABLES
    progreso = 0;
    numeroFormateado = `${theAnswers[indexQuest].tiempo}000`;
    tiempoReal = Number(JSON.parse(numeroFormateado));
    tiempoEnsegundos = Number(JSON.parse(theAnswers[indexQuest].tiempo));

    var containerTiempo = document.createElement("div");
    containerTiempo.setAttribute("id", "containerTiempo");
    containerTiempo.textContent = `${theAnswers[indexQuest].tiempo}`;
    document.body.prepend(containerTiempo);

    var intervalTiempo = setInterval(() => {
        var tiempoRestante = tiempoEnsegundos -= 1;
        document.getElementById('containerTiempo').textContent = `${tiempoRestante}`;
    }, 1000);

    setTimeout(() => {
        clearInterval(intervalTiempo);
   
        avisoActivo = false;
        notificacionActiva = false;
        preguntaRespondiendose = false;
        numeroFormateado = `${theAnswers[indexQuest].tiempo}000`;
        tiempoReal = Number(JSON.parse(numeroFormateado));
        tiempoEnsegundos = Number(JSON.parse(theAnswers[indexQuest].tiempo));

        // ELIMINAR VENTANA DE PREGUNTAS DEL CUESTIONARIO
        document.querySelector("#preguntas").remove();
        document.querySelector("#containerTiempo").remove();
        
        if (document.querySelector("#ventanapregunta") != undefined) {
            document.querySelector("#ventanapregunta").remove();
            //return;
        };

        // VENTANA DE PUNTUACIÓN EN EL CUESTIONARIO
        var parte1 = document.createElement("div");
        parte1.setAttribute("id", "tituloacabartiempo");
        parte1.textContent = "SE ACABO EL TIEMPO";
        parte1.style.borderBottomColor = `${theAnswers[indexQuest].brcolor}`;

        var tituloPuntuacion = document.createElement("div");
        tituloPuntuacion.setAttribute("id", "titulopuntuacion");
        tituloPuntuacion.textContent = "RESULTADOS";

        var infoPuntuación = document.createElement("div");
        infoPuntuación.setAttribute("id", "infopuntuacionquest");
        infoPuntuación.textContent = `Preguntas completadas: ${progreso}`;

        var parte2 = document.createElement("div");
        parte2.setAttribute("id", "puntuacionquest");

        var reintentarQuest = document.createElement("div");
        reintentarQuest.setAttribute("id", "reintentarquest");
        reintentarQuest.textContent = "INTENTAR DE NUEVO";

        var parte3 = document.createElement("div");
        parte3.setAttribute("id", "footeracabartiempo");

        var seacaboTiempo = document.createElement("div");
        seacaboTiempo.setAttribute("id", "seacaboeltiempo");
        seacaboTiempo.style.borderStyle = "solid";
        seacaboTiempo.style.borderWidth = "2px";
        seacaboTiempo.style.borderRadius = "10px";
        seacaboTiempo.style.borderColor = `${theAnswers[indexQuest].brcolor}`;

        // AÑADIR ELEMENTOS AL HTML
        parte2.appendChild(infoPuntuación);
        parte2.prepend(tituloPuntuacion);

        parte3.appendChild(reintentarQuest);

        seacaboTiempo.appendChild(parte1);
        seacaboTiempo.appendChild(parte2);
        seacaboTiempo.appendChild(parte3);

        document.body.prepend(seacaboTiempo);

        reintentarQuest.addEventListener("click", function() {
            progreso = 0;
            document.getElementById('seacaboeltiempo').remove();
            generarCuestionario();
            containerTiempo.textContent = `${theAnswers[indexQuest].tiempo}`;
            document.body.prepend(containerTiempo);
            
            intervalTiempo = setInterval(() => {
                tiempoRestante = tiempoEnsegundos -= 1;
                document.getElementById('containerTiempo').textContent = `${tiempoRestante}`;
            }, 1000);

            setTimeout(() => {
                clearInterval(intervalTiempo);
           
                avisoActivo = false;
                notificacionActiva = false;
                preguntaRespondiendose = false;
                numeroFormateado = `${theAnswers[indexQuest].tiempo}000`;
                tiempoReal = Number(JSON.parse(numeroFormateado));
                tiempoEnsegundos = Number(JSON.parse(theAnswers[indexQuest].tiempo));

                // ELIMINAR VENTANA DE PREGUNTAS DEL CUESTIONARIO
                document.querySelector("#preguntas").remove();
                document.querySelector("#containerTiempo").remove();
                
                if (document.querySelector("#ventanapregunta") != undefined) {
                    document.querySelector("#ventanapregunta").remove();
                    //return;
                };

                // AÑADIR ELEMENTOS AL HTML
                infoPuntuación.textContent = `Preguntas completadas: ${progreso}`;
                parte2.appendChild(infoPuntuación);
                
                parte2.prepend(tituloPuntuacion);

                parte3.appendChild(reintentarQuest);

                seacaboTiempo.appendChild(parte1);
                seacaboTiempo.appendChild(parte2);
                seacaboTiempo.appendChild(parte3);

                document.body.prepend(seacaboTiempo);

            }, tiempoReal);
        });
    }, tiempoReal);
} else {
    console.log("Este cuestionario no contiene un tiempo límite");
}



document.getElementById('goback2').addEventListener("click", function() {
    location.assign("inicio.html");
});

document.addEventListener("keyup", (e) => {
    if (e.keyCode === 27) {
        location.assign("vercuestionarios.html");
    }
});