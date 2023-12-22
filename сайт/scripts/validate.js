const form = document.getElementById('author');
let checkboxDiv = document.getElementById('block_checkbox');
checkboxDiv.classList.add('hidden_block');

form.addEventListener('submit', function(e){
        e.preventDefault();
        let textName = document.getElementById('textName');
        let textArea = document.getElementById('textarea');
        let isValid = true;
        isValid = isNameValid() & isMessageValid() & isEmailValid() & isDataValid() & isNumberValid() & isUrlValid();
        if(isValid){
            e.currentTarget.submit();
            alert("Ваш обращение полученно");
        }
    }
)

let radios = document.getElementById('radios').children;
for(let i = 0; i < radios.length; i++){
    const element = radios[i].children[0];
    switch(element.value){
        case 'mes':
            element.addEventListener('change', hiddenMes);
            break;
        case 'e-mail':
            element.addEventListener('change', hiddenEmail);
            break;        
        case 'number':
            element.addEventListener('change', hiddenNumber);
            break;        
        case 'data':
            element.addEventListener('change', hiddenData);
            break;        
        case 'url':
            element.addEventListener('change', hiddenUrl);
            break;
        default:
            break;
    }
}

function hiddenMes(){
    let inputs = document.getElementById('block_info').children[1].children;
    inputs[1].classList.add('hidden_block');
    inputs[2].classList.add('hidden_block');
    inputs[3].classList.add('hidden_block');
    inputs[4].classList.add('hidden_block');
}

function hiddenEmail(){
    let inputs = document.getElementById('block_info').children[1].children;
    inputs[1].classList.remove('hidden_block');
    inputs[2].classList.add('hidden_block');
    inputs[3].classList.add('hidden_block');
    inputs[4].classList.add('hidden_block');
}

function hiddenNumber(){
    let inputs = document.getElementById('block_info').children[1].children;
    inputs[1].classList.add('hidden_block');
    inputs[2].classList.remove('hidden_block');
    inputs[3].classList.add('hidden_block');
    inputs[4].classList.add('hidden_block');
}

function hiddenData(){
    let inputs = document.getElementById('block_info').children[1].children;
    inputs[1].classList.add('hidden_block');
    inputs[2].classList.add('hidden_block');
    inputs[3].classList.remove('hidden_block');
    inputs[4].classList.add('hidden_block');
}

function hiddenUrl(){
    let inputs = document.getElementById('block_info').children[1].children;
    inputs[1].classList.add('hidden_block');
    inputs[2].classList.add('hidden_block');
    inputs[3].classList.add('hidden_block');
    inputs[4].classList.remove('hidden_block');
}

let select = document.getElementById('select');
select.addEventListener('change', function(){
    switch (this.value){
        case 'without':
            checkboxDiv.classList.add('hidden_block');
            break;
        case 'question':
            checkboxDiv.classList.remove('hidden_block');
            break;
        default:
            break;
    }
})

select.selectedIndex = 0;
radios[0].children[0].checked = true;
hiddenMes();

function isNameValid(){
    const name = document.getElementById('textName');
    if(name.value.length === 0){
        name.classList.add('erroe_block');
        alert('Неверное имя');
        return false;
    }
    name.classList.remove('error_block');
    return true;
}

function isMessageValid(){
    const message = document.getElementById("textarea");

    if (message.value.length === 0) {
        message.classList.add('error_block');
        alert('Поле Сообщение пустое');
        return false;
    }
    message.classList.remove('error_block');
    return true;
}

function isNumberValid(){
    let reg = /^8\d{10}/;

    const phone = document.getElementById("number");

    if (!phone.parentElement.classList.contains('hidden_block') 
            && ((phone.value.length === 0) 
            || !reg.test(phone.value))) {
        phone.classList.add('error_block');
        alert('Поле телефон неверное');
        return false;
    }
    phone.classList.remove('error_block');
    return true;
}

function isEmailValid(){
    let reg = /[A-Za-z0-9]+@[a-z]+\.[a-z]/;

    const email = document.getElementById("email");

    if (!email.parentElement.classList.contains('hidden_block') 
            && ((email.value.length === 0) 
            || !reg.test(email.value))) {
        email.classList.add('error_block');
        alert('Поле e-mail неверное');
        return false;
    }
    email.classList.remove('error_block');
    return true;
}
function isDataValid(){
    const data = document.getElementById("data");

    if (!data.parentElement.classList.contains('hidden_block') && ((data.value.length === 0))) {
        data.classList.add('error_block');
        alert('Поле Дата неверное');
        return false;
    }
    data.classList.remove('error_block');
    return true;
}
function isUrlValid(){
    const url = document.getElementById("url");

    if (!url.parentElement.classList.contains('hidden_block') && ((url.value.length === 0))) {
        url.classList.add('error_block');
        alert('Поле URL неверное');
        return false;
    }
    url.classList.remove('error_block');
    return true;
}
