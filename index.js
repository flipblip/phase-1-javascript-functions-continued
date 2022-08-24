function saturdayFun(hobby = 'roller-skate'){
    return `This Saturday, I want to ${hobby}!`;
}

saturdayFun('bathe my dog');

function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
}

mondayWork('work from home');

function wrapAdjective(wrapper){
    return function(rank){
        return (`You are ${wrapper}${rank}${wrapper}!`);
    };
}

wrapAdjective("a hard worker")("a dedicated programmer")

// const wrapAdjective = (function (wrapper = "*"){

// })


