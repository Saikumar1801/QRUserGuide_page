document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("videoMoveRequest");

  // Check if the browser blocks autoplay with sound
  try {
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          console.log("Video is playing automatically.");
        })
        .catch((error) => {
          console.error("Video autoplay was blocked:", error);
          // Wait for user interaction to unmute and play the video
          document.addEventListener(
            "click",
            () => {
              video.muted = false; // Unmute the video
              video.play();
            },
            { once: true }
          ); // Ensure the listener runs only once
        });
    }
  } catch (error) {
    console.error("Error attempting to autoplay video:", error);
  }

  // Pause or play video based on visibility
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Resume video when visible
          if (video.paused) {
            video.play();
          }
        } else {
          // Pause video when not visible
          if (!video.paused) {
            video.pause();
          }
        }
      });
    },
    { threshold: 0.5 } // Video is considered visible if 50% or more is in the viewport
  );

  observer.observe(video);
});
