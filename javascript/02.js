function nthFibonaaci(n){ 
  let a =0;
  let b = 1;
  let c;
  let sum=0;
  if(n===0 || n===1) return n;
  
  for(let i=2;i<=n;i++){
    if(b>4000000)break;
    c=a+b;
    a=b;
    b=c;
    if(b%2===0) sum+=b;    
  }
  return sum;
}


console.log(nthFibonaaci(100))

