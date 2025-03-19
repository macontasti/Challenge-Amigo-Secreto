let listaAmigos = [];
let ingresoAmigos = document.getElementById('amigo');
let listadeAmigos = document.getElementById('listaAmigos');



//function agregarAmigo al array listaAmigos
function agregarAmigo() {

    if (ingresoAmigos 
        .value === '') {
        alert('Debes ingresar un nombre');
        return;
    } 

    let amigo = ingresoAmigos.value;
    listaAmigos.push(amigo);
    ingresoAmigos.value = '';
    console.log(listaAmigos);
    
    // Agregar el nuevo amigo a la lista de manera correcta
    let nuevoElemento = document.createElement('li');
    nuevoElemento.textContent = amigo;
    listadeAmigos.appendChild(nuevoElemento);
    
    //listadeAmigos.innerHTML += `<li>${listadeAmigos.value}</li>`;

}


//function sortearAmigo
function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('No hay amigos en la lista para sortear.');
        return;
    }

    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    console.log(amigoSorteado);
    
    document.getElementById('resultado').textContent = `Amigo sorteado: ${amigoSorteado}`;
}

