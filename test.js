var reverse = function(x) {
    let num = 0;
    let n;
    if(x>=0){
        while(x>0){
            n = x%10;
            x = Math.floor(x/10);
            num = num*10+n;
        }
        return num;
    }
    else{
        x = -1*x;
        while(x>0){
            n = x%10;
            x = Math.floor(x/10);
            num = num*10+n;
        }
        return -1*num;
    }
};

console.log(reverse(1534236469));