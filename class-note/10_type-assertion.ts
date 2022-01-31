// 타입 단언 (Type Assertion)
var a;

a = 20;
a = 'a';

var b = a as string;
// 타입을 강제로 지정

// DOM API 조작 시 많이 사용
var div = document.querySelector('div');
if (div) {
  div.innerHTML;
}
// 위 처럼 사용시 유니온으로 HTMLDivElement | null 이기 때문에 널 체크가 필요함

// 개발자는 DOM을 더 잘 파악하고 있기 때문에 타입을 단언하여 사용하면 편함
var div = document.querySelector('.container') as HTMLDivElement;
div.innerHTML;