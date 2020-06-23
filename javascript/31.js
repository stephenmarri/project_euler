let sum=0
for(let i=0;i<=200;i+=200){
    for(let j=0;i+j<=200;j+=100){
        for(let k=0;i+j+k<=200;k+=50){
            for(let l=0;i+j+k+l<=200;l+=20){
                for(let m=0;i+j+k+l+m<=200;m+=10){
                    for(let n=0;i+j+k+l+m+n<=200;n+=5){
                        for(let o=0;i+j+k+l+m+n+o<=200;o+=2){
                            sum++
                        }
                    }
                }
            }
        }        
    }
}

console.log(sum);