import { Livro } from "../modelo/Livro";

const livros: Livro[] = [
    new Livro(1, 1, "Livro 1", "Resumo do Livro 1", ["Autor 1"]),
    new Livro(2, 2, "Livro 2", "Resumo do Livro 2", ["Autor 2"]),
    new Livro(3, 3, "Livro 3", "Resumo do Livro 3", ["Autor 3"])
];

export class ControleLivros {
    static obterLivros(): Livro[] {
        return livros;
    }

    static incluir(livro: Livro): void {
        const codigo = Math.max(...livros.map(livro => livro.codigo)) + 1;
        livro.codigo = codigo;
        livros.push(livro);
    }

    static excluir(codigo: number): void {
        const index = livros.findIndex(livro => livro.codigo === codigo);
        if (index !== -1) {
            livros.splice(index, 1);
        }
    }
}
