// var numbers = [1, 2, 3, 4, 5, 6];
// var kare = numbers.map((number) => number * number);
// console.log(kare);

// var filtre = numbers.filter((number) => !(number % 2));
// console.log(filtre);

// var topla = numbers.reduce((x, y) => x - y);
// console.log(topla);

// function withVar() {
//   const b = () => a;
//   var a = 24;
//   return b;
// }

// function withLet() {
//   const b = () => a;
//   let a = 24;
//   return b;
// }

// function changingValue() {
//   let a = 24;
//   const b = () => a;
//   a = 42;
//   return b;
// }

// console.log(withVar()()); // ??
// console.log(withLet()()); // ??
// console.log(changingValue()()); // ??

// var obj = { w: 1, e: 2, r: 3 };
// for (let a in obj) {
//   console.log(a); //w e r
// }

// var numbers = [1, 2, 3, 4, 2, 5, 6];
// for (b of numbers) {
//   console.log(b);
// }

// const meyve = ["Elma", "Muz", "Kiraz"];

// for (let i in meyve) {
//   console.log(i, ":", meyve[i]);
// }



// var box = document.querySelectorAll(".kutu");
// for (let i = 0; i < box.length; i++) {
//   setTimeout(function(){box[i].style.color = "blue"}, i*3000); //setTimeOut un etkin çalışması için for döngüsünün içerisinde bekleme süresiyle i' yi çarpmamız gerekir 
// }

// var myVar = setInterval(myTimer, 1000);

// function myTimer() {
//   var d = new Date();
//   var t = d.toLocaleTimeString();
//   document.getElementById("saat").innerHTML = t;
// }


// console.log(box);

// var a = "     mehmet     fgdsg    ";

// console.log(a.replace("m", "q"));


// var Uye = function(){
//   this.ad;
//   this.soyad;


//   this.adSoyad = function(){
//     return this.ad + " " + this.soyad;
//   }
// }

// var uye1 = new Uye();
// var uye2 = new Uye();

// uye1.ad = "mehmet";
// uye1.soyad = "kaymaz";

// console.log(uye1.adSoyad());

// console.log(Uye.prototype);

// var x = null
// console.log(typeof x);

var obj;
console.log(obj);

function logThis(){
  console.log(this);
}
logThis();

const x = 6%2;
const y = x ? "one": "two";
console.log(y);