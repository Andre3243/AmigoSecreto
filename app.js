// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

// Función para agregar un amigo para el juego
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombre);
    input.value = '';
    actualizarLista();
}

// Función para actualizar la lista visual de los amigos agregados 
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = amigos.map(nombre => `<li>${nombre}</li>`).join('');
}

// Función para sortear el amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, agregue al menos un nombre.');
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSecreto = amigos[indiceAleatorio];

    document.getElementById('resultado').textContent = amigoSecreto;
}