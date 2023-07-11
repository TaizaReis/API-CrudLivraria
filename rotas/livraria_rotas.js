const express = require('express');
const cadastroLivros = require('../cadastro_livro')
const livrariaController = require('../controller/livraria_controller')

const router = express.Router();

//Recurso: Produtos - rota: /produtos
router.get('/', livrariaController.listar);
router.get('/:id', livrariaController.buscarPorId)
router.post('/', livrariaController.inserir);
router.put('/:id', livrariaController.atualizar);
router.delete('/:id', livrariaController.deletar);

module.exports = router;