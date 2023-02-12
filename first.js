document.getElementById('btn-submit').addEventListener('click', function () {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    const passInput = document.getElementById('password');
    const password = passInput.value;

    if (email === 'hparvez307@gmail.com' && password === 'parvez600697') {
        location.href = 'http://127.0.0.1:5500/bank.html';
    }
    else if (email !== 'hparvez307@gmail.com' && password !== 'parvez600697') {
        alert('Incorrect info');
    }
    else if (email !== 'hparvez307@gmail.com') {
        alert('Incorrect email address');
    }
    else if (password !== 'parvez600697') {
        alert('Incorrect password');
    }
})







