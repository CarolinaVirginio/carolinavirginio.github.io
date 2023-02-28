//let = variáveis que receberão os dados condicionais necessários(nome, sexo, estado civil)

let nome = prompt('Qual é o seu nome?');

let sexo = prompt('Qual é o seu sexo (M ou F)?');

let estadoCivil = prompt('Qual é o seu estado civil?');

//se casada e mulher, um prompt surge perguntando tempo de casada

if(sexo.toLowerCase() === 'f' &&  estadoCivil.toLowerCase() === 'casada') { 
    let tempoDeCasada = prompt('Quantos anos de casada você tem?'); 
    //alert retorna todos os valores armazenados
    alert(`Meu nome é ${nome}, meu sexo é ${sexo}, meu estado civil é ${estadoCivil} e estou casada há ${tempoDeCasada}.`); 
    //não pergunta tempo de casado
} else {
    alert(`Meu nome é ${nome}, meu sexo é ${sexo} e meu estado civil é ${estadoCivil}.`); 
}
