// backend/services/audioScanner.js
const fs = require('fs');
const path = require('path');

const scanMusicLibrary = async () => {
    // Hardcoded tracks for Vercel stability
    // Using /api/music/ for streaming from backend
    return [
        {
            id: 'love_me_not',
            fileName: 'love_me_not.mp3',
            title: 'Love Me Not',
            artist: 'Ravyn Lenae',
            duration: 218,
            url: '/api/music/love_me_not.mp3'
        },
        {
            id: 'to_the_bone',
            fileName: 'to_the_bone.mp3',
            title: 'To The Bone',
            artist: 'Pamungkas',
            duration: 353,
            url: '/api/music/to_the_bone.mp3'
        }
    ];
};

module.exports = { scanMusicLibrary };
