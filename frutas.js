const fruitsList = document.getElementById("fruits-list");

const fruits = fruitsList.getElementsByTagName("li");

for (let i = 0; i < fruits.length; i++) {
  if (i % 2 === 0) {
    fruits[i].classList.add("fruit-even");
  } else {
    fruits[i].classList.add("fruit-odd");
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