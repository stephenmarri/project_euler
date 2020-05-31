function larPalPro(){
let result = 0;

for(let i=999;i>111;i--){
  for(let j=999;j>111;j--){
    if(isPalindrome(i*j) && i*j>result) result= i*j;
  }
}

return result;
}

function isPalindrome(n){
  let num = `${n}`;
  let rev="";
  for(let i=0;i<num.length;i++){
    rev+=(num[(num.length-1)-i])
  }
  return num===rev
}

console.log(larPalPro())