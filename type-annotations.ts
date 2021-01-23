let a = 5;
//a = 'samar' //can't do this in TS coz a is initialised as number and can store number only

//type annotations in TS
let num: number;
let str: string;
let boo: boolean;
let foo: any;
let arr: number[] = [1, 2, 3];

//enum in TS
enum color {red = 0, green = 1, blue = 2};
let backgroundColor = color.red;

//type assertion
let message; //type is any
message = 'abc';
let endsWithC = (<string>message).endsWith('c');
let alternateWay = (message as string).endsWith('c');