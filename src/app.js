import {criarTabela, inserirPessoa, atualizarPessoa} from './Controller/Pessoa.js';
import express from 'express';
const app = express();
app.use(express.json());

criarTabela();

app.get('/', function(req, res){
    res.send("Ola mundo!")
})

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
})

app.post('/pessoa', function(req, res){
    inserirPessoa(req.body);
    res.json({        
        "statusCode": 200
    })
});

app.listen(3000, ()=> console.log("Servidor rodando na porta 3000"))