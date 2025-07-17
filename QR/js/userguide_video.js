// --- VIDEO POPUP LOGIC ---
function initVideoPopup() {
    const videoLinks = document.querySelectorAll('.js-video-link');
    const videoPopup = document.getElementById('video-popup');
    const modalContent = videoPopup.querySelector('.modal-content');
    const videoPlayer = document.getElementById('popup-video-player');
    const closeBtn = videoPopup.querySelector('.close-button');
    const playBtn = videoPopup.querySelector('.play-button');

    if (!videoPopup || !videoPlayer || videoLinks.length === 0) return;

    const openPopup = (videoSrc) => {
        videoPlayer.src = videoSrc;
        videoPopup.classList.add('active');
        modalContent.classList.add('video-not-started');
        videoPlayer.load();
    };

    const closePopup = () => {
        videoPopup.classList.remove('active');
        videoPlayer.pause();
        videoPlayer.currentTime = 0;
        videoPlayer.src = "";
    };

    const startPlayback = () => {
        modalContent.classList.remove('video-not-started');
        videoPlayer.play();
    };

    videoLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const videoSrc = link.dataset.videoSrc;
            if (videoSrc) {
                openPopup(videoSrc);
            }
        });
    });
    
    playBtn.addEventListener('click', startPlayback);
    closeBtn.addEventListener('click', closePopup);
    
    videoPopup.addEventListener('click', (e) => {
        if (e.target === videoPopup) {
            closePopup();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && videoPopup.classList.contains('active')) {
            closePopup();
        }
    });
}

// Initialize video popup
document.addEventListener('DOMContentLoaded', initVideoPopup);