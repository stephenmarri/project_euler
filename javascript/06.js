function sumSquareDifference(n) {
  let singleSquare=0,sumSquare=0;
  for (let i = 1; i < n+1; i++) {
    singleSquare+=(i*i)
    sumSquare+=i;
  }
  return Math.pow(sumSquare,2)-singleSquare;
}

console.log(sumSquareDifference(100));

//this can also be done by using the below formulas
//(1+2+3....100)^2 = (n(n+1)/2)^2 = (n(n+1))^2 / 4  
// 1*1 + 2*2 + 3*3 ... 100*100 = [n(n + 1)(2n + 1)] / 6
//            ==> n = 100
//(100*100)(101*101)/4 = 25502500
//[100*101*201]/6 = 338350
//25502500-338350 = 25164150