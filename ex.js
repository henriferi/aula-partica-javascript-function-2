/* 
1) Criar uma função anônima que recebe duas notas de um aluno do ensino médio:
a) Calcular a média do aluno.
b) Se a média for maior ou igual a 7, retornar "Aprovado!";
c) Se a média for maior ou igual a 5 e menor que 7, retornar "Recuperação!";
d) Se a média for menor que 5, retornar "Reprovado!".
e) Chamar a função e exibir no console o resultado. 
*/

let notas = function (nota1,nota2) {
    let media = (nota1+nota2)/2;
    if(media >= 7){
        console.log("Aprovado");
    } else if(media >= 5) {
        console.log("Recuperação")
    } else {
        console.log("Reprovado");
    }
}
console.log(notas(6,6))

/* 
2) Criar uma função anônima que calcula a tabuada de 3.
a) Chamar a função e exibir no console o resultado. 
*/

let tabuada = function (){
    for(n = 0; n <= 10; n++) {
        let res = n*3
        console.log(res);
    }
}
console.log(tabuada());

/* 
3) Criar uma função de seta (arrow function) que recebe o 
ano de nascimento de uma pessoa e retorne se ela 
é maior de idade ou menor.
a) Chamar a função e exibir no console o resultado. 
*/


let idade = (ano) => {
    let data = new Date();
    data = data.getFullYear();
    let res = data-ano;
    if(res >=18) {
        console.log("Maior de idade");
    } else {
        console.log("Menor de idade");
    }
}
console.log(idade(2005));
console.log(idade(1999));