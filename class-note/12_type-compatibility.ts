// 타입 호환
interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
}

var developer: Developer;
var person: Person;

// 오른쪽에 있는 타입이 구조적으로 더 컸을때 왼쪽과 호환이 된다.
developer = person;
person = developer;

// 함수
var add = function(a: number) {
  // ...
}
// sum()이 add()보다 구조적으로 더 크다
var sum = function(a: number, b: number) {
  // ...
}

add = sum;
sum = add;

// 제네릭
interface Empty<T> {

}

var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
  data: T;
}
// 제네릭을 정의하면 호환이 안됨
var notEmpty1: NotEmpty<string>;
var notEmpty2: NotEmpty<number>;
notEmpty1 = notEmpty2;
notEmpty2 = notEmpty1;