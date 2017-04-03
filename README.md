# MEAN Backend

Use `npm install` para baixar todas as dependências.


## Criando um Schema
1. Crie uma pasta dentro de /api com nome do schema (lowerCamelCase).
2. Crie um arquivo `.js` com o mesmo nome da pasta (lowerCamelCase) e siga [este padrão](#padrão-schema).
3. Crie um arquivo `.js` com o nome do arquivo anterior (lowerCamelCase) terminado de Service e siga [este padrão](#padrão-schema-service).
4. Adicione os links ao arquivo `config/routes.js` seguindo [este padrão](#padrão-schema-links).

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
const Contact = require('./contact')

Contact.methods(['get', 'post', 'put', 'delete'])
Contact.updateOptions({new: true, runValidators: true})

module.exports = Contact
```