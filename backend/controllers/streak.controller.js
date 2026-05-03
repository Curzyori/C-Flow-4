const { getStreak, updateStreak } = require('../services/streakService');

const getCurrentStreak = (req, res) => {
    try {
        const streakData = getStreak();
        res.json({ success: true, ...streakData, canFetchLyrics: streakData.count >= 2 });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const triggerStreakUpdate = async (req, res) => {
    try {
        const streakData = await updateStreak();
        res.json({ success: true, ...streakData, canFetchLyrics: streakData.count >= 2 });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { getCurrentStreak, triggerStreakUpdate };
