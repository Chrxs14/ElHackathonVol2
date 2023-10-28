const express = require('express');
const router = express.Router();
const CategoryService = require('../services/category.service');
const services = new CategoryService();

router.get('/', async (req, res) => {
    const categories = await services.getCategories();
    res.json(categories);
});

// router.get('/search', async (req, res) => {
//     res.send('Soy un search');
// });

// Dinamicos

router.get(
    '/:id',
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const category = await services.getCategoryById(id);
            res.json(category);
        } catch (error) {
            next(error);
        }
    },
);

router.post(
    '/',
    async (req, res) => {
        const body = req.body;
        const newCategory = await services.createCategory(body);
        res.status(201).json(newCategory);
    },
);

router.patch(
    '/:id',
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const category = await services.updateCategoryById(id, body);
            res.json(category);
        } catch (error) {
            next(error);
        }
    },
);

router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    const rta = await services.deleteCategoryById(id);
    res.json(rta);
});

module.exports = router;
