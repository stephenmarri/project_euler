function largestPrimeFactor(num){ 
let result;
  while (num%2==0) {
    num=num/2;    
    result=2
  }
  

  for(let i=3; i<(Math.sqrt(num))+1;i=i+2){
    while(num%i==0){
      num=num/i;  
      result=i    
    }
  }

  if(num>2) return num
  return result;
}

console.log(largestPrimeFactor(600851475143))