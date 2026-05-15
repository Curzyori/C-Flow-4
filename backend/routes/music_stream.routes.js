const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');

router.get('/:filename', (req, res) => {
    const filename = req.params.filename;
    // On Vercel, files in includeFiles are accessible via process.cwd()
    const filePath = path.join(process.cwd(), 'music', filename);

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
        try {
            const root = process.cwd();
            console.log('--- Vercel FS Debug ---');
            console.log('CWD:', root);
            console.log('Files in CWD:', fs.readdirSync(root));
            if (fs.existsSync(path.join(root, 'music'))) {
                console.log('Files in music:', fs.readdirSync(path.join(root, 'music')));
            }
            console.log('-----------------------');
        } catch (e) {
            console.error('Debug failed:', e.message);
        }
        res.status(404).send('File not found');
    }
});

module.exports = router;
