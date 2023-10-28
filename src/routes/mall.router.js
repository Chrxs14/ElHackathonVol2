const express = require('express');
const router = express.Router();
const MallService = require('../services/mall.service');
const mallService = new MallService();

router.get('/', async (req, res) => {
    const malls = await mallService.getMalls();
    res.json(malls);
});

// router.get('/filter', async (req, res) => {
//     res.send('Soy un filtro de malls');
// });

// Dinamicos

router.get(
    '/:id',
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const mall = await mallService.getMallById(id);
            res.json(mall);
        } catch (error) {
            next(error);
        }
    },
);

router.post(
    '/',
    async (req, res) => {
        const body = req.body;
        const newMall = await mallService.createMall(body);
        res.status(201).json(newMall);
    },
);

router.patch(
    '/:id',
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const mall = await mallService.updateMallById(id, body);
            res.json(mall);
        } catch (error) {
            next(error);
        }
    },
);

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const rta = await mallService.deleteMallById(id);
    res.json(rta);
});

module.exports = router;
