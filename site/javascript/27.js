// n2 +n(2a + 1) + a(a+1) + 41 
//Math.pow(num,2) + num*(a) + b

let p=0
let num=0;
let ans=0;

let posRun = true
let negRun = true

while((posRun || negRun)){        
        if(posRun){
            let lp=p
            let a = parseInt(lp)*2 + 1
            let b = parseInt( lp*(lp+1)) + 41 
            if(a>=1000 || b>1000){
                posRun=false
            }else{
                let c = Math.pow(num,2) + num*(a) + b
                if(checkPrime(c)) {                    
                    ans = Math.abs(ans) > Math.abs(a)*Math.abs(b) ? ans : a*b
                }                
            }
        }
        if(negRun){
            lp=-p
            a = parseInt(lp)*2 + 1
            b = parseInt( lp*(lp+1)) + 41 
            if(Math.abs(a)>=1000 || Math.abs(b)>1000){
                negRun=false
            }else{
                let c = Math.pow(num,2) + num*(a) + b
                if(checkPrime(c)) {                    
                    ans = Math.abs(ans) > Math.abs(a)*Math.abs(b) ? ans : a*b
                }                
            }
        }        
    p++
}

function checkPrime(n){    
    if(n==1 || n==2) return true
    for(let i=2;i<Math.sqrt(n)+1;i++){
        if(n%i==0) return false
    }
    return true
}


console.log(ans);