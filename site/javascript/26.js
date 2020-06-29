function giveRemainder(num){    
    let divident=Math.pow(10,(String(num).length))    
    let dividentArr=[divident]        
    let result = 0
    
    while(1){
        let localRem = divident % num
        let localQuo = Math.floor(divident / num )
        
        if (localRem==0){
            break
        }else{
            divident = localRem*10
        }
        
        if(dividentArr.includes(parseInt(divident))){
            result = dividentArr.length - dividentArr.indexOf(divident)
            break
        }else{
            dividentArr.push(divident)
        }
        
    }
    
    return result
}

let result=0
for(let i=2;i<1000;i++){
    let loaclRes = giveRemainder(i)
    result = result > loaclRes ? result : i
}

console.table(result);