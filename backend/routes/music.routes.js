const express = require('express');
const router = express.Router();
const { getTracks } = require('../controllers/music.controller');

router.get('/tracks', getTracks);

module.exports = router;
