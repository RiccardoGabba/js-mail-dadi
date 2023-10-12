const button = document.getElementById('button');

button.addEventListener('click', function () {

    const emailCheck = document.getElementById('e-mail').value;
    //valore che si inserisce
    const emailList = [
        "riccardo.gabba02@gmail.com"
    ]

    let success = document.getElementById('success');

    if(emailList.includes(emailCheck)){
        success.innerHTML = 'Email corretta';        

    }else{
        success.innerHTML = 'Email sbagliata';        

    }

 

})