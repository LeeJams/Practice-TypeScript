// 타입 추론 기본 1
var a = 10;

function getB(b = 10) {
  var c = 'hi';
  return b + c;
}

// 타입 추론 기본 2
interface Dropdown<T> {
  value: T;
  title: string;
}

var shoppingItem: Dropdown<string> = {
  value: "abc",
  title: "def"
}

//타입 추론 기본 3
interface DetailedDropdown<K> extends Dropdown<K>{
  description: string;
  tag: K
}

var detailedItem: DetailedDropdown<number> = {
  description: "",
  tag: 0,
  value: 0,
  title: ""
}