

// if(document.getElementById('one1').clicked == true)
// {
    // document.querySelector(".screen").innerHTML="1dsds";
// }
let digArr =[0];
let operList = [];




let noOfDigs=document.querySelectorAll(".dig").length;


let j=0;
let dig=0;
let o=0;
for(let i=0;i<noOfDigs;i++){



document.querySelectorAll(".dig")[i].addEventListener("click", (e)=> {

// setting the digit's value inside the array :- 


if(i>=12 && i<=18){
    let temp=dig;
    dig=0;
    j++;
    
    let tempOper = e.target.innerHTML;
    switch(tempOper){
        case "+" : operList[o]="plus";
                    o++;
                    break;

        case "-": operList[o]="minus";
                    o++;
                    break;

        case "x": operList[o]="multiply";
        o++;
                    break;

        case "/": operList[o]="divide";
                    o++;
                    break;
                    
                    case "%": operList[o]="modulo";
                    o++;
                    break;

        default: break;
    }
    
    document.querySelector(".screen").innerHTML+=""+e.target.innerHTML;
}

else{
    if(i==10){
        dig=(dig*10);
    }
    else{
        dig=(dig*10)+(i+1);
    }
    
    digArr[j]=dig;
    document.querySelector(".screen").innerHTML+=""+e.target.innerHTML;
    console.log(digArr[j]);
}

});
}

// clear screen 

document.getElementById("ac").addEventListener("click",(e)=>{
    document.querySelector(".screen").innerHTML=0;
    dig=0;
    digArr=[0];
    operList=[];
})


// displaying result :-

document.getElementById("equals").addEventListener("click",()=>{
    let res = calculateMe(digArr,operList);
    document.querySelector(".screen").innerHTML=res;
})


// function to calculate the result:- 

function calculateMe(digArr,operList){

    let i=0;
    let j=1;
    let O=0;

    let initRes=0;

    let operVal=operList[O];

    switch(operVal){

        case "plus":initRes = plus(digArr[i],digArr[j]);
                    O++;
                    j++;
                    break;

        case "minus":initRes = minus(digArr[i],digArr[j]);
                    O++;
                    j++;
                    break;


        case "multiply":initRes = multiply(digArr[i],digArr[j]);
                    O++;
                    j++;
                    break;


        case "divide":initRes = divide(digArr[i],digArr[j]);
                    O++;
                    j++;
                    break;

        case "modulo":initRes = modulo(digArr[i],digArr[j]);
                        O++;
                        j++;
                        break;
                    
        default: break;

    }


    

    while(j<digArr.length){

        operVal=operList[O];
        switch(operVal){

            case "plus":initRes = plus(initRes,digArr[j]);
                        O++;
                        j++;
                        break;
    
            case "minus":initRes = minus(initRes,digArr[j]);
                        O++;
                        j++;
                        break;
    
    
            case "multiply":initRes = multiply(initRes,digArr[j]);
                        O++;
                        j++;
                        break;
    
    
            case "divide":initRes = divide(initRes,digArr[j]);
                        O++;
                        j++;
                        break;

            case "modulo":initRes = modulo(initRes,digArr[j]);
                        O++;
                        j++;
                        break;
    
            default: break;
    
        }
    }

    dig=0;
    digArr=[0];
    operList=[];
    return initRes;
}

// function for addition

function plus(a,b){
    return a+b;
}

// function for subtraction
function minus(a,b){
    return a-b;
}

// function for division
function multiply(a,b){
    return a*b;
}

// function for multiplication
function divide(a,b){
    return a/b;
}

// function for mudulo
function modulo(a,b){
    return a%b;
}