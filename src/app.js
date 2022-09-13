import {criarTabela, inserirPessoa, atualizarPessoa, buscarPessoas, buscarUmaPessoa} from './Controller/Pessoa.js';
import express from 'express';
const app = express();
app.use(express.json());

criarTabela();

app.post('/pessoa', function(req, res){
    inserirPessoa(req.body);
    res.json({        
        "statusCode": 200
    })
});

app.get('/pessoas', async function(req, res){
    let pessoas = await buscarPessoas();
    res.json(pessoas);
});

app.get('/pessoa', async function(req, res){
    let pessoa = await buscarUmaPessoa(req.body.id);
    res.json(pessoa);
});

app.put('/pessoa', function(req, res){
    if(req.body && !req.body.id){
        res.json({
            "statusCode": 400,
            "msg": "É necessario informar um id."
        })
    }else{
        atualizarPessoa(req.body)
        res.json({
            "statusCode": 200
        })
    }
});

app.listen(3000, ()=> console.log("Servidor rodando na porta 3000"))