const dao = require ('./curso.dao');

module.exports = (app) => {

    app.route("/curso/salvar").post((req, resp) => {
        dao.salvar(req.body, (retorno) => {
            resp.json(retorno);
        });
    });

    app.route("/curso/listar").get((req, resp) => {            
        dao.consultar((result) => {
            resp.json(result);
        });
    });

}