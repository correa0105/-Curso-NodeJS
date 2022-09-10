require("dotenv").config();  //PUXA O ARQUIVO .ENV QUE TEM NOSSAS SENHAS E ETC.                             

const express = require ("express");    //INICIA O EXRESS.
const app = express();  //INICIA O APP DO EXPRESS.

const mongoose = require("mongoose");   //INICIA O MONGOOSE, O MONGOOSE MODELA NOSSA BASE DE DADOS E GARANTE QUE OS ARQUIVOS SEJAM SALVOS COMO DEVERIAM.
mongoose.connect(process.env.CONNECTIONSTRING).then(() => {
    console.log("Conectado a Base de Dados!")
    app.emit("Pronto");
}).catch(e => {
    console.log(e);
});

const session = require("express-session"); //O EXPRESS SESSION IDENTIFICA O NAVEGADOR DO CLIENTE (SALVA COOKIES E ETC.).
const MongoStore = require("connect-mongo");    //MONGOSTORE FAZ COM QUE AS SESSOES SEJAM SALVAS NA BASE DADOS.
const flash = require("connect-flash");  //FLASH MASSAGES SÃO MENSAGENS QUE SÓ EXIBEM UMA VEZ NAQUELA SESSÃO.
const routes = require("./routes"); //INICIA AS ROTAS DA NOSSA APLICAÇÃO /HOME /CONTATO E ETC.
const path = require("path");   //É PARA RESOVLER O CAMINHO DO DIRETÓRIO.
const helmet = require("helmet");   //É UMA RECOMENDAÇÃO DO EXPRESS DE SEGURANÇA.
const csrf = require("csurf");  //SÃO TOKENS QUE IMPEDEM COM QUE UM APLICATIVO POSTEM ALGO NA NOSSA APLICAÇÃO.
const { middlewareGlobal, middlewareCheckCsrfError, middlewareCsrfToken} = require("./src/middlewares/minddlewareGlobal") //SÃO FUNÇÕES QUE SÃO EXECUTADAS NA ROTA

app.use(helmet()); //UTILIZA O HELMET

app.use(express.urlencoded({ extended: true }));    //DIZ QUE É PERMITIDO POSTAR FORMULÁRIOS PARA DENTRO DA NOSSA APLICAÇÃO.
app.use(express.json());    //É POSSIVEL ENVIAR UM JSON PARA DENTRO DA NOSSA APLICAÇÃO.
app.use(express.static(path.resolve(__dirname, "public"))); //TODOS ARQUIVOS QUE ESTIVEREM DENTRO DA PASTA PUBLIC SERÃO ACESSADOS DIRETAMENTE.

const sessionOptions = session({    //CONFIGURAÇÕES DE SESSÃO.
    secret: "qwert123",
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
})

app.use(sessionOptions);    //UTILIZANDO A CONFIGURAÇÃO DE SESSÃO.
app.use(flash());   //UTILIZANDO AS FLASH MESSAGES.

app.set("views", path.resolve(__dirname, "src", "views"));  //ARQUIVOS QUE SERÃO RENDERIZADOS NA TELA.
app.set("view engine", "ejs")   //ENGINE QUE UTILIZAMOS PARA RENDERIZAR ESSE HTML, ESTAMOS UTILIZANDO EJS.

app.use(csrf());    //USANDO O TOKEN CSRF.

/* SÃO NOSSOS PROPRIOS MIDDLEWARES */
app.use(middlewareGlobal);
app.use(middlewareCsrfToken);
app.use(middlewareCheckCsrfError);

app.use(routes);    //CHAMA NOSSAS ROTAS.

app.on("Pronto", () => {    //SOLICITA PARA APLICAÇÃO ESCUTAR NOSSO SERVIDOR.
    app.listen(3000, () => {
        console.log("Acessar http://localhost:3000")
        console.log("Servidor sendo executado na porta 3000")
    })
})
