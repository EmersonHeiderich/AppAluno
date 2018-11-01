const dao = require("./trabalho.dao")

module.exports = (app) => {

    app.route("/trabalho/salvar").post( (req, resp) => {
        
        dao.salvar(req.body, () => {
            resp.json({})
        })
    })

    app.route("/trabalho/listar").get((req, resp) => {            
        dao.consultar((result) => {
            resp.json(result);
        });
    });

}