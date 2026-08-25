// Obtiene el elemento HTML donde se mostrará la hora
const elementoHora = document.getElementById("hora");

// Función encargada de actualizar la hora
function actualizarHora() {

    // Obtiene la fecha y hora actual del sistema
    const ahora = new Date();

    // Obtiene horas, minutos y segundos
    const horas = String(ahora.getHours()).padStart(2, "0");
    const minutos = String(ahora.getMinutes()).padStart(2, "0");
    const segundos = String(ahora.getSeconds()).padStart(2, "0");

    // Construye la hora en formato HH:MM:SS
    const horaActual = `${horas}:${minutos}:${segundos}`;

    // Muestra la hora en la interfaz
    elementoHora.textContent = horaActual;
}

// Ejecuta la función inmediatamente
actualizarHora();

// Actualiza la hora automáticamente cada segundo
setInterval(actualizarHora, 1000);

// Registra el Service Worker
if ("serviceWorker" in navigator) {

    window.addEventListener("load", () => {

        navigator.serviceWorker
            .register("service-worker.js")
            .then(() => {
                console.log("Service Worker registrado correctamente.");
            })
            .catch((error) => {
                console.error("Error al registrar el Service Worker:", error);
            });

    });
}

