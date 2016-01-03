'use strict';

const mongoose = require('mongoose');
const _lodash = require('lodash');

class BaseController {

    constructor(model) {
        if (model instanceof mongoose.Schema) {
            throw new Error('Model should be a mongoose.Schema instance');
        }
        this._model = model;
    }

    _getModel() {
        return this._model;
    }

    _getModelInstance(config) {
        return new this._model(config);
    }

    getAll(req, res) {
        const model = this._getModel();
        return model.find(req.params)
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((err) => {
                res.status(404).json(err);
            });
    }

    add(req, res) {
        const modelInstance = this._getModelInstance(req.body);
        return modelInstance.save()
            .then((result) => {
                res.status(201).json({
                    response: result
                });
            })
            .catch((err) => {
                res.send(err);
            });
    }

    getById(req, res) {
        const model = this._getModel();
        return model.findById(req.params.id)
            .then((result) => {
                res.status(200).json(result);
            })
            .catch((err) => {
                res.status(404).json(err);
            });
    }

    update(req, res) {
        const model = this._getModel();
        return model.findById(req.params.id)
            .then((modelInstance) => {
                const updatedInstance = _lodash.extend(modelInstance, req.body);
                return updatedInstance.save();
            })
            .then((result) => {
                res.status(200).json({
                    response: result
                });
            })
            .catch((err) => {
                res.status(404).json(err);
            });
    }

    delete(req, res) {
        const model = this._getModel();
        return model.remove({_id: req.params.id})
            .then((result)=> {
                res.json({
                    response: result
                });
            })
            .catch((err) => {
                res.send(err);
            });
    }
}

module.exports = BaseController;