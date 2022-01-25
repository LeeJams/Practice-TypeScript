function sum(a: number, b: number): number {
  return a + b;
}
sum(10, 100);

// 옵셔널 파라미터 ( ? )
function log(a: string, b?: string) {
  console.log(a);
  console.log(b);
}

log('hello world');