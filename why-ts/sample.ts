function add(a: number, b: number): number {
  return a + b;
}

// add(10, '20'); // Argument of type 'string' is not assignable to parameter of type 'number'
let result = add(10, 20); // 30
result.toString();