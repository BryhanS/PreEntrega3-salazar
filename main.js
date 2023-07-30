"use strict";

// Objetivo crear un simulador interactivo que pida la cantidad de producto que desea el cliente eh indique cuanto debera pagar
let price = 3;
let cantidadComprar = parseInt(
  prompt(
    "Holas Cliente de Santa Maria, agraderia indicarnos la cantidad de Pan especial que llevara el dia de hoy: "
  )
);

function totalPagar(cantidad, precio) {
  let total = parseFloat(cantidad * precio);

  alert(
    `Estimado cliente su cuenta es de S/ ${total}.00, agradeceriamos que se acerque a pagar en el local mas cercano!`
  );
}

while (isNaN(cantidadComprar) || cantidadComprar <= 0) {
  if (isNaN(cantidadComprar)) {
    alert("Ingresa la cantidad a ingresar");
    cantidadComprar = parseInt(
      prompt(
        "Holas Cliente de Santa Maria, agraderia indicarnos la cantidad de Pan especial que llevara el dia de hoy: "
      )
    );
  } else {
    alert("Ingresa una cantidad mayor a 0");

    cantidadComprar = parseInt(
      prompt(
        "Holas Cliente de Santa Maria, agraderia indicarnos la cantidad de Pan especial que llevara el dia de hoy: "
      )
    );
  }
}
totalPagar(cantidadComprar, price);
