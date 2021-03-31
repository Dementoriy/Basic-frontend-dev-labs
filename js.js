var key = new Boolean(false)
var username;


function knopka() {
    if(key==true){
        Swal.fire('Я это сделал, а ' + username + ' тебе от меня совет: “ Поступай правильно — поступай в ВятГУ!”')
    }
    else{
        Swal.fire({
    title: 'Введите своё имя',
    input: 'text', inputAttributes: {
        autocapitalize: 'off'
    },
    showCancelButton: true,
    cancelButtonText: 'Отмена',
    confirmButtonText: 'Ввести',                    
    allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
    if (result.isConfirmed) {
        Swal.fire('Я это сделал, а ' + result.value + ' тебе от меня совет: “ Поступай правильно — поступай в ВятГУ!”')
        username=result.value;
    }
    })
    key=true;    
    } 
}