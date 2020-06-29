//returns an array contain prime numbers below and not equal to n
function primesSieve(n){
    if(n<2)return "none";
    let primes =[];
    let numbers = new Array(n).fill(1);
    
    for(let i=2;i<Math.sqrt(n)+1;i++){
      if(numbers[i]){      
        let iterator = i;
        while(iterator+i<=n){
          numbers[iterator+i]=0;
          iterator=iterator+i;
        }
      }
    }
  
    for(let i=2;i<=n;i++){
      if(numbers[i])primes.push(i);
    }
  
    return primes;
  }
  
  
  let sum = primesSieve(140759).reduce((a,i)=>a+i)
  console.log(sum)