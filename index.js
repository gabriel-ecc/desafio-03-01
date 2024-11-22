const precio = 400000
let contador = 0;
let totalPago = 0;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio.toLocaleString('es-ES');

let botonSumar = document.getElementById('btn-sumar');
let botonRestar = document.getElementById('btn-restar');
let mostrarError = document.getElementById('texto-error');

function sumar() {
  contador = contador + 1;
  totalPago = contador * precio;
  let selectorCantidad = document.getElementById('cantidad');
  selectorCantidad.innerHTML = contador;
  let selectorTotal = document.getElementById('valor-total');
  selectorTotal.innerHTML = totalPago.toLocaleString('es-ES');
  mostrarError.innerHTML = ""
  mostrarError.classList.remove("desvanecer");
}

function restar(){
  mostrarError.classList.remove("desvanecer");
  mostrarError.innerHTML = ""
  if (contador > 0){
    contador = contador - 1;
    totalPago = contador * precio;
    let selectorCantidad = document.getElementById('cantidad');
    selectorCantidad.innerHTML = contador;
    let selectorTotal = document.getElementById('valor-total');
    selectorTotal.innerHTML = totalPago.toLocaleString('es-ES');
  }
  else {
    mostrarError.innerHTML = "Sin elementos"
    mostrarError.classList.add("desvanecer");
  }
}

botonSumar.addEventListener('click', sumar);
botonRestar.addEventListener('click', restar);