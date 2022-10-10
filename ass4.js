let obj1 = {
    length : 12,
    breadth :14,
    showArea1:showArea
}

let obj2 ={
    length :14,
    breadth:14,
    showArea2:showArea
}
function showArea(){
    return this.length*this.breadth;
}

console.log(obj2.showArea2())