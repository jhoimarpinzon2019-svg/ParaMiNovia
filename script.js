// ---------------- ELEMENTOS ----------------

const boton = document.getElementById("botonComenzar");

const pantallaInicio = document.getElementById("pantallaInicio");

const contenido = document.getElementById("contenido");

const fotos = document.querySelectorAll(".foto");

const carta = document.getElementById("carta");

const textoCarta = document.getElementById("textoCarta");

const contador = document.getElementById("contador");

const tiempo = document.getElementById("tiempo");

const musica = document.getElementById("musica");

const corazones = document.getElementById("corazones");

const pantallaFinal = document.getElementById("final");

const botonReiniciar = document.getElementById("reiniciar");

// ---------------- CARTA ----------------

const mensaje = `

Si lees esto...

Quiero que sepas que desde que llegaste a mi vida,
todo comenzó a tener más sentido.

Gracias por escucharme.
Gracias por apoyarme.
Gracias por hacerme sonreír.

Espero que este pequeño detalle
te recuerde lo importante que eres para mí.

Te amo muchísimo. ❤️

`;

// ---------------- BOTÓN COMENZAR ----------------

boton.addEventListener("click", () => {

    musica.play();

    pantallaInicio.classList.add("desaparecer");

    setTimeout(() => {

        pantallaInicio.style.display = "none";

        contenido.classList.remove("oculto");

        contenido.classList.add("mostrar");

        mostrarFotos();

    },1000);

});

// ---------------- MOSTRAR FOTOS ----------------

function mostrarFotos(){

    fotos.forEach((foto,index)=>{

        setTimeout(()=>{

            foto.classList.add("mostrar");

            if(index === fotos.length-1){

                setTimeout(()=>{

                    contenido.classList.add("desaparecer");

                    setTimeout(()=>{

                        contenido.style.display="none";

                        carta.classList.remove("oculto");

                        carta.classList.add("mostrar");

                        escribirCarta();

                    },1000);

                },3500);

            }

        },index*600);

    });

}

// ---------------- ESCRIBIR CARTA ----------------

function escribirCarta(){

    console.log("Entro a escribirCarta");

    textoCarta.textContent="";

    let i=0;

    const intervalo=setInterval(()=>{

        textoCarta.textContent+=mensaje.charAt(i);

        i++;

        if(i>=mensaje.length){

            clearInterval(intervalo);

            setTimeout(()=>{

                carta.classList.add("desaparecer");

                setTimeout(()=>{

                    carta.style.display="none";

                    contador.classList.remove("oculto");

                    contador.classList.add("mostrar");

                    actualizarContador();

                },1000);

            },3000);

        }

    },80);

}

// ---------------- CONTADOR ----------------

function actualizarContador(){

    const inicio = new Date("2026-06-15T00:00:00");

    function actualizar(){

        const ahora = new Date();

        const diferencia = ahora - inicio;

        const dias = Math.floor(diferencia / (1000*60*60*24));

        const horas = Math.floor((diferencia / (1000*60*60)) % 24);

        const minutos = Math.floor((diferencia / (1000*60)) % 60);

        const segundos = Math.floor((diferencia / 1000) % 60);

        tiempo.innerHTML =
        dias + " días<br>" +
        horas + " horas<br>" +
        minutos + " minutos<br>" +
        segundos + " segundos";

    }

    actualizar();

    const reloj = setInterval(actualizar,1000);

    crearCorazones();

    setTimeout(()=>{

        clearInterval(reloj);

        contador.classList.add("desaparecer");

        setTimeout(()=>{

            contador.style.display="none";

            pantallaFinal.classList.remove("oculto");

            pantallaFinal.classList.add("mostrar");

        },1000);

    },10000);

}

// ---------------- CORAZONES ----------------

function crearCorazones(){

    setInterval(()=>{

        const corazon=document.createElement("div");

        corazon.classList.add("corazon");

        corazon.innerHTML="❤️";

        corazon.style.left=Math.random()*100+"%";

        corazon.style.fontSize=(20+Math.random()*30)+"px";

        corazon.style.animationDuration=(6+Math.random()*4)+"s";

        corazones.appendChild(corazon);

        setTimeout(()=>{

            corazon.remove();

        },10000);

    },500);

}

// ---------------- REINICIAR ----------------

botonReiniciar.addEventListener("click",()=>{

    location.reload();

});