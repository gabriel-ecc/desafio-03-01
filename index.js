const precio = 400000
let contador = 0;
let totalPago = 0;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let botonSumar = document.getElementById('btn-sumar');
let botonRestar = document.getElementById('btn-restar');

function sumar() {
  contador = contador + 1;
  totalPago = contador * precio;
  let selectorCantidad = document.getElementById('cantidad');
  selectorCantidad.innerHTML = contador;
  let selectorTotal = document.getElementById('valor-total');
  selectorTotal.innerHTML = totalPago;
}

function restar() {
    contador = contador - 1;
    totalPago = contador * precio;
    let selectorCantidad = document.getElementById('cantidad');
    selectorCantidad.innerHTML = contador;
    let selectorTotal = document.getElementById('valor-total');
    selectorTotal.innerHTML = totalPago;
}

botonSumar.addEventListener('click', sumar);
botonRestar.addEventListener('click', restar);