const express = require('express');
const livroRota = require('./rotas/livraria_rotas')

const app = express();
const PORTA = 3000;

app.use(express.json());

app.use('/livros', livroRota);

app.listen(PORTA, () => {
    console.log("Servidor iniciado com sucesso...")
})

console.log("Fim do arquivo!!");