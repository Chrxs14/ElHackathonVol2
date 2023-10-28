const express = require('express');
const router = express.Router();
const StoreService = require('../services/store.service');
const services = new StoreService();

router.get('/', async (req, res) => {
    const stores = await services.getStores();
    res.json(stores);
});

// router.get('/filter', async (req, res) => {
//     res.send('Soy un filter');
// });

// Dinamicos

router.get(
    '/:id',
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const store = await services.getStoreById(id);
            res.json(store);
        } catch (error) {
            next(error);
        }
    },
);

router.post(
    '/',
    async (req, res) => {
        const body = req.body;
        const newStore = await services.createStore(body);
        res.status(201).json(newStore);
    },
);

router.patch(
    '/:id',
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const store = await services.updateStoreById(id, body);
            res.json(store);
        } catch (error) {
            next(error);
        }
    },
);

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const rta = await services.deleteStoreById(id);
    res.json(rta);
});

module.exports = router;
