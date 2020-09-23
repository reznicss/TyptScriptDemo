//Boolean
let isDone: boolean = false;

//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// let big: bigint = 100n;

//String
let color: string = `blue`;
color = `red`;
let fullName: string = `Poppy`;
let age: number = 3;
let sentence: string = `My Dog's Name is ${fullName}, His Age is ${age} years old   `;
console.log(sentence);

//Array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//Tuple
let x: [string, number];
x = [`hello`, 16];
console.log(x[0].substring(1));

//Enum
enum Color {
  Red = 1,
  Green,
  Blue,
}
let colorName: string = Color[2];
console.log(colorName);

//Unknow
let notSure: unknown = `poppy`;
console.log(notSure);
notSure = false;
console.log(notSure);

//Any
