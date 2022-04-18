import $ from 'jquery';

$.fn.extend({
    novaFuncao() {
        console.log('Chamou nova funcao');
    }
});

$('body').novaFuncao();


//------------------------------------------------------------//
// Generic Types

function apendList<T>(arr: T[], value: T) {
    return arr.map(() => value);
}

apendList([1, 2, 3], 3);

//------------------------------------------------------------//
const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
});