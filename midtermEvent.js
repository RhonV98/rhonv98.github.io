const newButton = document.querySelector("button");
var words1 = document.getElementById("midtermMessage1").innerHTML;
var words2 = document.getElementById("midtermMessage2");

var newWords = words1 + "Rhon Vincent Ramos";

newButton.addEventListener('click', changeParagraph);

function changeParagraph()
{     
    words2.innerHTML = newWords;
}