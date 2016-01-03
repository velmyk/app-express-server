'use strict';

const mongoose = require('mongoose'),
			Schema = mongoose.Schema;

const ExampleSchema = new Schema({
	firstName: {
		type: String,
		required: true
	},
	LastName: {
		type: String,
		required: true
	}
}, {collection: 'examples'});

module.exports = mongoose.model('Example', ExampleSchema);
