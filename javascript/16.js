//########################## Method 1: acquired 2^1000 using BigInt in the chrome console
// const st = '10715086071862673209484250490600018105614048117055336074437503883703510511249361224931983788156958581275946729175531468251871452856923140435984577574698574803934567774824230985421074605062371141877954182153046474983581941267398767559165543946077062914571196477686542167660429831652624386837205668069376'
// sum=0;
// for (let index = 0; index < st.length; index++) {
//     const element = st[index];
//     sum+=parseInt(element)
// }
//console.log(sum);

//################### Method 2: adding over a array
sum=[2];

for(let i=1;i<1000;i++){
    let carry=0;
    for(let i=sum.length-1;i>=0;i--) {        
        sum[i]=(sum[i]*2)+carry;
        if(sum[i]>=10){
            carry=Math.floor(sum[i]/10);
            sum[i] = sum[i]%10;            
        }else{
            carry=0;
        }
    };
    if(carry>0)sum.unshift(carry)
}

console.log(sum.reduce((a,b)=>a+b));