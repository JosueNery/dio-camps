function trocarPorZero(lista) {
    if (lista == null || lista == undefined) {
        return "Lista nao existe, tente novamente."
    } else if (lista.length == 0) {
        return -1;

    } else {
        for (let i = 0; i < lista.length; i++) {
            if (lista[i] != 0 && lista[i] % 2 == 0) {
                lista[i] = 0;
            }
        }
        return lista
    }
}
console.log(trocarPorZero([1, 3, 4, 6, 80, 33, 23, 90]))

console.log(trocarPorZero([]));

console.log(trocarPorZero([2, 4, 6, 8, 10]));


