const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/:filename', (req, res) => {
    const filename = req.params.filename;
    // On Vercel, files in includeFiles are accessible via process.cwd()
    const filePath = path.join(process.cwd(), 'backend/music', filename);

    if (fs.existsSync(filePath)) {
        const stat = fs.statSync(filePath);
        res.writeHead(200, {
            'Content-Type': 'audio/mpeg',
            'Content-Length': stat.size,
            'Accept-Ranges': 'bytes'
        });
        const readStream = fs.createReadStream(filePath);
        readStream.pipe(res);
    } else {
        console.error(`File not found: ${filePath}`);
        // Log all files in directory for debugging if not found
        try {
            const dir = path.join(process.cwd(), 'backend/music');
            if (fs.existsSync(dir)) {
                console.log('Files in music dir:', fs.readdirSync(dir));
            } else {
                console.log('Music dir does not exist at:', dir);
            }
        } catch (e) {}
        res.status(404).send('File not found');
    }
});

module.exports = router;
