
const playVideo = require('./playVideo');
const Pear = require('simple-peer')
const $ = require('jquery');

function openCamera() {
  const constraints = { audio: true, video: { width: 1280, height: 720 } };
  navigator.mediaDevices.getUserMedia({ audio: false, video: true })
    .then(stream => {
      playVideo(stream, 'local')

      const p = new Pear({ initiator: location.hash === '#1', trickle: false, stream })

      p.on('signal', token => {
        $('#my_signal').val(JSON.stringify(token));
      })


      $('#connect_to').click(() => {
        const friendSignal = JSON.parse($('#my_friend_token').val())
        p.signal(friendSignal);
      })

      p.on('stream', friendSteam => {
        playVideo(stream, 'friend_stream')
      })

    })
    .catch(err => console.log(err));

}


module.exports = openCamera;