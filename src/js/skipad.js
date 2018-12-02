console.log('Xmm...🤔');

/**
 * @param {HTMLVideoElement} video 
 */
const skipAdInVideo = (video) => {
    video.currentTime = Math.floor(video.duration);
    console.log('Skipping ad 💩 in video');
};

/**
 * @param {Document} doc 
 */
const skipad = (doc) => {
    const videos = Array.from(doc.getElementsByTagName('video'));

    for (video of videos) {
        skipAdInVideo(video);
    }

    for(frame of Array.from(window.frames)) {
        frame.postMessage({
            type: 'skipad'
        }, '*');
    }
};

window.onkeyup = (e) => {
    // alt(option) + space
    if (e.altKey && e.keyCode === 32) {
        skipad(document);        
    }
};

window.addEventListener('message', (e) => {
    if (e.data && e.data.type && e.data.type === 'skipad') {
        console.log('Yes sir! 👌');
        skipad(document);
    }
});
