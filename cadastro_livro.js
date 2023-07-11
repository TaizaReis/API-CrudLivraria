let listaLivros = [];
let idAutoIncrement = 1;


function listar() {
    return listaLivros;
}

function inserir(livro) {    
    if(livro && livro.nome && livro.preco){   
        livro.id = idAutoIncrement++;
        listaLivros.push(livro);
        return listaLivros;
    }
    else {
        throw ({
            numero: 400,
            msg: "Erro: Parametros inválidos"
        });
    }
}

function buscarPorId(id) {
    for(let livro of listaLivros){ 
        if(livro.id == Number(id)){
            return livro;
        }
    }
    throw ({
        numero: 404,
        msg: "Erro: Livro nao encontrado."
    });
}

function atualizar(id, livroAlterar) {
    if(!livroAlterar || !livroAlterar.nome || !livroAlterar.preco){
        throw ({
            numero: 400,
            msg: "Erro: Os parametros de livros estao invalidos"
        });       
    }

    let livroAtualizado = false

    listaLivros.forEach(livroSalvo => {
        if(livroSalvo.id == Number(id)) {
            console.log("Achou livro")
            livroSalvo = livroAlterar
            console.log(livroSalvo)
            console.log(listaLivros)
            livroAtualizado = true
            return
        }
    })

    if (!livroAtualizado) {
        throw ({
            numero: 404,
            msg: "Erro: Produto nao encontrado."
        })
    }
}

function deletar(id) {
    let livroDeletado = false

    listaLivros.forEach((livro, indice) => {
        
        if(livro.id == Number(id)) {
            
            listaLivros.splice(indice,1);
            
            livroDeletado = true
            return
        }
    })

    
        if(!livroDeletado) {
            
            throw ({
                numero: 404,
                msg: "Erro: Livro nao encontrado."
            });
        }
}

module.exports = { 
    listar,
    inserir,
    buscarPorId,
    atualizar,
    deletar
}