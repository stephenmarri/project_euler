function nthPrime(n){
    let nthPrime=2;
    let primes=[2];
    let number = 3;
    while(primes.length < n) {
      let shouldInser = true;
      primes.forEach(element => {
        if(element<=(Math.sqrt(number))){
          if(number%element==0){
            shouldInser = false
          }
        }else{
          return;
        }
      });
      if(shouldInser) primes.push(number);
      number++;
    }
    
    return primes[primes.length-1];
  }

  console.log(nthPrime(10001));