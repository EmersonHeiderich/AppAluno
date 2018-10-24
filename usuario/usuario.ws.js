const dao = require ('./usuario.dao');

module.exports = (app) => {
    app.route("/usuario/login").post((req, resp) => {
        dao.consultar(req.body, (retorno) => {
            resp.json(retorno);
        });
    });
}