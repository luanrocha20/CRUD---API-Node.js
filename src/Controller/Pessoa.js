import {openDb} from '../configDb.js';

export async function criarTabela(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Pessoa( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)')
    });
}

export async function adicionarPessoa(req, res){
    let pessoa = req.body;
    openDb().then(db=>{
        db.run('INSERT INTO Pessoa(nome, idade) VALUES (?,?)', [pessoa.nome, pessoa.idade]);
        res.json({        
            "statusCode": 200
        })
    });
}

export async function atualizarPessoa(req, res){
    let pessoa = req.body;
    openDb().then(db=>{
        db.run('UPDATE Pessoa SET nome=?, idade=? WHERE id=?', [pessoa.nome, pessoa.idade, pessoa.id])
    });
}

export async function buscarPessoas(req, res){
    openDb().then(db=>{
        db.all('SELECT * FROM Pessoa').then(pessoas=> res.json(pessoas))
    });
}

export async function buscarUmaPessoa(req, res){
    let id = req.body.id
    openDb().then(db=>{
        db.get('SELECT * FROM Pessoa WHERE id=?',[id]).then(pessoa=>res.json(pessoa))
    });
}

export async function deletarPessoa(req, res){
    let id = req.body.id;
    openDb().then(db=>{
        db.get('DELETE FROM Pessoa WHERE id= ?', [id]).then(pessoa=>res.json(pessoa))
    })
}