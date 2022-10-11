// code your solution here
function saturdayFun(para){
    if(para != undefined)
    return `This Saturday, I want to ${para}!`;
    else return `This Saturday, I want to roller-skate!`;
}
console.log(saturdayFun("just relax"));


function mondayWork(para1, para2){
    if(para1 != undefined ) 
  return `This Monday, I will ${para1}.`;
  else {
    para1 = 'go to the office';
    return `This Monday, I will ${para1}.`  
  }
}
 console.log(mondayWork("clean the home"));


 function wrapAdjective(s="*"){
    return function(adj="special")
    {
        return `You are ${s}${adj}${s}!`;
    }
}

//console.log(wrapAdjective("%")("a dedicated programmer"))

