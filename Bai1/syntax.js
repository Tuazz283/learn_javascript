let button = document.querySelector("button");
button.onclick = function () {
  alert("Trịnh Đăng Tuấn");
};

var a = 2;
var b = 3;

// let c = a + b;
// console.log(c);

// let c = a ** b;
// console.log(c);

let d = 20;

// let f = d-- + ++d - d--;
//20 + 20 - 20
// console.log(f);

let g = d++ - --d + ++d;
// 20 - 20 + 21 = 21
// console.log(g);
var h = d++ - d-- + --d * 3;
// 20 - 21 + 19 * 3 = 56
// console.log(h);

// function Sum(a, b) {
//   return a + b;
// }

// console.log(Sum(5, 6));

let obj = {
  name: "Trịnh Đăng Tuấn",
  age: 22,
  homeTown: "Thị Trấn Quán Lào - Yên Định - Thanh Hóa",
};

// console.log(typeof obj);

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.homeTown);

// let arr = ["Trịnh", "Đăng", "Tuấn"];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

let str = "Trịnh Đăng Tuấn";
// console.log(str.length);
// console.log(str.indexOf("Đăng", 7));
// console.log(str.slice(0, 5));
// console.log(str.replace("Trịnh", "Nguyễn"));
// console.log(str.charAt(1));
// console.log(str.split(",", 0));

const name = "Trịnh Đăng Tuấn";
const j = 6;
// console.log(isNaN(name));
// console.log(isNaN(j));
// console.log(typeof j.toString());

const u = 34.567891;

// console.log(u.toFixed(2));

const arr1 = ["Xin", "chào", "bạn"];

// console.log(arr1.toString());

// console.log(arr1.join("- "));

// console.log(arr1.pop());
// console.log(arr1);
// console.log(arr1.shift());
// console.log(arr1);
// console.log(arr1.push("mình", "tên", "là", "Trịnh", "Đăng", "Tuấn"));
// console.log(arr1);

console.log(arr1.unshift("Hello"));
console.log(arr1);
