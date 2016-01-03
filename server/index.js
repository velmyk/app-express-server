'use strict';

module.exports = (app) => {

    app.use('/api/example', require("./api/example"));


    app.get('*', (req, res) => {
        res.status(404).json({"err": "page not found"});
    });

};
