const express = require("express")
const router = express.Router()

const app = express()
const porta = 3333

const mulheres = [
    {
        nome: 'Abigail',
        imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIc7XR-6rfWcNkH2l1-u8XCuawhSo6fh6ZBw&s',
        minibio: 'Abigail, personagem bíblica, é conhecida por sua sabedoria, coragem e habilidade em pacificar conflitos. Ela evitou um confronto perigoso entre seu marido Nabal e o futuro rei Davi, demonstrando discernimento e liderança.'
    },
    {
        nome: 'Tiana',
        imagem: 'https://conteudo.imguol.com.br/c/entretenimento/c2/2018/07/27/tiana-de-a-princesa-e-o-sapo-2009-foi-a-primeira-princesa-negra-em-animacao-da-disney-1532712037444_v2_3x4.jpg',
        minibio: 'Tiana é a protagonista do filme A Princesa e o Sapo, é uma garota independete e determina a realizar seus sonhos'
    },
    {
        nome:'Ada Lovelace',
        imagem:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Ada_lovelace.jpg/200px-Ada_lovelace.jpg',
        minibio:'Ada Lovelace (1815-1852) foi uma matemática britânica e é considerada a primeira programadora da história.'
    },
]


function mostraMulheres(request, response) {
    response.json(mulheres)
}
function mostraPorta() {
    console.log("Servidor criado e rodando na porta:", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)
