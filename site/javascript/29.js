function methodOne(){
    let uLimit=100
let result = 0
let ans= new Array(uLimit+1).fill([0])
for(let i=0;i<ans.length;i++){
    ans[i]=new Array(uLimit+1).fill(0)
}
console.log(ans.reduce((a,b)=>(a+ b.reduce((c,d)=>(c+d),0) ),0));
for(let i=2;i<=uLimit;i++){
    for(let j=2;j<=uLimit;j++){
        let base = i
        let power = j
        
        for(let k=2; k<power/2+1;k++){
            if(power%k==0){
                let m = k
                let n = parseInt( power/k )

                let newBase = Math.pow(base,m)
                let newPower = n
                
                if(newBase <= uLimit ){
                    if(newPower <= uLimit){
                        ans[newBase][newPower]+=1
                    }
                }
            }
        }


    }

}
let x = ans.reduce((a,b)=>(a+ b.reduce((c,d)=>(c+d),0) ),0)
let simp=[]
for(let i=0;i<ans.length;i++){
    let y = ans[i].reduce((c,d)=>(c+d),0)
    if(y>0){
        console.log(`${i}-->${y}`);
        ans[i][0]=i
        ans[i][1]=y
        simp.push(ans[i])
    }

    
}
console.table(simp);
console.log((99*99) - x);
}

function methodTwo(){
    let res =[]

let uLimit=100

for(let i=2;i<=100;i++){
    for(let j=2;j<=100;j++){
        let base=i
        let power=j
        let loc = Math.pow(base,power)
        if(!res.includes(loc)) res.push(loc)
    }
}

console.log(res.length);
}

methodOne()
methodTwo()

