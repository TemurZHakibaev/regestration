const $form = document.querySelector("#form");
const $list = document.querySelector('#list');
const $userName = document.querySelector('#user_name');
const $userSurname = document.querySelector('#user_surname');
const $userPhone = document.querySelector('#user_phone');
const $userAddress = document.querySelector('#user_address');
const $userEmail = document.querySelector('#user_email');
const $userPassword = document.querySelector('#user_password');
const $span1 = document.querySelector('.span1');
const $span2 = document.querySelector('.span2');
const $span3 = document.querySelector('.span3');
const $span4 = document.querySelector('.span4');

let userArray = [{}];

$form.addEventListener("submit", (evt)=> {
    evt.preventDefault();

    let newObj = {  
        id: userArray.length,
        name: $userName.value.trim(),
        surename: $userSurname.value.trim(),
        phone: $userPhone.value.trim(),
        address: $userAddress.value.trim(),
        email: $userEmail.value.trim(),
        password: $userPassword.value.trim(),
    };
    $userName.value = '';
    $userSurname.value = '';
    $userPhone.value = '';
    $userAddress.value = '';
    $userEmail.value = '';
    $userPassword.value = '';
    userArray.push(newObj);
    renderFunction(userArray, $list);
});

let renderFunction = (array , element)=>{
    element.innerHTML = null;
    for(let i = 0; i < array.length; i++ ){
        element.innerHTML += `
        <li class="li">
        <p class="text">Your id: ${array[i +1].id}</p>
        <p class="text">Your name: ${array[i +1].name}</p>
        <p class="text">Your surname: ${array[i +1].surename}</p>
        <p class="text">Your phone number: ${array[i +1].phone}</p>
        <p class="text">Your address: ${array[i +1].address}</p>
        <p class="text">Your email: ${array[i +1].email}</p>
        <p class="text">Your password: ${array[i +1].password}</p>
        </li>
        `;        
    }
};

$userName.addEventListener('input', (e)=>{
    let value = e.target.value;
    if(value.length < 4){
        $span1.style.display = 'block';
    }else{
        $span1.style.display = 'none';
    }
});

$userSurname.addEventListener('input', (e)=>{
    let value = e.target.value;
    if(value.length < 4){
        $span2.style.display = 'block';
    }else{
        $span2.style.display = 'none';
    }
});

$userPassword.addEventListener('input', (e)=>{
    let value = e.target.value;
    if(value.length < 8){
        $span3.style.display = 'block';
    }else{
        $span3.style.display = 'none';
    }
});

$userPhone.addEventListener('input', (e)=>{
    let value = e.target.value;
    if(value.length < 7){
        $span4.style.display = 'block';
    }else{
        $span4.style.display = 'none';
    }
});