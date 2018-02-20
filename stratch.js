const foo = function () {
    var a = 'car';
    const bar = function () {
        return a;
    }
    return bar;
}