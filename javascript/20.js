let result=[1]

for(let i=2;i<=100;i++){
    mul(result,i)
}


function mul(lst, num){
    carry=0
    for(let i=lst.length-1;i>=0;i--){
        prod = lst[i]*num + carry
        lst[i] = prod;
        if(String(prod).length > 1){
            lst[i] = prod % 10;
            carry = Math.floor(prod/10)
        }else{
            carry = 0
        }
    }
    if(carry){
        lst.unshift(...Array.from(String(carry).split(""),Number))
    }

}

sum = result.reduce((a,b)=>a+b,0)
console.log(sum);