let whereAmI = document.querySelector('#elementoOndeVoceEsta').parentNode;
console.log(whereAmI);

whereAmI.style.color = 'red';

let firtsSonofSon = whereAmI.firstChild;
console.log(firtsSonofSon);

firtsSonofSon.innerText = 'primeirofilho';