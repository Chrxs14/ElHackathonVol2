const { Router } = require("express");
const router = Router();

//Raiz
router.get("/", (req, res) => {
  res.json({
    Title: "Hola mundo usando rutas!",
  });
});

module.exports = router;
