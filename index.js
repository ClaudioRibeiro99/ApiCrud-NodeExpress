//config initial
const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();

//forma de ler json /middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
)
app.use(express.json())

//rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

const dbUser = process.env.DB_USER
const dbPassword = 'FdyRht49WlNfhZf4'//process.env.DB_PASSWORD

mongoose
    .connect(
        `mongodb+srv://${dbUser}:${dbPassword}@apicluster.b1qcq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    )
.then(() =>{
    console.log('Conectamos ao MongoDB!')
    app.listen(3000)
})
.catch((err) => console.log(err))
