
const playVideo = require('./playVideo');

function openCamera() {
  const constraints = { audio: true, video: { width: 1280, height: 720 } };
  navigator.mediaDevices.getUserMedia({ audio: false, video: true })
    .then(stream => playVideo(stream, 'local'))
    .catch(err => console.log(err));

}


module.exports = openCamera;