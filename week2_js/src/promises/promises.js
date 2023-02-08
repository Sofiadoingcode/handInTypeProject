

const calculate = async (x,y,callback) => {
        try{
            const data = callback(x,y);
            console.log(data);
            return (data);
        } catch (e) {
            reject(e.message)

        }
    };


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

calculate(4, 5, add)
    .then(res => calculate(res, 5, div)
        .then(res => calculate(res, 5, sub)
            .then(res => calculate(res, 5, mul)
        )));

