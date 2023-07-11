const {Client} = require('pg')
const conexao = {
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'Reisdocarmo23',
    database: 'crud_Livraria', 
};


async function listar() {
    const cliente = new Client(conexao)
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM livros');
    const listaLivros = res.rows;
    await cliente.end();
    return listaLivros;
}

async function buscarPorId(id) {
    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query('SELECT * FROM livros where id=$1' , [id]);
    const listaLivros = res.rows[0];
    await cliente.end();
    return listaLivros;
}

async function inserir(livro) {
    const sql = 'INSERT INTO livros(nome, preco) VALUES ($1,$2) RETURNING *'
    const values = [livro.nome, livro.preco];

    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query(sql,values);
    const livroInserido = res.rows[0];
    await cliente.end();
    return livroInserido;    
}

async function atualizar(id, livro) {
    const sql = 'UPDATE livros set nome=$1, preco=$2 WHERE id=$3 RETURNING *'
    const values = [livro.nome, livro.preco, id];

    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query(sql,values);
    const livroAtualizado = res.rows[0];
    await cliente.end();
    return livroAtualizado;    
}

async function deletar(id) {
    const sql = 'DELETE FROM livros WHERE id=$1 RETURNING *'
    const values = [id];

    const cliente = new Client(conexao);
    await cliente.connect();
    const res = await cliente.query(sql,values);
    const livroDeletado = res.rows[0];
    await cliente.end();
    return livroDeletado;  
}

module.exports = { 
    listar,
    buscarPorId, 
    inserir,
    atualizar,
    deletar
}