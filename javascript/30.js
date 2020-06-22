let digit=5
function sumFifthPow(n){
    let sum=0
    for(i=0;i<String(n).length;i++){
        let num = parseInt(String(n)[i]);
        sum+=Math.pow(num,digit)
    }
    return sum
}

function maxNuminNum(n){
    let arr = Array.from(String(n),Number)
    return Math.max(...arr);
}

let limits =[]
function generateLimits(){
    for(let i=0;i<10;i++){
        let loc=[i]
        let lower = Math.pow(i,digit)
        loc.push(lower)
        let upper = String(lower*9).length
        upper = lower*upper
        loc.push(upper)
        limits.push(loc)
    }
}
generateLimits()

let result=[]
for(let i=limits[2][1];i<=limits[9][2];i++){
    if(i>= limits[maxNuminNum(i)][1]){
        if(sumFifthPow(i)==i){
            result.push(i)
        }
    }
}

console.log(result);
console.log(result.reduce((a,b)=>a+b,0));
