// Pika-pika suerte!

// NO MODIFICAR (salvo para conseguir el color sangría)

document.querySelector('#first').addEventListener('click', updateBgColor);
document.querySelector('#second').addEventListener('click', updateBgColor);
document.querySelector('#third').addEventListener('click', updateBgColor);
document.querySelector('#fourth').addEventListener('click', updateBgColor);
// MODIFICAR A PARTIR DE AQUÍ 

// La funció updateBgColor canvia el color de fons del pikachu segons el botó que apreti
// El data-type dels elements html tenen un color que és una strng. per tant canviant el background color al style de la imatge per la string del data color potser podem fer-ho.
// Quan cliqui #first el background color ha de canviar a red, quan sigui #second blue i així amb tots.
// Provar estructura condicional. No funciona.
let pikachu = document.querySelector("img");
console.log(pikachu);

// Dins la funció creem la variable que guarda el punt on hem clicat (clickedButton), que es troba a la propietat target de l'objecte event, és a dir el punt on es produeix l'event click. 
// Agafem el color del fons del punt on succeeix l'event, que es troba mitjançant la funció getAttribute que busca l'atribut "data-color" de l'event.target i fem que el color de fons de la imatge de pikachu es converteixi en el del punt on executem la funció

function updateBgColor(event) {
   let clickedButton = event.target;
   let color = clickedButton.getAttribute("data-color");
   pikachu.style.backgroundColor = color;
    
}