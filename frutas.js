// Obtener la lista ordenada de frutas
const fruitsList = document.getElementById("fruits-list");

// Obtener todos los elementos de la lista
const fruits = fruitsList.getElementsByTagName("li");

// Función para resaltar los elementos pares
function highlightEven() {
  for (let i = 0; i < fruits.length; i++) {
    if (i % 2 === 0) {
      fruits[i].classList.add("fruit-even");
      fruits[i].classList.remove("fruit-odd");
    } else {
      fruits[i].classList.add("fruit-odd");
      fruits[i].classList.remove("fruit-even");
    }
  }
}

// Función para resaltar los elementos impares
function highlightOdd() {
  for (let i = 0; i < fruits.length; i++) {
    if (i % 2 === 0) {
      fruits[i].classList.add("fruit-odd");
      fruits[i].classList.remove("fruit-even");
    } else {
      fruits[i].classList.add("fruit-even");
      fruits[i].classList.remove("fruit-odd");
    }
  }
}

// Agregar los controladores de eventos para los botones
const buttonEven = document.getElementById("button-even");
buttonEven.addEventListener("click", highlightEven);

const buttonOdd = document.getElementById("button-odd");
buttonOdd.addEventListener("click", highlightOdd);