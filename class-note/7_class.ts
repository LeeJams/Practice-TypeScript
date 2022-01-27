class Person {
  // 타입스크립트에서 클레스 문법을 쓰기 위해서는 위에서 미리 정의를 해야한다.
  // 타입스크립트에서는 private, public 같은 정의를 해줄 수 있다.
  private name: string;
  public age: number;
  readonly log: string;
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}