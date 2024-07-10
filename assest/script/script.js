document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById('myVideo');
    const videoSection = document.getElementById('videoSection');
    video.addEventListener('play', function() {
        videoSection.classList.add('playing');
    });
});