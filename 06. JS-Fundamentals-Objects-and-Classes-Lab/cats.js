function cats(array) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }
    for (let i of array) {
        let [name, age] = i.split(' ');
        let cat = new Cat(name, age);
        cat.meow();
    }
}
cats(['Mellow 2', 'Tom 5'])