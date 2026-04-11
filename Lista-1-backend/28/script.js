function assincrona1() {
    return Promise.resolve(1);
}

function assincrona2() {
    return Promise.resolve(2);
}

function assincrona3() {
    return Promise.resolve(3);
}

Promise.all([
    assincrona1(),
    assincrona2(),
    assincrona3()
]).then(console.log);