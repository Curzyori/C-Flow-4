const { scanMusicLibrary } = require('../services/audioScanner');

const getTracks = async (req, res) => {
    try {
        const tracks = await scanMusicLibrary();
        res.json({ success: true, tracks });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = { getTracks };
