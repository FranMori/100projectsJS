const inputBill = document.getElementById("inputBill")
const inputTip = document.getElementById("inputTip")
const btnCalculate = document.getElementById("btnCalculate")
const total = document.getElementById("total")
const totalValue = document.getElementById('totalValue')


if (sessionStorage.getItem("bill") === null ) {
  inputBill.placeholder = 100
} else {
  inputBill.placeholder = sessionStorage.getItem("bill")

}

if (sessionStorage.getItem("tip") === null) {
  inputTip.placeholder = 21

} else {
  inputTip.placeholder = sessionStorage.getItem("tip")

}

btnCalculate.addEventListener("click", () => {
   sessionStorage.clear
   sessionStorage.setItem('bill',inputBill.value)
   sessionStorage.setItem('tip', inputTip.value)
    location.reload() 
   })

   if (sessionStorage.getItem("bill") && sessionStorage.getItem("tip")){
    totalValue.innerHTML = (parseInt(sessionStorage.getItem("bill")) + parseInt(sessionStorage.getItem("bill"))/parseInt(sessionStorage.getItem("tip"))).toFixed(2) + "€"
   } else {
    totalValue.innerHTML = "0€"
   }
