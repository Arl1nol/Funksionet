function Shuma(a,b){
    return a + b
}

let shuma = (a,b) =>{
    return a + b
}

let numberCompare = (a,b) => {
    if(a === b){
        return 'Numbers are equal';
    } else if(a > b){
        return 'First is greater';
    }
    else {
        return 'second is greater';
    }
}


function mesatarja(a,b,c){
    return (a+b+c)/3
}

let m1 = mesatarja(44, 23, 71)
let m2 = mesatarja(65, 54, 49)

function CheckWinner(m1,m2){
    if (m1>=2*m2){
        console.log('Houston ka fituar')
    }
    else if (m1*2<=m2){
        console.log('Miami ka fituar')
    }
    else{
        console.log('Jane baraz')
    }
}

