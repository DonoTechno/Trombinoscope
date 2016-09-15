var maBalise = document.getElementbyId(maBalise);

var maBalideChildren = maBalise.children;

var divPrenom = document.getElementById ('maBalise').children(0);

var myInput = document.getElementById('myInput');

myInput.addEventListener('keyup', machinePourKeyUp);


function machinePourKeyUp (){
  divPrenom.innerHTML = myInput.value;
}
