// backend/services/audioScanner.js
const fs = require('fs');
const path = require('path');

const scanMusicLibrary = async () => {
    // Using direct static paths for Vercel stability
    return [
        {
            id: 'love_me_not',
            fileName: 'love_me_not.mp3',
            title: 'Love Me Not',
            artist: 'Ravyn Lenae',
            duration: 218,
            url: '/audio/love_me_not.mp3'
        },
        {
            id: 'to_the_bone',
            fileName: 'to_the_bone.mp3',
            title: 'To The Bone',
            artist: 'Pamungkas',
            duration: 353,
            url: '/audio/to_the_bone.mp3'
        }
    ];
};

module.exports = { scanMusicLibrary };
