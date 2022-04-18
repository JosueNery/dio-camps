// types
// interfaces

interface IAnimal {
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    domestico: boolean;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal {
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino;

const animal: IDomestico = {
    nome: 'Elefante',
    domestico: true,
    tipo: 'terrestre',
    porte: 'medio',
}

const felino: IDomestico = {
    nome: 'Leão',
    domestico: false,
    tipo: 'terrestre',
    visaoNoturna: true,
}

//----------------------------------------------------------//

/* interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string
}

// Omit<INTERFACE, atributo a ser omitido>
interface Brasileiro extends Omit<Pessoa, 'nacionalidade'> {

} */