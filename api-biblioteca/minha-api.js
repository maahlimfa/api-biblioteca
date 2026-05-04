const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Configuração de Middlewares
app.use(cors());
app.use(express.json());

// Rota GET inicial (Boas-vindas)
app.get('/', (req, res) => {
    res.json({ 
        mensagem: "Bem-vindo à minha API REST!", 
        status: "Online",
        autor: "Engenheiro de Software" 
    });
});

// Inicialização do Servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
