
class Person {
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  setName (name) {
    this.name = name;
  }
}
//默认暴露
export default Person;