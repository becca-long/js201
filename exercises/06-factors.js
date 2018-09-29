// Write a function "factors" which is given a number and returns an array
// containing all its factors.
// What are factors? --> https://tinyurl.com/gncg62o

function factors (num){
    var array = []
    for (var i = 0; i <= num; i++){
        if ((num % i) === 0){
            array.push(i)
        }
    }
    return array
}

console.log(factors(120))