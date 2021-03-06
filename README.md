# MEAN Backend

Use `npm install` para baixar todas as dependências.


## Criando um Schema
1. Crie a pasta `/api`.
2. Crie uma pasta dentro de `/api` com nome do schema (lowerCamelCase).
3. Crie um arquivo `.js` com o mesmo nome da pasta (lowerCamelCase) e siga [este padrão](#padrão-schema).
4. Crie um arquivo `.js` com o nome do arquivo anterior (lowerCamelCase) terminado de Service e siga [este padrão](#padrão-schema-service).
5. Adicione os links ao arquivo `config/routes.js` seguindo [este padrão](#padrão-schema-links).

## Padrão Schema
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

## Padrão Schema Service
```
const Contact = require('./contact')

Contact.methods(['get', 'post', 'put', 'delete'])
Contact.updateOptions({new: true, runValidators: true})

module.exports = Contact
```

## Padrão Schema Links
```
// Routes
const `nome schema service` = require('../api/`nome schema`/`nome schema service`')
`nome schema service`.register(router, '/`nome schema plural`')

// Routes Contact
const contactService = require('../api/contact/contactService')
contactService.register(router, '/contacts')
```