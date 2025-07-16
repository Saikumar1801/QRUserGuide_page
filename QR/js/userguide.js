$(document).ready(function () {

    // --- Section 1: App Installation Guide ---
    $('.guide_div_text').click(function () {
        // Remove 'active' class from all steps in this section
        $('.guide_div_text').removeClass('active');
        // Add 'active' class to the clicked step
        $(this).addClass('active');

        // Get the new image path from the data attribute
        let newImageSrc = $(this).data('image');
        // Update the image source
        $('#stepImage').attr('src', newImageSrc);

        // Special handling for the first step to show download QR codes
        if ($(this).attr('id') === 'step1') {
            $('#qrDownloadCodes').show();
        } else {
            $('#qrDownloadCodes').hide();
        }
    });

    // Set the first step as active by default
    $('.guide_div_text#step1').addClass('active').trigger('click'); // .trigger('click') handles the QR code visibility on load

    // --- Section 2: Coupon Usage Guide ---
    $('.div_23').click(function () {
        // Remove 'active' class from all steps in this section
        $('.div_23').removeClass('active');
        // Add 'active' class to the clicked step
        $(this).addClass('active');

        // Get the new image path from the data attribute
        let newImageSrc = $(this).data('image');
        // Update the image source
        $('#levelImage').attr('src', newImageSrc);
    });

    // Set the first step as active by default
    $('.div_23#level1').addClass('active');

    // --- Section 3: QR Sticker Guide ---
    $('.qr_sticker_images').click(function () {
        // Remove 'active' class from all steps in this section
        $('.qr_sticker_images').removeClass('active');
        // Add 'active' class to the clicked step
        $(this).addClass('active');

        // Get the new image path from the data attribute
        let newImageSrc = $(this).data('image');
        // Update the image source (Note: the image ID in the HTML is 'stickerImage')
        $('#stickerImage').attr('src', newImageSrc); 
    });

    // Set the first step as active by default
    $('.qr_sticker_images#grade1').addClass('active');

});