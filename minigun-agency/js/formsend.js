
const file = document.querySelector('.file');
const filePreview = document.querySelector('.file-preview');
const bady = document.querySelector('body');
    const formAll = document.querySelectorAll('.form-all');
    formAll.forEach(form => {
        form.addEventListener('submit', formSend);
        async function formSend(e) {
            e.preventDefault();
    
            let error = formValidate(form); 
    
            let formData = new FormData(form);
            if (file) {
                formData.append('file', file.files[0]);
            }

        
            
                let response = await fetch('https://minigun-agency.by/sendmail.php', {
                    method: 'POST',
                    body: formData
                });
                
                if (response.ok) {
                    form.reset();
                } else {
    
                    alert("Ошибка");
                }
        }
        
        function formValidate(form) {
            let error = 0;
            let formReq = form.querySelectorAll('._req');
        
            for (let index = 0; index < formReq.length; index++) {
                const input = formReq[index];
                formRemoveError(input);
        
                if(input.classList.contains('_email')){
                    if (emailTest(input)){
                        formAddError(input);
                        error++;
                    } 
                } else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
                        formAddError(input);
                        error++;
                } else {
                    if (input.value === ''){
                        formAddError(input);
                        error++;
                    }
                }
                
            }
            return error;
        }
        
        function formAddError(input) {
            input.parentElement.classList.add('err');
            input.classList.add('err');
        }
        function formRemoveError(input) {
            input.parentElement.classList.remove('err');
            input.classList.remove('err');
        }
        
        function emailTest(input) {
            return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
        }
    });



