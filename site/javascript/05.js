function primeSieve(n) {
	let sieve = new Array(n + 1);
	sieve.fill(1);
	let result=[];

	for (let i = 2; i < Math.sqrt(sieve.length) + 1; i++) {
		let value = i;
		if (sieve[value] == 1){
			while (value <= n){
				value += i
				sieve[value] = 0;
			}
		}
	}
	
	for (let i = 2; i < sieve.length; i++) {
		if(sieve[i]==1){
			result.push(i)
		}
		
	}
	return result;
}

function smallestMultiple(n){	
	let primes =[];
	primeSieve(n).forEach(element => {
		primes.push([element,1])
	});

	for (let i = 1; i <= n; i++) {
		primes.forEach(element => {
			let num = i;
			let divCount = 0;
			if(element[0]>i) return;
			while(num%element[0]==0){
				divCount++;
				num/=element[0];
			}
			if(divCount>element[1]){
				element[1]=divCount
			}
		});
	}

	let result=1;
	primes.forEach(element => {
		result*=(Math.pow(element[0],element[1]))
	});

	return result
}

let t0= performance.now()
console.log(smallestMultiple(100));
console.log(performance.now()-t0);