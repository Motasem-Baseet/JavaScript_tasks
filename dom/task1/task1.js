let userName = document.getElementById('uname');
let pass = document.getElementById('password1');
let pass1 = document.getElementById('password2');
let submut = document.querySelector('#btn');
let form = document.querySelector('.form1');
let error = document.getElementById('error')
let cpass = document.getElementById('perror')

form.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault(); 
    console.log(userName.value); 
    
    if(userName.value === '' || pass.value === ''){
        error.innerHTML = 'enter data';
        
    
    }else{
        console.log('success');
        
    }

    if(pass.valu != pass1.value){
        cpass.innerHTML= 'password is not mach';
    }else 
    console.log('okay');
    

}
    

