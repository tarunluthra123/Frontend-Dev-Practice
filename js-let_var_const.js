let x = 5;

function fun() {
    let x = 10;
    console.log(x);
    if (true) {
        let x = 20;
        console.log(x);
    }
    console.log(x);

}

fun();
console.log(x);

console.log();

var y = 5;

function fun2() {
    var y = 10;
    console.log(y);
    if (true) {
        var y = 20;
        console.log(y);
    }
    console.log(y);

}

fun2();
console.log(y);

console.log();

const z = 5;

function fun3() {
    const z = 10;
    console.log(z);
    if (true) {
        const z = 20;
        console.log(z);
    }
    console.log(z);
}

fun3();
console.log(z);

console.log();


(function (p, q, r) {
    p("8 = " + q(2, 3));
    p("root 2 = " + r(2));
})(console.log, Math.pow, Math.sqrt)



function sayHello(times, name, doneSaying) {
    return new Promise((resolve, reject) => {
        let count = 0
        let loopId = setInterval(() => {
            count++

            console.log("Hello " + name);
            if (count === times) {

            }
        })
    })
}
