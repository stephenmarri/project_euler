sum=0
for(let i=3;i<=1001;i+=2){
    let a = i*i
    let dif = i-1
    let b = a -dif 
    let c = b -dif
    let d = c -dif    
    sum+=(a+b+c+d)
}


console.log(sum+1);