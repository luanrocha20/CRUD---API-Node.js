const express = require('express');
const app = express();
app.use(express.json());

app.get('/', function(req, res){
    res.send("Ola mundo!")
})

app.post('/pessoa', function(req, res){
    console.log(req.body);
    res.json({
        "statucCode": 200
    })
});

app.listen(3000, ()=> console.log("Servidor rodando na porta 3000"))