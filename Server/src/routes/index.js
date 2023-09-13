
// const router = require('express').Router(); /* ejemplo corto de importacion router */
 
const express = require("express");
const router = express.Router();
/* */
router.get('/', (req, res) => {
    res.send('hello world desde Router')
  })
const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const { postFav, deleteFav } = require("../controllers/handleFavorites");

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);

module.exports = router;
