# Challenge amigo secreto.

Function **agregarAmigo()**

Esta función agrega un nombre a la lista de amigos y lo muestra en la página.

Valida que el usurio  ingrese un nombre al campo de entrada, muestra una alerta.

Obtiene el nombre ingresado en el campo de entrada y lo guarda en la variable amigo, lo agrega al array listaAmigos usando .push(amigo), borra el contenido del campo de entrada (ingresoAmigos.value = ''), crea un nuevo elemento <li> y
asigna como texto del <li> el nombre del amigo ingresado.


Función **sortearAmigo()**

Esta funcion genera un número entre 0 y 1. Multiplicado por listaAmigos.length, obtiene un número entre 0 y longitud - 1.
con Math.floor() redondea el número hacia abajo, para seleccionar un índice válido del array con esto el amigo sorteado, se almacena en amigoSorteado.
