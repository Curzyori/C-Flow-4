// backend/services/audioScanner.js
const fs = require('fs');
const path = require('path');

const scanMusicLibrary = async () => {
    // Hardcoded tracks for Vercel stability
    // Using /api/music/ for streaming from backend
    return [
        {
            id: 'love-me-not',
            fileName: 'Love Me Not - Ravyn Lenae.mp3',
            title: 'Love Me Not',
            artist: 'Ravyn Lenae',
            duration: 218,
            url: '/api/music/Love Me Not - Ravyn Lenae.mp3'
        },
        {
            id: 'to-the-bone',
            fileName: 'To The Bone - Pamungkas.mp3',
            title: 'To The Bone',
            artist: 'Pamungkas',
            duration: 353,
            url: '/api/music/To The Bone - Pamungkas.mp3'
        }
    ];
};

module.exports = { scanMusicLibrary };
