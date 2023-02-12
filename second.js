// bank dashboard

document.getElementById('btn-deposit').addEventListener('click', function () {

    // deposit section
    const inputdeposit = document.getElementById('input-deposit');
    const deposit = inputdeposit.value;
    const depositAmount = parseFloat(deposit);


    inputdeposit.value = '';
    if (isNaN(depositAmount) || depositAmount <= 0) {

        return alert('Please input an amount');
    }

    // total previous deposit
    const previousTotalDeposit = document.getElementById('deposit-dasbord');
    const previousDeposit = previousTotalDeposit.innerText;
    const previousTotalDepositAmount = parseFloat(previousDeposit);


    //total deposit update
    const totalDeposit = previousTotalDepositAmount + depositAmount;
    previousTotalDeposit.innerText = totalDeposit;


    //  balance dashboard
    const previousBalance = document.getElementById('balance');
    const totalBalance = previousBalance.innerText;
    const balance = parseFloat(totalBalance);
    // update balance dashboard
    const updateBalance = balance + depositAmount;
    previousBalance.innerText = updateBalance;



})


// withdraw section
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // get withdraw amount
    const withdrawInput = document.getElementById('wi-input');
    const withdraw = withdrawInput.value;
    const totalWithdrawAmount = parseFloat(withdraw);

    // validation and reset withdraw input or withdraw amount
    withdrawInput.value = '';
    if (isNaN(totalWithdrawAmount) || totalWithdrawAmount <= 0) {
        return alert('Please enter an amount');
    }



    // get and update total withdraw dashboard
    const previousWithdraw = document.getElementById('previous-withdraw');
    const previousWithdrawAmount = previousWithdraw.innerText;
    const totalPreviousWithdraw = parseFloat(previousWithdrawAmount);


    // get total previous balance of bap er bank

    const previousBalance = document.getElementById('balance');
    const previousBalanceAmount = previousBalance.innerText;
    const totalPreviousBalance = parseFloat(previousBalanceAmount);
    // alert for withdraw amount
    if (totalWithdrawAmount > totalPreviousBalance) {
        return alert('Please enter a valid withdraw amount');
    }

    // update withdraw dashboard

    const totalWithdraw = totalPreviousWithdraw + totalWithdrawAmount;

    previousWithdraw.innerText = totalWithdraw;

    // update balance dashboard

    const totalBalance = totalPreviousBalance - totalWithdrawAmount;
    previousBalance.innerText = totalBalance;


})