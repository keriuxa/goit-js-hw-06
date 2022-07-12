const elementsList = document.querySelectorAll(".item");

console.log(`Number of categories: ${elementsList.length}`)


elementsList.forEach(function (element) {
    let elementCount = element.querySelectorAll(`ul>li`)
    
    console.log(`Category: ${element.querySelector(`h2`).textContent}`);
    console.log(`Elements: ${elementCount.length}` );
  });

