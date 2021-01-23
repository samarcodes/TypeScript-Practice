var num1 = 10; //nearest function scope
let num2 = 20; //nearest block scope

function test1() {
    for(var i=0;i<5;i++) {
        console.log(`i: ${i}`);
    }
    console.log(`inside test1 i: ${i}`); //will print 5 coz 'i' will be of function scope
}
test1();

function test2() {
    for(let i=0;i<5;i++) {
        console.log(`i: ${i}`);
    }
    console.log(`inside test2 i: ${i}`); //error coz 'i' will be available only in for block
}
test2();