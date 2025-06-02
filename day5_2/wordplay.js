function wordplay(number){
    let result=""
    if(number>30){
        return "The given number is too long"
    }
    if(number<1){
        return "The given number is too short"
    }
    for(let i=1;i<=number;i++){
    if(i%5===0 & i%2===0){
        result+="jump"+" "
    }
    else if(i%2===0){
        result+="Ta"+" "
    }
    else if(i%5===0){
        result+="Stomp"+" "
    }
    else{
        result+=i +" "
    }
}
return result
}