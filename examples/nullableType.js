function f(x, y) {
    return x + (y || 0);
}
f(1, 2);
f(1);
f(1, undefined);
f(1, null);
