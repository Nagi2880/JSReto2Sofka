const fruitsList = document.getElementById("fruits-list");

const fruits = fruitsList.getElementsByTagName("li");

for (let i = 0; i < fruits.length; i++) {
  if (i % 2 === 0) {
    fruits[i].classList.add("fruit-even");
  } else {
    fruits[i].classList.add("fruit-odd");
  }
}