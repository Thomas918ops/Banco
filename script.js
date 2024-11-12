const users=[
    {
        "id":1,
        "email":"thomas@gmail.com",
        "password":"senha123"
    },
    {
        "id":2,
        "email":"robesvaldo@gmail.com",
        "password":"ovos"
    }
];

const email_input=document.getElementById('email-login');
const password_input=document.getElementById('password-login');
const form=document.getElementById('form-login');

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const _email=email_input.value;
    const _password=password_input.value;
    const user_data=users.find((user)=>{return user.email==_email && user.password==_password});

    if (user_data!=undefined){
        Swal.fire({
            title:'Login sucedido',
            text:'Acesso ao sistema liberado',
            icon:'success',
            showConfirmButton:false,
            timer:1000
          });
    }else{
        Swal.fire({
            title:'Falha no Login',
            text:'Tente novamente',
            icon:'error',
            showConfirmButton:false,
            timer:2000
          });
    }
});
