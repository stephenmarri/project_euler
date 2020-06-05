let lengths = [0,1,2]
let maxLen = 2;


for(let number=1000000; number>500000; number--){
    let localNumber = number;
    let len=0;
    
    while(localNumber>0){
        if(!lengths[localNumber]){
            if(localNumber%2==0){
                localNumber=localNumber/2;
            }else{
                localNumber=3*localNumber+1
            }
            len++;
        }else{
            len+=lengths[localNumber]
            lengths[number]=len;
            break
        }

    }
    
    maxLen = len > maxLen ? len : maxLen;    
}

console.table(lengths.indexOf(maxLen));