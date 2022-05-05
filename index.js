//config initial
const express = require('express');
const mongoose = require('mongoose');
const app = express();

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


// entregar uma porta 
const DB_USER = 'claudio'
const DB_PASSWORD = encodeURIComponent('FdyRht49WlNfhZf4')

mongoose
    .connect(
        `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.b1qcq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    )
.then(() =>{
    console.log('Conectamos ao MongoDB!')
    app.listen(3000)
})
.catch((err) => console.log(err))
