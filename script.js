document.addEventListener('DOMContentLoaded', function() {
    const seriesSelect = document.getElementById('seriesSelect');
    const videoPlayer = document.querySelector('video');
  
    seriesSelect.addEventListener('change', function() {
      const selectedVideo = seriesSelect.value;
      videoPlayer.src = selectedVideo;
      videoPlayer.load();
    });
  });