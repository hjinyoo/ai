function sumAll(){
    // 매개변수가
    let resultSum = 0;
    if(arguments.length==0){
        return -999;
    }else{
    for(let data of arguments){
        resultSum += data;
    }
    }
    return resultSum
}