const singularArray = ["second", "minute", "hour", "day" ];
const pluralArray = ["seconds", "minutes", "hours", "days" ];

function timeAdder(value1, label1, value2, label2){
    if((value1 === 1 && !singularArray.includes(label1)) || (value2 === 1 && !singularArray.includes(label2)) || (value1 > 1 && !pluralArray.includes(label1)) || (value2 > 1 && !pluralArray.includes(label2)) || value1 <= 0 || value2 <=0 || isNaN(value1) || isNaN(value2)){
        return false;
    }
    else {
        const secondsValue1 = timeInSeconds(value1, label1);
        const secondsValue2 = timeInSeconds(value2, label2);
        const totalTime = secondsValue1 + secondsValue2;
        if(totalTime%86400 === 0){
            return [totalTime/86400, totalTime/86400 > 1 ? "days":"day"];
        }
        else if(totalTime%3600 === 0){
            return [totalTime/3600, totalTime/3600 > 1 ? "hours":"hour"];
        }
        else if(totalTime%60 === 0){
            return [totalTime/60, totalTime/60 > 1 ? "minutes":"minute"];
        }
        else{
            return [totalTime, totalTime > 1 ? "seconds":"second"];
        }
    }    
}

function timeInSeconds(value , label){
    switch(label){
        case "seconds":
        case "second":
            return value*1;
        case "minutes":
        case "minute":
            return value*60;
        case "hours":
        case "hour":
            return value*3600;
        case "days":
        case "day":
            return value*86400;    
    }
}

console.log(timeAdder(24, "hours", 24, "hours"));
