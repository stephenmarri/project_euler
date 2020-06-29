let isLeap = 0;
let days = [31,28 + isLeap,31,30,31,30,31,31,30,31,30,31]
let sundays = 0;


let currenDay = 1;
let expectedRemainder = 1;
for(let i=1;i<=100;i++){
    isLeap=0;
   if(i%4==0 || i%100==0) isLeap=1
    
    days.forEach(element => {
        if((currenDay +  element)%7== (7 - expectedRemainder)){
            sundays++;
            currenDay=1;
            expectedRemainder=6;
        }else{
            currenDay+=element;
        }
    });
}

console.log(sundays);