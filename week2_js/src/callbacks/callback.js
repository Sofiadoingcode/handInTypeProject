
const calculate = (x,y,callback) => {

    return callback(x,y)

}


const add = (x,y) => {
    return x+y;
}

const sub = (x,y) => {

    return x-y;
}

const mul = (x,y) => {

    return x*y;
}

const div = (x,y) => {

    return x/ y;
}


console.log(calculate(4, 5, add));
console.log(calculate(4, 5, sub));
console.log(calculate(4, 5, mul));
console.log(calculate(4, 5, div));