let sum=0
for(let i=0;i<=200;i+=200){
    for(let j=i;j<=200;j+=100){
        for(let k=j;k<=200;k+=50){
            for(let l=k;l<=200;l+=20){
                for(let m=l;m<=200;m+=10){
                    for(let n=m;n<=200;n+=5){
                        for(let o=n;o<=200;o+=2){
                            sum++
                        }
                    }
                }
            }
        }        
    }
}

console.log(sum);