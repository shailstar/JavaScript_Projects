let a = 0;
function onc(valu1){
    document.calc.txt.value += valu1;
    if(a != 0){a = 0;}
}

function collect(valu){
    if(a != 0){
        document.calc.txt.value = valu;
    }else{
        document.calc.txt.value += valu;
    } 
}
function ans(){
    document.calc.txt.value = eval(calc.txt.value);
    a = 1;
}




