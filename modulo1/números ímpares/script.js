let numerosImpares = []; //declarando vetor de números ímpares

//percorrendo os números de 100 a 200
//enquanto i menor ou igual a 200

for(let i = 100; i <= 200; i++) {
    //se a divisão inteira entre i e 2 retornar resto diferente de zero significa que o número é ímpar
    if(i % 2 !== 0) {
        //então o número ímpar é adicionado ao vetor de números ímpares
        numerosImpares.push(i);
    }
}

//alert informa números ímpares entre 100 e 200
//a função join é utilizada para mostrar todos os elementos do vetor de números ímpares separados por uma vírgula e um espaço
alert(`Os números ímpares entre 100 e 200 são: ${numerosImpares.join(', ')}`);