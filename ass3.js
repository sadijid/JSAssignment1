const pi = 3.1415
let obj = {
    radius : 22,
    height: 45,

    showArea : function(){
    return obj.radius*obj.height*pi**2;
}
}
console.log(obj.showArea())