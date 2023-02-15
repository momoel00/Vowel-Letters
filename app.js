//Momo ItDeve

document.getElementById("btn").addEventListener("click" , function(){
  document.getElementById("result").innerHTML = ""
  let val = document.getElementById("words").value 
  if (val == ""){
    alert("Please Enter Your Phrase To Remove The Vowel Letters")
  }
  arr = ["a" , "e" , "i" ,"o", "u"]
  for (let x of val){
    let upp = x.toLowerCase();
    if (!arr.includes(upp))
  document.getElementById("result").innerHTML += ` ${x} </br>`
  document.getElementById("words").value = ""
}
})