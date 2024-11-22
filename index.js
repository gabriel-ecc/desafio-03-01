const precio = 400000
let contador = 0;
let totalPago = 0;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio.toLocaleString('es-ES');

let mostrarError = document.getElementById('texto-error');
let selectorCantidad = document.getElementById('cantidad');
let selectorTotal = document.getElementById('valor-total');

document.getElementById('btn-sumar').addEventListener('click', ()=>{
  contador = contador + 1;
  totalPago = contador * precio;
  selectorCantidad.innerHTML = contador;
  selectorTotal.innerHTML = totalPago.toLocaleString('es-ES');
  mostrarError.innerHTML = ""
  mostrarError.classList.remove("desvanecer");
});

document.getElementById('btn-restar').addEventListener('click', ()=>{
  mostrarError.classList.remove("desvanecer");
  mostrarError.innerHTML = ""
  if (contador > 0){
    contador = contador - 1;
    totalPago = contador * precio;
    selectorCantidad.innerHTML = contador;
    selectorTotal.innerHTML = totalPago.toLocaleString('es-ES');
  }
  else {
    mostrarError.innerHTML = "Sin elementos"
    mostrarError.classList.add("desvanecer");
  }
});