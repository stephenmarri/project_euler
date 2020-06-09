//################################## Method One: brute force
function MethodOne(){
    const single = ['','one','two','three','four','five','six','seven','eight','nine','ten',
    'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    const ties = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']

    let result=0;
    for(let i=1; i<1000;i++){
        word=""    
        num = Array.from(String(i),Number)
        fTwo = i
        
        if(num.length == 3){
            fTwo = parseInt(String(num[1])+String(num[2]))
            if(num[2]==0 && num[1]==0){
                word+=(single[num[0]] + "Hundred")
            } else{
                word+=(single[num[0]] + "HundredAnd")
            }        
            num.shift()
        }

        if(fTwo>19){        
            
            if(num[1]==0){
                word+=ties[num[0]];
            }else{
                word+=ties[num[0]]+single[num[1]]
            }
        }else if(fTwo>0 && fTwo<20){
            word+=single[fTwo]
        }

        
        result+=word.length
    }

    return result+11
}

//################################## Method two: counting the occurences
function MethodTwo(){
    let onesCount=0;
    let teensCount=0;  

    const ones = ['one','two','three','four','five','six','seven','eight','nine']
    const teens = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    const ties = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']
    onesCount=ones.reduce((d,i)=>d+i.length,0)
    teensCount=teens.reduce((d,i)=>d+i.length,0)
    let result=ties.reduce((a,b)=>a+(b.length*10+onesCount),onesCount+teensCount)
    
    result = ones.reduce((a,b)=>a+((b.length+10)*100-3 + 854),result)
    return result+11
}


console.log(MethodOne());
console.log(MethodTwo());