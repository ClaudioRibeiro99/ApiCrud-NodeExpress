const router = require('express').Router()
const Person = require('../models/Person')

//Create
router.post('/', async (req, res) =>{
    // req.body
    const {name, salary, approved} = req.body

    if(!name && !salary && !approved){
        res.status(422).json({error: 'Os campos name, salary e approved é obrigatório!'})  
        return     
    }
    const person = {
        name,
        salary,
        approved
    }
    try {
       // criando dados
        await Person.create(person)

        res.status(201).json({message: "Pessoa inserida com sucesso!"})
    } catch (error) {
        res.status(500).json({error: error})        
    }
})

//Read
router.get('/', async (req, res) =>{
    try {

        const peope = await Person.find()

        res.status(200).json(peope)
        
    } catch (error) {
        res.status(500).json({error: error})          
    }
})

router.get('/:id/', async (req, res) =>{

    //extrair dado da requisição, pela url = req.params
    const id = req.params.id

    try {
        
        const person = await Person.findOne({_id: id})

        if(!person){
            res.status(422).json({message:"Usuário não encontrado"})
            return
        }

        res.status(200).json(person)

    } catch (error) {
        res.status(500).json({error: error})   
    }

})

//Update (PUT, PATCH)

router.patch('/:id', async (req, res) =>{

    const id = req.params.id

    const {name, salary, approved} = req.body

    const person = {
        name,
        salary,
        approved,
    }

    try {   

        const updatePerson = await Person.updateOne({ _id: id }, person)

        if(updatePerson.matchedCount === 0) {
            res.status(422).json({message:"Usuário não encontrado"})
            return 
        }

        res.status(200).json(person)

    } catch (error) {
        res.status(500).json({error: error}) 
    }
})

router.delete('/:id', async (req, res) => {

    const id = req.params.id

    const person = await Person.findOne({_id: id})

    if(!person){
        res.status(422).json({message:"Usuário não encontrado"})
        return
    }

    try {
        
        await Person.deleteOne({_id: id})

        res.status(200).json({message:"Usuário removido com suscesso!"})

    } catch (error) {
        res.status(500).json({error: error})  
    }

})

module.exports = router