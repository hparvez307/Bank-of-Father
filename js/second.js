// deposit btn

document.getElementById('btn-deposit').addEventListener('click', function () {
    console.log('hocce');
    const depo = document.getElementById('input-deposit');
    const newDeposit = depo.value;
    console.log(typeof newDeposit);
    const a = parseFloat(newDeposit);

    if(isNaN(a)){
        alert('Enter an amount');
        return;
    }


    const da = document.getElementById('deposit-dasbord');
    let previousTotal = da.innerText;


    const pBalance = document.getElementById('balance');
    const previousBalance = pBalance.innerText;


    const c = parseFloat(previousBalance);

    const b = parseFloat(previousTotal);


    const totalBalance = c + a;

    const total = a + b;

    da.innerText = total;
    pBalance.innerText = totalBalance;
    // Balance dashboard


    depo.value = '';



})



// ---------------------------------



document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('wi-input');
    const withdrawAmount = withdrawInput.value;
    const withdraw = parseFloat(withdrawAmount);

    if(isNaN(withdraw)){
        alert('Enter an amount');
        return;
    }

    const previousWithdraw = document.getElementById('previous-withdraw');
    const totalPreviousWithdraw = previousWithdraw.innerText;
    const b = parseFloat(totalPreviousWithdraw);


    const previousBalance = document.getElementById('balance');
    const balance = previousBalance.innerText;
    const c = parseFloat(balance);
    
    if (withdraw > c) {
     
        alert('invalid withdraw amount');
        
    }
    else {
        previousWithdraw.innerText = b + withdraw;

        previousBalance.innerText = c - withdraw;
    }



    withdrawInput.value = '';
})