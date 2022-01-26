// 숫자형 (초기화를 하지 않을 경우 기본적으로 숫자형이 된다.)
enum Shoes {
  Nike,
  Adidas,
  Puma
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 0

enum ShoesStr {
  Nike = '나이키',
  Adidas = '아이다스',
}

var myShoesStr = ShoesStr.Nike;
console.log(myShoesStr); // 나이키