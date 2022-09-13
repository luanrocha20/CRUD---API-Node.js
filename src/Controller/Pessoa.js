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

export async function atualizarPessoa(pessoa){
    openDb().then(db=>{
        db.run('UPDATE Pessoa SET nome=?, idade=? WHERE id=?', [pessoa.nome, pessoa.idade, pessoa.id])
    });
}

export async function buscarPessoas(){
    return openDb().then(db=>{
        return db.all('SELECT * FROM Pessoa').then(res=>res)
    });
}

export async function buscarUmaPessoa(id){
    return openDb().then(db=>{
        return db.get('SELECT * FROM Pessoa WHERE id=?',[id]).then(res=>res)
    });
}