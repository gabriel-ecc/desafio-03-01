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

function restar(){
  if (contador > 0){
    contador = contador -1;
    totalPago = contador * precio;
    let selectorCantidad = document.getElementById('cantidad');
    selectorCantidad.innerHTML = contador;
    let selectorTotal = document.getElementById('valor-total');
    selectorTotal.innerHTML = totalPago;
  }

  else {
    alert("No puedes restar mas.")
  }
}





botonSumar.addEventListener('click', sumar);
botonRestar.addEventListener('click', restar);