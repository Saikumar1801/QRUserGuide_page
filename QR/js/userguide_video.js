$(document).ready(function () {
  function setupVideoModal(buttonId, modalId, videoId) {
    const modal = $(modalId);
    const video = $(videoId)[0];

    $(buttonId).on("click", function () {
      if (video) {
        video.currentTime = 0;
        video.pause();
      }
      modal.show();
    });

    modal.find(".close-btn").on("click", function () {
      modal.hide();
      if (video) {
        video.pause();
      }
    });

    $(window).on("click", function (event) {
      if ($(event.target).is(modal)) {
        modal.hide();
        if (video) {
          video.pause();
        }
      }
    });
  }

  setupVideoModal("#videoButton_1", "#videoModal_1", "#video_1");
  setupVideoModal("#videoButton_2", "#videoModal_2", "#video_2");
  setupVideoModal("#videoButton_3", "#videoModal_3", "#video_3");
});