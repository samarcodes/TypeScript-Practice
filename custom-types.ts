//inline annotation
let drawPoint = (point: {x: number, y: number}) => {
    // ...
}
drawPoint({
    x: 10,
    y: 20
})

//interfaces
interface Point {
    x: number,
    y: number
}
let drawPointI = (point: Point) => {
    // ...
}
drawPointI({
    x: 11,
    y: 21
})
//interface declaration and drwaPoint functions are highle related and hence should be binded in a single entity