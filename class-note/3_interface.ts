interface User {
  name: string;
  age: number;
}

// 변수에 인터페이스 활용
let seho: User = {
  name: "세호",
  age: 25
}

// 함수에 인터페이스 활용
function getUser(user: User): void {
  console.log(user);
}
const capt = {
  name: '재석'
}
getUser({...capt, age: 123});

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
  (a: number, b: number): number
}

var sum: SumFunction;
sum = function(a, b) {
  return a * b;
}
sum(1, 2);

// 인덱싱
interface StringArray {
  [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
arr[0];
arr[0] = 'abc';

// 딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp
}

var obj: StringRegexDictionary = {
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

Object.keys(obj).forEach((value) => {
  console.log(value);
})

// 인터페이스 확장
interface Person {
  name: string;
  age: number;
}

interface Developer extends Person{
  language: string;
}

var jam: Developer = {
  language: 'ts',
  name: "LeeJam",
  age: 29
}