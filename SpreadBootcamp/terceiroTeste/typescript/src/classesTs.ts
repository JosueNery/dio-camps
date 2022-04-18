interface Cachorro {
    nome: string;
    idade: number;
    // ?: valor opcional
    parqueFavorito?: string;
}

type CachorroSomenteLeitura = {
    // -? remove valores opcionais
    readonly [K in keyof Cachorro]-?: Cachorro[K];
}

class MeuCachorro implements CachorroSomenteLeitura {
    idade;
    nome;
    parqueFavorito;

    constructor(nome: string, idade: number, parqueFavorito: string) {
        this.nome = nome;
        this.idade = idade;
        this.parqueFavorito = parqueFavorito;
    }
}

const cao = new MeuCachorro('Apolo', 14, 'Jardim America');
//------------------------------------------------------------//

interface IUsuario {
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redirecione(usuario: IUsuario) {
    if (usuario.cargo) {
        // redirecionar (usuario.cargo);
    }

    // redirecionar para a área do usuário

}
