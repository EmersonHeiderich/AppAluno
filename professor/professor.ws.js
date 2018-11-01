const dao = require ('./professor.dao');

module.exports = (app) => {

    app.route("/professor/salvar").post((req, resp) => {
        dao.salvar(req.body, (retorno) => {
            resp.json(retorno);
        });
    });

    app.route("/professor/listar").get((req, resp) => {            
        dao.consultar((result) => {
            resp.json(result);
        });
    });

}