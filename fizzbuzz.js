function fizzBuzz(){
    for(let i =1; i<=100; i++){
        if( i=== 1 ){
            console.log(i);
            continue;
        }
        let temp = 0;
        for(let j = 2; j <= i/2; j++){
            if(i%j === 0){
                temp++;
            }
        }
        if (temp === 0){
            console.log("Prime");
        }
        else if(i%15 === 0 ){
            console.log("FizzBuzz");
        }
        else if(i%3 === 0){
            console.log("Fizz");
        }
        else if(i%5 === 0){
            console.log("Buzz");
        }
        
        else{
            console.log(i);
        }
    }
}

fizzBuzz();

