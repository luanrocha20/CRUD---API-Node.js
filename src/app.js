import express from 'express';
import router from './routes.js';
import { criarTabela } from './Controller/Pessoa.js';

const app = express();

app.use(express.json());
app.use(router);

criarTabela();

app.listen(3000, ()=> console.log("Servidor rodando na porta 3000"))