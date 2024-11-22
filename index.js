const precio = 400000
let contador = 0;
let totalPago = 0;

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio.toLocaleString('es-ES');

let mostrarError = document.getElementById('texto-error');
let selectorCantidad = document.getElementById('cantidad');
let selectorTotal = document.getElementById('valor-total');

function quitarMensajeError(){
  mostrarError.innerHTML = ""
  mostrarError.classList.remove("desvanecer");
}

document.getElementById('btn-sumar').addEventListener('click', ()=>{
  quitarMensajeError();
  contador += 1;
  selectorCantidad.innerHTML = contador;
  selectorTotal.innerHTML = (contador * precio).toLocaleString('es-ES');
});

document.getElementById('btn-restar').addEventListener('click', ()=>{
  if (contador > 0){
    contador -= 1;
    selectorCantidad.innerHTML = contador;
    selectorTotal.innerHTML = (contador * precio).toLocaleString('es-ES');
  }
  else {
    mostrarError.innerHTML = "Sin elementos"
    mostrarError.classList.add("desvanecer");
  }
});


