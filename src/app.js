import {criarTabela, inserirPessoa} from './Controller/Pessoa.js';
import express from 'express';
const app = express();
app.use(express.json());

criarTabela();

app.get('/', function(req, res){
    res.send("Ola mundo!")
})

app.post('/pessoa', function(req, res){
    inserirPessoa(req.body);
    res.json({        
        "statucCode": 200
    })
});

app.listen(3000, ()=> console.log("Servidor rodando na porta 3000"))