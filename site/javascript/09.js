function specialPythagoreanTriplet(sum){
  let result = 1;  
  
  for(let a=sum-2; a>0;a--){
    for(let b=sum-a-1;b>0;b--){
      for(let c=sum-a-b;a+b+c<=sum;c++){                    
        if(a*a + b*b == c*c){          
          return a*b*c
        }
      }
    }    
  }  

}

console.log(specialPythagoreanTriplet(120))

specialPythagoreanTriplet(1000);


//second solution: use m and n to generate pythagorean triplet: https://www.chilimath.com/lessons/geometry-lessons/generating-pythagorean-triples/

function specialPythagoreanTriplet(sum){
  
  for(let m=2;1;m++){
    for(let i=1;i<m;i++){      
      let a= (2)*m*i;
      let b= m*m - i*i;
      let c= m*m + i*i;      
      if(a+b+c==sum) return a*b*c;
    }    
  }
  
  return 1;
}



console.log(specialPythagoreanTriplet(1000));
