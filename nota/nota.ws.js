const dao = require("./nota.dao")

module.exports = (app) => {

    app.route("/nota/salvar").post( (req, resp) => {
        
        dao.salvar(req.body, () => {
            resp.json({})
        })
    })

    app.route("/nota/listar").get((req, resp) => {            
        dao.consultar((result) => {
            resp.json(result);
        });
    });

}