const dao = require ('./horario.dao');

module.exports = (app) => {

    app.route("/horario/salvar").post((req, resp) => {
        dao.salvar(req.body, (retorno) => {
            resp.json(retorno);
        });
    });

    app.route("/horario/listar").get((req, resp) => {            
        dao.consultar((result) => {
            resp.json(result);
        });
    });

}