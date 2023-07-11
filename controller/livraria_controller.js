const cadastroLivro = require('../cadastro_livro')
const repositoryLivro = require('../repository/livraria_repository')


async function listar(req, res) {
    const listaLivros = await repositoryLivro.listar();
    res.json(listaLivros);
}

async function buscarPorId(req, res) {
    const id = req.params.id;
    const livro = await repositoryLivro.buscarPorId(id);
    if(livro){
        res.json(livro);
    }
    else {
        res.status(404).json(
            {
                numero: 404,
                msg: "Erro: Livro nao encontrado."
            }
        );
    }
}

async function inserir(req, res) {
    const livro = req.body;
    if(livro && livro.nome && livro.preco) {
        const livroInserido = 
            await repositoryLivro.inserir(livro);
        res.status(201).json(livroInserido);
    }
    else {
        res.status(400).json(
            {
                numero: 400,
                msg: "Erro: Os parametros de livro estao invalidos"
            }
        );
    }
}

async function atualizar(req,res) {
    const id = req.params.id;
    const livro = req.body;

    if(livro && livro.nome && livro.preco)
    {
        const livroAlterado = 
            await repositoryLivro.atualizar(id,livro);
        if(livroAlterado){
            res.json(livroAlterado);
        }
        else {
            res.status(404).json(
                {
                    numero: 404,
                    msg: "Erro: Livro nao encontrado."
                }
            );
        }        
    }
    else {
        res.status(400).json(
            {
                numero: 400,
                msg: "Erro: Os parametros de livro estao invalidos"
            }
        );
    }
}


async function deletar(req,res) {
    const id = req.params.id;
    const livroDeletado = 
        await repositoryLivro.deletar(id);
    if(livroDeletado){
        res.json(livroDeletado);
    }
    else {
        res.status(404).json(
            {
                numero: 404,
                msg: "Erro: Produto nao encontrado."
            }
        );
    }       
}

module.exports = {
    listar,
    buscarPorId,
    inserir, 
    atualizar,
    deletar
}