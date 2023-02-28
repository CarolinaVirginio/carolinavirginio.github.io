let numerosImpares = [];

for(let i = 100; i <= 200; i++) {
    if(i % 2 !== 0) {
        numerosImpares.push(i);
    }
}

alert(`Os números ímpares entre 100 e 200 são: ${numerosImpares.join(', ')}`);