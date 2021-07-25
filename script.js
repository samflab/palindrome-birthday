let birthday = document.getElementById("birthday");
const check = document.getElementById("check");

check.addEventListener("click", checkBtn);

function checkBtn() {
  var dateArray = birthday.value.split("-"); //removing the ' - ' from date and storing as array

  const year = dateArray[0]; //0th index: year
  const month = dateArray[1]; //1st index: month
  const day = dateArray[2]; //2nd index: day

  var yyyyddmm = [year, month, day]; //yyyy-dd-mm format
  console.log(yyyyddmm);
  var mmddyyyy = [month, day, year]; //mm-dd-yyyy format
  console.log(mmddyyyy);
  var ddmmyyyy = [day, month, year]; //dd-mm-yyyy format
  console.log(ddmmyyyy);
  var yyyymmdd = [year, month, day];
  console.log(yyyymmdd);
 
  //converting from array to numbers
  yyyyddmm = toNumber(yyyyddmm);
  mmddyyyy = toNumber(mmddyyyy);
  ddmmyyyy = toNumber(ddmmyyyy);
  yyyymmdd = toNumber(yyyymmdd);

  console.log("into number, year first: ", yyyyddmm);
  console.log("into number, month first: ", mmddyyyy);
  console.log("into number, day first: ", ddmmyyyy);
  console.log("into number, yyyymmdd: ", yyyymmdd);

  if(isPalindrome(yyyyddmm) || isPalindrome(mmddyyyy)|| isPalindrome(yyyymmdd) || isPalindrome(ddmmyyyy)){
      console.log("Yippie ! its a palindrome birthday");
  }
  else{
      console.log("Not a palindrome bday");
  }
}

//changing the date object into string
function toNumber(dateArray) {
  var sum = 0;
  for (var i = 0; i < dateArray.length; i++) {
    sum += dateArray[i]; //array to number
  }
  return Number(sum);
}

function isPalindrome(num){
    let factor = 1;
   while (num / factor >= 10){
      factor *= 10;
   }
   while (num) {
    let first = Math.floor(num / factor);
    let last = num % 10;
    // if first and last digit not same return false
    if (first != last){
       return false;
    }
    //removing first and last digit
    num = Math.floor((num % factor) / 10);
    factor = factor / 100;
 }
 return true;
}