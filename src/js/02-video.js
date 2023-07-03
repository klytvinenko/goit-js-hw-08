import Player from '@vimeo/player';

import throttle from 'lodash.throttle';

console.log(Player);

const iframe = document.getElementById('vimeo-player');

const STORAGE_KEY = 'videoplayer-current-time';
const player = new Player(iframe, {
    loop: true,
    fullscreen: true,
    quality: '1080p',
  });


const onUpdate = function(data) {
localStorage.setItem(STORAGE_KEY, data.seconds);
console.log('ok');
}

player.on('timeupdate', throttle(onUpdate, 1000));

const currentTime = Number(localStorage.getItem(STORAGE_KEY));

player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

// player.getVideoTitle().then(function(title) {
//     console.log('title:', title);
// });

console.log('hello');