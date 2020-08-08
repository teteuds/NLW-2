// Criando a porta de acesso (SERVIDOR)
const express = require('express')
const server = express()

const{
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

//importando o nunjucks
const nunjucks = require('nunjucks')
//Configurar Nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true
})

//inicio configurando o servidor
server
// receber os dados do req body
.use(express.urlencoded({extended: true}))
// Configurar arquivos esaticos
.use(express.static("public"))
// rotas da aplicacao
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
// start do servidor
.listen(5500)