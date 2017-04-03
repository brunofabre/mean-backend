const express = require('express')

module.exports = function(server) {

	// API Routes
	const router = express.Router()
	server.use('/api', router)

	// Routes Post
	const postService = require('../api/post/postService')
	postService.register(router, '/posts')

	// Routes Contact
	const contactService = require('../api/contact/contactService')
	contactService.register(router, '/contacts')

	// Routes Operator
	const operatorService = require('../api/operator/operatorService')
	operatorService.register(router, '/operators')
}