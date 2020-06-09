function multiplesOf3and5(number) {
    if(number<3) return 0;
    number--; //should not include the number, so subtracting 1 from it
    let sumOfAP3 = (3 + (number- (number%3)))*(((number- (number%3))/3)/2);
    let sumOfAP5 = (5 + (number- (number%5)))*((number- (number%5))/5)/2;
    let sumOfAP15 = (15 + (number- (number%15)))*((number- (number%15))/15)/2;
    return sumOfAP3 + sumOfAP5 - sumOfAP15
  }
  
  multiplesOf3and5(9); 
  