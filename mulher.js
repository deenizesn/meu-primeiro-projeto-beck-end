const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

function mostraMulher(request, response) {
 response.json({
    nome: 'Denize Silva',
    imagem: 'https://media.licdn.com/dms/image/v2/D4D03AQG9N7Q2MTDWdw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719157350620?e=1733356800&v=beta&t=OpPWSf5FanAs89Kk9lPj-C0zeBPbGLqZTTwcDyo8_Ao',
    minibio: 'Estudante de tech e estagiando na área'
 })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta:", porta)
}

app.use(router.get('/mulher', mostraMulher))
app.listen(porta, mostraPorta)