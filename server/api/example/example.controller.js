'use strict';

const path = require('path');
const Example = require('./example.model');
const BaseController = require(path.resolve('./server/shared/baseController'));

class ExamplesController extends BaseController {
	constructor() {
		super(Example);
	}

}

module.exports = ExamplesController;

