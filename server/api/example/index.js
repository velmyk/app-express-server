'use strict';

const express = require('express');
const ControllerClass = require('./example.controller');
const controller = new ControllerClass();
const router = express.Router();

router.route('')
    .get(controller.getAll.bind(controller))
    .post(controller.add.bind(controller));

router.route('/:id')
    .get(controller.getById.bind(controller))
    .put(controller.update.bind(controller))
    .delete(controller.delete.bind(controller));

module.exports = router;
