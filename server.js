const express = require('express');
const bodyParser = require('body-parser');
const usuarios = require('./rotas/usuarios');
const auth = require('./rotas/auth');

const port = process.env.PORT || 5000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/usuarios', usuarios);
app.use('/api/auth', auth);

app.get("/smiley", () => res.json({"Bem vindo": "✈️"}))

app.listen(port, () => console.info(`🌎 => Servidor rodando na porta ${port}`))
