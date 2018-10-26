const dao = require ('./professor.dao');

module.exports = (app) => {

    app.route("/professor/salvar").post((req, resp) => {
        dao.salvar(req.body, (retorno) => {
            resp.json(retorno);
        });
    });

    app.route("/post/listar").get((req, resp) => {            
        dao.listar((result) => {
            resp.json(result);
        });
    });

}