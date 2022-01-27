function Person(name, age) {
  this.name = name;
  this.age = age;
}
var capt = new Person('캡틴', 100);

// 위 생성자 함수와 밑 클레스 문법의 결과는 같다.

// ES2015 (ES6)
class Person {
  // 클래스 로직
  constructor(name, age) {
    console.log('생성 되었습니다.');
    this.name = name;
    this.age = age
  }
}

var jaemin = new Person('재민', 29);
console.log(jaemin);