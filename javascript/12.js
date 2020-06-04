let primes=[2];

function divisors(){
    let totalDivisors = 0; 
    let sum=1;
    for (let i = 2; 1; i++) {        
        let divisors =[];
        let number = i+sum;
        let localNumber=number;

        
        primes.forEach(element => {
            let divCounter=1;
            if(element<=number/2){
                while(localNumber%element==0){
                    divCounter++;
                    localNumber=localNumber/element;
                }
                if(divCounter>1)   divisors.push(divCounter);             
            }
                        
        });

        if(localNumber>1){
            let nLocalNumber = localNumber;
            for(let j=Math.floor(localNumber/2)+1;j>1;j--){
                let nDivCounter=1;
                while(nLocalNumber%j==0){
                    nDivCounter++;
                    nLocalNumber=nLocalNumber/j;
                }
                if(nDivCounter>1) {
                    divisors.push(nDivCounter);
                    primes.push(j);
                }
            }
            if(nLocalNumber>1) {
                primes.push(localNumber); 
                divisors.push(2);
            }       
        }        

        sum+=i;
        if(divisors.length>0) totalDivisors = divisors.reduce((a,b) => a*b);        
        if(totalDivisors>500){
            return(number);            
        }
    }
        
    
}

console.log(divisors())