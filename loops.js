for(i = 0; i <= 20; i++){
    if(i % 2 != 0)
        console.log(i)
}


var array = [4, 2.5, 1, -0.5, -2, -3.5]
    for(i=0; i<=array.length-1; i++){
        console.log(array[i])
    }

var sum = 0
    for(i=0; i<=100; i++){
        sum=sum+i;
    }
    console.log(sum)

var n = 1
var product = 0
    while(product < 1e8){
        product=n*n
        n++
    }
    console.log(product)