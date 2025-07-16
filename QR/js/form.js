const form = document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault();

    var formData = new FormData(this);

    fetch('sendmail.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())  
.then(data => {
    console.log(data);
    if (data.message === 'QR알리미 기업서비스 문의가 완료되었습니다. 빠른 시일내에 해당 번호를 통해 연락드리겠습니다. 감사합니다.') {
        const successPopup = document.getElementById('success-popup');
        const popupBackground = document.getElementById('popup-background');
        successPopup.style.display = 'block';
        popupBackground.style.display = 'block';
        setTimeout(() => {
            successPopup.style.display = 'none';
            popupBackground.style.display = 'none';
        }, 5000); 
    }
})
.catch(error => {
    console.error('Error:', error);
});
});


function formValidate(form) {
    let error = 0;
    let formReq = document.querySelectorAll('._req');

    for (let index = 0; index < formReq.length; index++) {
        const input = formReq[index];
        formRemoveError(input);

        
        if (input.getAttribute("type") === "checkbox" && input.checked === false) {
            formAddError(input);
            error++;

        } else {
            if (input.value === '') {
                formAddError(input);
                error++;
            }
        }
       
    } 
    return error;
}
function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error');
}
function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
}
