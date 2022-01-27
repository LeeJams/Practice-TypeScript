// function logText(text) {
//   console.log(text);
//   return text;
// }
// logText(10);
// logText('하위');
// logText(true);

// function logText(text: string) {
//   text.split('');
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// 위 코드의 문제점은 중복인 코드를 타입만 다르게 함

// function logText(text: string | number) {
//   console.log(text);
//   // text는 타입이 string | number 으로 정확한 타입이 제공되지 않는다.
//   return text;
// }

// const a = logText('a'); // 문자를 넘기고 문자를 리턴 받았지만 여전히 타입이 정확하지 않는다.

function logText<T>(text: T): T {
  console.log(text);
  return text;
}
const a = logText<string>('a').length;
const b = logText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
interface Dropdown<T> {
  value: T;
  selected: boolean;
}

// 인터페이스 안에 T 제네릭이 있으므로 제네릭을 정의해줘야함.
const objNum: Dropdown<number> = { value: 10, selected: true };
const objStr: Dropdown<string> = { value: 'str', selected: true };

// 제네릭 타입 제한
function logTextLength<T>(text: T[]): T[] {
  text.length
  return text;
}
logTextLength(['hi', 123]);

// 타입 제한 2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
  text.length;
  return text
}
logTextLength2('a'); // string - length를 제공하기 때문에 오류가 나지 않음
logTextLength2(10);
logTextLength2({ length: 20 }); // length를 정의 하기 때문에 오류가 나지 않음
// 인터페이스 extends로 속성을 정의해 두면 그 속성을 사용할 수 있는 타입일 경우 오류가 나지 않고 사용 가능.

// 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// 인터페이스에 있는 키의 이름 값중 하나만 입력 가능..
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}
// getShoppingItemOption(10);
// getShoppingItemOption('aaa');
getShoppingItemOption("price")