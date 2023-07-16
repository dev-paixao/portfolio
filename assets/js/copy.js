// Obtém o elemento de texto do ano atual
var elementoAnoAtual = document.getElementById("ano_atual");

// Obtém o ano atual
var ano = new Date().getFullYear();

// Define o ano atual como texto do elemento
elementoAnoAtual.textContent = ano;