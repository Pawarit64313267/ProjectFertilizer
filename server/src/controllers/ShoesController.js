const { Shoes } = require('../models');

module.exports = {
    //get all Shoes
    async index(req, res) {
        try {
            const shoes = await Shoes.findAll();
            res.send(shoes);
        } catch (err) {
            res.status(500).send({
                error: 'The shoes information was incorrect'
            });
        }
    },


    // create Shoes
    async create(req, res) {
        try {
            const shoe = await Shoes.create(req.body);
            res.send(shoe.toJSON());
        } catch (err) {
            res.status(500).send({
                error: 'Create shoe incorrect'
            });
        }
    },

    // edit Shoes, suspend, active
    async put(req, res) {
        try {
            const shoe = await Shoes.findByPk(req.params.shoeId);
            if (!shoe) {
                return res.status(404).send({
                    error: 'Shoe not found'
                });
            }
            await shoe.update(req.body);
            res.send(shoe);
        } catch (err) {
            res.status(500).send({
                error: 'Update shoe incorrect'
            });
        }
    },

    // delete Shoes
    async remove(req, res) {
        try {
            const shoe = await Shoes.findByPk(req.params.shoeId);
            if (!shoe) {
                return res.status(403).send({
                    error: 'The shoe information was incorrect'
                });
            }
            await shoe.destroy();
            res.send(shoe);
        } catch (err) {
            res.status(500).send({
                error: 'The shoe information was incorrect'
            });
        }
    },

    // get Shoes by id
    async show(req, res) {
        try {
            const shoe = await Shoes.findByPk(req.params.shoeId);
            res.send(shoe);
        } catch (err) {
            res.status(500).send({
                error: 'The shoe information was incorrect'
            });
        }
    }
}