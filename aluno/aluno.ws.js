const dao = require ('./aluno.dao');

module.exports = (app) => {

    app.route("/aluno/salvar").post((req, resp) => {
        dao.salvar(req.body, () => {
            resp.json({});
        });
    });
    
    app.route("/aluno/login").post((req, resp) => {
        dao.consultar(req.body, (retorno) => {
            resp.json(retorno);
        });
    });
}