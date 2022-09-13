import {openDb} from '../configDb.js';

export async function criarTabela(){
    openDb().then(db=>{
        db.exec('CREATE TABLE IF NOT EXISTS Pessoa( id INTEGER PRIMARY KEY, nome TEXT, idade INTEGER)')
    });
}

export async function inserirPessoa(pessoa){
    openDb().then(db=>{
        db.run('INSERT INTO Pessoa(nome, idade) VALUES (?,?)', [pessoa.nome, pessoa.idade]);
    });
}