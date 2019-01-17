/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/
class Person {
  constructor(name, age) {
    this.name = name;   
    this.age = age;
  }
}
let f = new Person('Lio Messi', 25);

console.log(f);
