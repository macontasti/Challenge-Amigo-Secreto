let numeroSecreto = 6;
let numeroUsuario = 0;
let ntestos = 1;
while (numeroSecreto != numeroUsuario) {
     
    numeroUsuario = prompt("Me indicas un numero por favor entre 1 y 10: ");

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste el numero= ${numeroUsuario}. Numero de intentos= ${ntestos}`);
    } else {
        alert('No acertaste el numero');
    }

    ntestos++;
    if (ntestos > 3) {
        alert('Perdiste');
        break;
    }
}