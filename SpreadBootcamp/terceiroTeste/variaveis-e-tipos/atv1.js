
/* Palindromo tipo um */
function reverseA(frase) {

    return frase.split("").reverse().join("");
}

function palindromeA(palavra) {
    let reversePalavra = reverseA(palavra);
    return palavra != reversePalavra ? false : true;
}

/* Palindromo tipo doi */
function palindromeB(palavra) {
    let cont = palavra.length - 1;
    for (let i = 0; cont >= i; i++) {
        if (palavra[i] != palavra[cont]) {
            return false
        }
        cont--;
    }
    return true;
}

/* Teste das funcoes */
function teste(palavra) {
    if (!palavra || palavra == false) return console.log("Palavra ou frase invalida, tente novamente.");
    console.log(palavra);
    console.log(reverseA(palavra));

    console.log("Resultados");

    console.log(palindromeA(palavra));


    console.log(palindromeB(palavra));

}

console.log("//---------//");
teste("aa ssa asdsa asdsa asdsa asdsa asdsa asdsa asdsa ass aa");

console.log("//---------//");
teste("aa123aa");

console.log("//---------//");
teste("  ");

console.log("//---------//");
teste("aa ssa asdsa asdsa asdsa asdsa asdsa asdsa asdsa assa a");