<p id="valorVariavel"></p>


var elementoParaExibirValor = document.getElementById("valorVariavel");
var nome = console.log(prompt('Informe seu nome:'));

elementoParaExibirValor.textContent = "O valor da variável é: " + nome;
