function rounding(num){
    const remains = num % 5;
    const count = Math.floor(num/5)
    let result = 0
    if(remains<2.5){
        result = count*5
    }
    else{
        result = (count+1)*5
    }
    console.log(result)
}
rounding(41.7)

