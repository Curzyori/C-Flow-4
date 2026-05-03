const statusService = require('../services/status.service');

exports.getStatus = (req, res) => {
    try {
        const status = statusService.checkStatus();
        res.status(200).json(status);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve status' });
    }
};
