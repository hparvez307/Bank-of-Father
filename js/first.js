document.getElementById('btn-submit').addEventListener('click', function (event) {
    const mail = document.getElementById('email');
    const email = mail.value;

    const pass = document.getElementById('password');
    const password = pass.value;

    if (email === 'hparvez307@gmail.com' && password === 'parvez') {
        // event.target.parentNode.style.visibility = 'hidden';
        window.location.href = 'http://127.0.0.1:5500/bank.html';
    }
    else if(email != 'hparvez307@gmail.com' && password != 'parvez'){
        alert('incorrect login info');
    }
    else if(email != 'hparvez307@gmail.com'){
        alert('incorrect email address');
    }
    else if(password != 'parvez'){
        alert('incorrect password');
    }
   
        
    
    mail.value = '';
    pass.value = '';
})


