const express = require('express');
const router = express.Router();
const UserService = require('../services/user.service');
const services = new UserService();

router.get('/', async (req, res) => {
  const users = await services.getUsers();
  res.json(users);
});

// Dinamicos

router.get(
  '/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const user = await services.getUserById(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  },
);

router.post(
  '/',
  async (req, res) => {
    const body = req.body;
    const newUser = await services.createUser(body);
    res.status(201).json(newUser);
  },
);

router.patch(
  '/:id',
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const user = await services.updateUserById(id, body);
      res.json(user);
    } catch (error) {
      next(error);
    }
  },
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await services.deleteUserById(id);
  res.json(rta);
});

module.exports = router;
