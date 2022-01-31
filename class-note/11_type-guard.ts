interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function introduce(): Developer | Person {
  return { name: 'Tony', age: 30, skill: 'Iron Man' }
}

var tony = introduce();
// 유니온이라 안됨
console.log(tony.skill);

// 귀찮고 가독성이 떨어지는 방식
if((tony as Developer).skill) {
  var skill = (tony as Developer).skill;
}else if((tony as Person).age) {
  var age = (tony as Person).age;
}

// 타입 가드 정의
function isDeveloper(target: Developer | Person): target is Developer {
  return (target as Developer).skill !== undefined;
}

// 타입 가드 사용
if(isDeveloper(tony)) {
  console.log(tony.skill);
}else {
  console.log(tony.age);
}