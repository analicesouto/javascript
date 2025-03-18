// Crie um array vazio chamado numeros; adicione os números 10, 20 e 30 ao final do array; remova o último elemento do array e armazene-o em uma variável; Adicione o número 5 no início do array; Remova o primeiro elemento do array e armazene-o em outra variáve; Exiba o array final e as variáveis onde armazenou os valores removidos. 

let numeros = []; //criando array vazio

numeros.push(10,20,30); //adicionando itens ao final

let removendoUltimoItem = numeros.pop(); //removendo ultimo item e armazenando em outra variável

numeros.unshift(5); //adicionando o número 5 ao inicio

let removendoPrimeiroItem = numeros.shift(); // removendo o primeiro item e armazenando em outra variável

console.log(numeros);
console.log(removendoUltimoItem);
console.log(removendoPrimeiroItem);
