// Ввести с клавиатуры a и b, где а меньше b (проверку написать кодом).
// Запустить цикл перебора от a до b с шагом h (ввод с клавиатуры).
// Посчитать сумму факториалов* простых чисел которые попадаются во время перебора.

// do{
// 	a = +prompt('Enter a',1);
// } while(isNaN(a) || a<1);

// do{
// 	b = +prompt('Enter b, which bigger than '+a,5);
// } while(isNaN(b) || b<=a);

// alert('A = '+a+'. B = '+b+'.');

// do{
// 	h = +prompt('Enter h',1);
// } while(isNaN(h) || h<=0 || h>=b);

// console.log(a,b,h);

// summ=0;
// for(; a<=b; a+=h){

// 	console.log('working with',a);

	// isPrime = true;

	// if(a>2){
		
	// 	for(i=2;i<a;i++){
	// 		console.log(a+'%'+i+' = '+(a%i));
			
	// 		if(a%i === 0){
	// 			// isPrime = false;
	// 			isPrime = !isPrime;
	// 			console.log(a,'is composite number');
	// 			break;
	// 		}
	// 	}

	// }

// 	if(isPrime){
// 		console.log(a,'is prime');

// 		// 5! = 1*2*3*4*5;
// 		for(j=1,factorial=1;j<=a;j++){
// 			// factorial = factorial*j;
// 			factorial *= j;
// 			// factorial = 1*1;
// 			// factorial = 1*2;
// 			// factorial = 2*3;
// 			// factorial = 6*4;
// 			// factorial = 24*5;
// 			// factorial = 120;
// 		}
// 		console.log(a+'! = '+factorial);
// 		summ += factorial;
// 	}

// 	console.log('-----');
// }

// console.log(summ);


// users = [12,'14',true,8,19,20];
// console.log(users);

// console.log(users[0]); //12
// console.log(users[3]); //5

// userFirst = users[0];
// userFourth = users[3];

// console.log(users[0] + users[1]);
// console.log(users.length);

// users.length = 10;
// console.log(users);

// console.log(users[9]);

// users[9] = 10;
// users[7] = 100;
// users[2] = 'privetik';

// console.log(users);

// users.length = 2;

// console.log(users);
// console.log(users[2]);
// users[10] = 'ten';
// console.log(users);

// y;
// console.log(y);

// console.log(2+3);

list = [7,4,'9dfkjvn','bsdbcjshbdc23',true];

// console.log(list);
// console.log(list.length);
// console.log(list[list.length-1]); // list[4]

// console.log(list[0] + list[list.length-1]);

// list = [];
// console.log(list);
// console.log(list.length);

// for(i=0, summ=0, mull=1; i<list.length; i++){
	
// 	console.log(list[i], typeof list[i]);

// 	list[i] = +list[i];

// 	if(isNaN(list[i])){
// 		list[i] = 100;
// 	}

// 	summ += +list[i];
// 	mull *= +list[i];
// }

// console.log('----');
// console.log(summ,mull);

// list = [];
// list.length = 10;

list = new Array(10);
primeArr = new Array();
console.log(list);

for(i=0, min=-20, max=30; i<list.length; i++){
	list[i] = Math.floor(Math.random() * (max - min + 1)) + min;
	
	// if(list[i]>9 || list[i]<-9){
	// 	document.write('<p>'+list[i]+'</p>');
	// }

	isPrime = true;

	if(list[i]>2){
		// console.log(list[i]);
		
		for(j=2; j<list[i]; j++){
			//console.log(list[i]+'%'+j+' = '+(list[i]%j));
			
			if(list[i]%j === 0){
				// isPrime = false;
				isPrime = !isPrime;
				console.log(list[i],'is composite number');
				break;
			}

			console.log('---');
		}

		if(isPrime){
			console.log(list[i]+' is Prime');
			primeArr[primeArr.length] = list[i];
			// primeArr[0] = 10;
			// primeArr[1] = 11;
		}

	}


}
console.log(list);
console.log(primeArr);
