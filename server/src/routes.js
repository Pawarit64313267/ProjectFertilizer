const ShoesController = require('./controllers/ShoesController');

module.exports = (app) => {

    app.post('/shoe', ShoesController.create);

    app.put('/shoe/:shoeId', ShoesController.put);

    app.delete('/shoe/:shoeId', ShoesController.remove);

    app.get('/shoe/:shoeId', ShoesController.show);

    app.get('/shoes', ShoesController.index);
}
