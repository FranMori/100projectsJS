const date = document.getElementById('date')
const btn = document.getElementById("btn")
const ageCalculated = document.getElementById("ageCalculated")

function getDateOfBirth () {
  const dateValue = new Date(date.value)
  const today = (new Date())
  let age = 0
  console.log(dateValue.getDate())
  console.log(today.getDate())

  if (dateValue == 'Invalid Date') {
    alert ("Please enter your birth date")
  }else if (dateValue.getMonth() < today.getMonth()) {
    age = today.getFullYear()- dateValue.getFullYear()
 } else if(dateValue.getMonth() > today.getMonth()) {
   age = today.getFullYear()-dateValue.getFullYear() -1
 
 } else if(dateValue.getMonth() === today.getMonth() && dateValue.getDate() <= today.getDate()) {
   age = today.getFullYear()-dateValue.getFullYear()
 } else {
   age = today.getFullYear()-dateValue.getFullYear() -1
 }
   if (age == 1 || age == 0) { 
  ageCalculated.innerText = "Your age is " + age + " year old"
} else {
  ageCalculated.innerText = "Your age is " + age + " years old"

}
}


btn.addEventListener("click", getDateOfBirth)


