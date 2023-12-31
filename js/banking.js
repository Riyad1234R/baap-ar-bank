// handle deposite button 
document.getElementById('deposit-button').addEventListener
    ('click', function () {
        // get the amount deposit
        const depositInput = document.getElementById('deposit-input');
        const newDepositAmountText = depositInput.value;
        const newDepositAmount = parseFloat(newDepositAmountText);
        // update deposite total

        const depositTotal = document.getElementById('deposit-total');
        const previousDepositText = depositTotal.innerText;
        const previousDepositAMount = parseFloat(previousDepositText);
        const newDepositTotal = parseFloat(previousDepositAMount + newDepositAmount);
        depositTotal.innerText = newDepositTotal;

        // update acount blance
        const blanceTotal = document.getElementById('blance-total');
        const blanceTotalText = blanceTotal.innerText;
        const previousBlanceTotal = parseFloat(blanceTotalText);
        const newBlanceTotal = previousBlanceTotal + newDepositAmount;
        blanceTotal.innerText = newBlanceTotal;

        // celear deposit input
        depositInput.value = '';
    })

// handle withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    // set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);


    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal

    // update blance
    const blanceTotal = document.getElementById('blance-total');
    const previousBlanceText = blanceTotal.innerText;
    const previousBlanceTotal = parseFloat(previousBlanceText);
    const newBlanceTotal = previousBlanceTotal - newWithdrawAmount;
    blanceTotal.innerText = newBlanceTotal;

    // clear wihdraw input 
    withdrawInput.value = '';

})

