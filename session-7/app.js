/* var s = "Lorem Ipsum is simply dummy text of the printing and 'printing' typesetting industry."; */
//Split()
// console.log(s.split(" ")); // kelime kelime
// console.log(s.split("")); // eleman elaman
// console.log(s.split("e")); // girilen elemanı stringden alır ve herbiri için array elemanı yapar
// console.log(s.split()); //stringi array e çevirir.

// https://www.youtube.com/watch?v=b7vfp5G4brE
// https://youtu.be/b7vfp5G4brE

// var youtube = "https://www.youtube.com/watch?v=b7vfp5G4brE"
// var arr = youtube.split('=')
// console.log(arr[1]);
// var shortLink = `https://youtu.be/${arr[1]}`
// console.log(shortLink);

//substr()
/* console.log(s.substr(22,10));
console.log(s.length);
console.log(s.substr(80,10)); */


//substring
// console.log(s.substring(22,32))
// console.log(s.substring(32,22))
// console.log(s.substring(32))
/* console.log(s.substring(22,-32)) //negatif index kullanamayız
console.log(s.substring(22,-5)) //negatif index kullanamayız
console.log(s.substring(22,-42)) //negatif index kullanamayız */
// console.log(s.substring(0,22))

/* 
var check = s.substr(22, 10) === s.substring(22,32)
console.log(check);
 */

//toLowerCase() toUpperCase()

/* var pangram = "pijamalı hasta yağız şoföre çabucak güvendi"
// console.log(pangram.toUpperCase());
// console.log(pangram.toLocaleUpperCase());
var Pangram = pangram.toLocaleUpperCase();
console.log(Pangram.toLowerCase());
console.log(Pangram.toLocaleLowerCase('tr')); */

/* var test = prompt('write anything').toLowerCase()

console.log(test); */

/* const car = ['Opel', 'Audi', 'BMW', 2, ['Hello','World']];
// console.log(car);
// console.log(car[4][0]);
const car2 = new Array ('Opel', 'Audi', 'BMW', 2, ['Hello','World']); */

// console.log(car2);

// const x = new Array (2,10)
// const x = new Array (10)
// console.log(x);

/* const car = ['Opel', 'Audi', 'BMW', 2, ['Hello','World']];
car[4] = 'Mercedes'
// console.log(car);
console.log(typeof car);
console.log(car instanceof Array);
console.log(Array.isArray(car));
 */

//length

/* const cars = ['Opel', 'Audi', 'BMW'];
// console.log(cars);
const cars3 = ['Opel', 'Audi', 'BMW', 2, ['Hello','World']];
//concat()
const cars2 = ['Mercedes', 'Renault']
console.log(cars2.concat(cars,'cars3'));
console.log(''+cars2);
 */

//sort()
/* const daltones = ['Joe','Jack','William','Avarel']
// daltones.sort()
// console.log(daltones)
daltones.reverse()
console.log(daltones) */

/* const points = [40, 100, 1, 5, 25, 10];
console.log(points.sort());
console.log(points.sort(function(a, b){return a - b})); */

/* var alphabet = 'abcçdefgğhıijklmnoöprsştuüvyz0123456789'
function ascii(text) {
    for(let i=0;i < text.length;i++ ){
    console.log(text[i],text.charCodeAt(i))
}
}
// ascii(alphabet.toLocaleUpperCase('tr-TR'))
ascii(alphabet.toLocaleUpperCase()) */ 

var a = ["dog", "cat", "hen"];
a[100] = "fox";
console.log(a);
 