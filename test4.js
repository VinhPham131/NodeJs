class MyClass {
    a = 1;
    #b = 2;
    static #c = 3;

    intB() {
        this.#b++;
        console.log(this.#b);
    }
}
const m = new MyClass();
m.intB();
m.a = 10;