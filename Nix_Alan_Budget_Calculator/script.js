var expenses = document.querySelectorAll(".exp")
var incomeRemaining = document.querySelectorAll(".remaining")
var itemType = document.querySelectorAll(".type")
var totalExpense = 0
var oneHundredDollar = 0
var fiftyDollar = 0
var twentyDollar = 0
var tenDollar = 0
var fiveDollar = 0
var oneDollar = 0
function totalExpenses() {
for(exp of expenses ){
    if(parseInt(exp.value) >= 0){
    totalExpense = totalExpense + parseInt(exp.value)
    //console.log('1')
    }
    else {
        exp.value = 0
        //console.log('2')
    }
}
document.getElementById("total-exp").innerText = totalExpense
}
 function totalTypes() {
    var totalCash = 0
    var totalChecking = 0
    var totalCreditCard = 0
    for(var i = 0; i < expenses.length; i++ ){
        //for(item of itemType){
            //console.log(item)
            //console.log(`I am here ${expenses[i].value}`)
                if(itemType[i].innerText === "Cash"){
                    totalCash = totalCash + parseInt(expenses[i].value)
                    //console.log(totalCash)
                } else if (itemType[i].innerText === "Checking"){
                        totalChecking = totalChecking + parseInt(expenses[i].value)
                    }
                 else {
                    totalCreditCard = totalCreditCard + parseInt(expenses[i].value)
                }
           // }
        }
        document.getElementById("cash-total").innerText = ` Total Cash ${totalCash}`
        document.getElementById("checking-total").innerText = `Total to leave in checking ${totalChecking}`
        document.getElementById("credit-card-payments-total").innerText = `Total For Cedit Card Payment ${totalCreditCard}` 
        document.getElementById("sum-totals").innerText = totalCreditCard + totalChecking + totalCash
 }
function calculatebudget(){
    totalExpenses()
for(var i = 0; i < expenses.length; i++ ){
    if(i === 0){
        //console.log(incomeRemaining[i])
    incomeRemaining[i].innerText = totalExpense - parseInt(expenses[i].value);
    if(itemType[i].innerText === "Cash"){
        denomination(parseInt(expenses[i].value))
}
totalTypes()
     
    } else {
        //console.log(incomeRemaining[i])
    incomeRemaining[i].innerText = parseInt(incomeRemaining[i-1].innerText) - parseInt(expenses[i].value)
    if(itemType[i].innerText === "Cash"){
        denomination(parseInt(expenses[i].value))
    }
    totalTypes()
    }
    document.getElementById("report-hundreads").innerText = `Withdraw ${oneHundredDollar} Hundred Dolloar Bills`
    document.getElementById("report-fifties").innerText = `Withdraw ${fiftyDollar} Fifty Dolloar Bills`
    document.getElementById("report-twentys").innerText = `Withdraw ${twentyDollar} Twenty Dolloar Bills`
    document.getElementById("report-tens").innerText = `Withdraw ${tenDollar} Ten Dolloar Bills`
    document.getElementById("report-fives").innerText = `Withdraw ${fiveDollar} Five Dolloar Bills`
    document.getElementById("report-ones").innerText = `Withdraw ${oneDollar} One Dolloar Bills`
}
totalExpense = 0
oneHundredDollar = 0
fiftyDollar = 0
twentyDollar = 0
tenDollar = 0
fiveDollar = 0
oneDollar = 0
}
function denomination(num) {
    if(num >= 100){
        oneHundredDollar++
        num = num - 100
        console.log(`if 100 ${num}`)
        denomination(num)
    } else if( num >= 50){
        fiftyDollar++
        num = num - 50
        denomination(num)
    } else if( num >= 20){
        twentyDollar++
        num = num - 20
        denomination(num)
    } else if( num >= 10){
        tenDollar++
        num = num - 10
        denomination(num)
    } else if( num >= 5){
        fiveDollar++
        num = num - 5
        denomination(num)
    } else if( num >= 1){
        oneDollar++
        num = num - 1
        denomination(num)
        console.log(`if 1 ${num}`)
    }else{
          num = 0
    }
    //console.log(num)
    // console.log(`100s ${oneHundredDollar}`)
    // console.log(`50s ${fiftyDollar}`)
    // console.log(`20s ${twentyDollar}`)
    // console.log(`10s ${tenDollar}`)
    // console.log(`5s ${fiveDollar}`)
    // console.log(`1s ${oneDollar}`)
}
