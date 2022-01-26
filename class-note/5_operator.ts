function logMessage(value: string | number) {
    if(typeof value === 'string')
      value.split('');
    else
      value.toString();

    return value;
}

logMessage('bye');
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

function askSomeoneUnion(someone: Developer | Person) {
  // 유니온 타입을 사용할 경우 공통적 (보장된) 타입만 사용 할 수 있다.
  someone.name
  // someone.age error
}

askSomeoneUnion({name: '디벨로퍼', skill: '웹 개발'});
askSomeoneUnion({name: '사람', age: 10});

// 인터섹션 타입 Developer / Person 두개의 속성을 다 포함한다는 가정.
function askSomeoneIntersection(someone: Developer & Person) {
  someone.name
  someone.age
}

askSomeoneIntersection({name: '디벨로퍼', skill: '웹 개발', age: 30});
// askSomeoneIntersection({name: '사람', age: 10}); error

var seho: string & number & boolean;