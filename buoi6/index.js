console.log("Chao");
let a =5;
let b = "Hello";//String
console.log(a);
console.log(b);

let c;
console.log(c);
let d = true;
console.log(d);

function hello(){
    console.log("Hello world");
}
hello();

//Mảng
let person=["Na","Pa","Tuyet","Thu"];
console.log(person);

//object
let color ={
    name: "Nanh",
    age: 20,
}
console.log(color.name);
//let const
let h = 5;//không đổi được
console.log(h);
h=3;
console.log(typeof h);//Kiểm tra kiểu dữ liệu
console.log(typeof color);
console.log(typeof person);
//Điều kiện
let age=13;
if (age >=18){
    console.log("Đủ tuổi thi bằng lái");
}
else{
    console.log("Không đủ tuổi thi bằng lái");
}

//Vòng lặp
for(let i = 0; i<5; i++){
    console.log(i);
}
