const express = require("express");
const app = express();

app.get ("/", function(req,res){
    res.send("Bem vindo")
})

app.get ("/blog/:artigo?", function(req,res){

    var artigo = req.params.artigo

    if (artigo) {
        res.send("Artigo:"+ artigo)
    }else{
        res.send("Bem ao meu blog")
    }
})

app.get ("/site", function(req,res){
    res.send("Bem ao meu site")
})

app.get ("/site/:nome", function(req,res){
    // REQ => DADOS PELO USUÁRIO
    // RES => RESPOSTA QUE VAI SER ENVIADA PARA O USUÁRIO
    var nome = req.params.nome
    res.send(nome)
})

app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro!")
    }else{
        console.log("Servidor Iniciado com sucesso!")
    }
})