

function playVideo(stream, videoId) {
  const video = document.getElementById('local');
  video.srcObject = stream;
  video.onloadedmetadata = function () {
    video.play();
  };
}

module.exports = playVideo;