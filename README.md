# MEAN Backend

Use `npm install` para baixar todas as dependências.


## Criando um Schema
1. Criar pasta dentro de /api com nome do schema 

## Padrão Schema (schema contato)
```
const restful = require('node-restful')
const mongoose = restful.mongoose

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true},
    phone: { type: String, required: true },
    operator: {
        _id: { type: String, required: true },
        name: { type: String, required: true },
        code: { type: Number, required: true }
    }
})

module.exports = restful.model('Contact', contactSchema)
```

## Padrão Schema Service (service schema contato)
```
const Contact = require('./contact')

Contact.methods(['get', 'post', 'put', 'delete'])
Contact.updateOptions({new: true, runValidators: true})

module.exports = Contact
```