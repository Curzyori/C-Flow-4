const express = require('express');
const router = express.Router();
const { getCurrentStreak, triggerStreakUpdate } = require('../controllers/streak.controller');

router.get('/', getCurrentStreak);
router.post('/update', triggerStreakUpdate);

module.exports = router;
