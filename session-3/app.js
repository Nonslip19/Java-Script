// var a = 10;
// var b = 2;
// var c = 3;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a/c);

// console.log(a%b);
// console.log(a%c);
// console.log(a**c);

// console.log(a/b);

// a = --b  
// console.log({a});
// console.log({b}); 

// a = b-- 
// console.log({a});
// console.log({b});

// a = ++b 
// a = b++
// console.log({a});
// console.log({b});

// var b = 10;
// a = -b  // eksi işareti ile b sayısının eksi karşıığını a' ya atanır.
// console.log({a}, {b}); //10 -10


// var a = 10;
// var b = "2";

// c = a + b;
// console.log(c, typeof c); //102 string

// d = +c; //+ string olan c yi number olarak değiştirir.
// console.log(d, typeof d); //102 number

////toplama yaparken string çıkarken bölme işleminde type string çıkıyor.

//
/////not: sitring ve numberi sadece toplarken type i string olur ve iki değişkene işlem uygulamaz sadece birleştirir yukarıdaki örnek gibi. Fakat diğer işlemlerde string girdiğyide number olarak görüp işleme tabi tutar number type olarak çıktı verir.

// console.log(015+025); //34 >> 5+8 = 13 -- 5+16=21 başında sıfır olunca javascript 2 lik sayı sistemi şeklinde algılıyor sayıları.
// console.log(15+025); //36 >> 15 + 21
// console.log(015+25); //38 >> 13 + 25
// console.log(15+25); //40
// 0, 1, 2, 3, 4, 5, 6, 7 Octal sayı sistemi
// console.log(017+085); //100 >> 15 + 85  Burada 085 = 85 tir. Çünkü 2 lik sayı sistemi 0 dan 7 ye kadardır. Başında 0 bile olsa 8 rakamı kullanıldığı için javascript bunu normal 10 luk sayı sisteminde algılar ve 085 = 85 olur. 

// console.log(9 < 8); //false
// console.log(9 < 8 < 7); //true önce 9<8 i false olarak algılar. false<7 ise true döner. çünkü false un rakamsal değeri 0 olarak algılanır.
// console.log(false < 7); //true
// console.log(false > 7); //false

// console.log(null + 3); //3

/* console.log('false equals false, correct? ', false == false);
console.log('Boolean(0) equals FALSE, correct? ', Boolean(0) == false);
console.log('0 equals false, correct? ', 0 == false);
console.log('Boolean("0") equals TRUE, correct? ', Boolean('0') == true);
console.log('0' == false); */ // DİKKAT:sıfırı tek başna açıkta parantez içinde yazardak yine nunu false olarak algılar. yukarıda boolean("0") olarak yazılınca true döndürmüştü.

// console.log('\n*** null boolean operations ***');
// console.log('Boolean(null) equals to', Boolean(null)); //false
// console.log('null == false equals to', null == false); //false
// console.log('null == true equals to', null == true); //false
// console.log('null == null equals to', null == null); //true
// console.log('typeof null equals to', typeof null);  //object
// console.log('0 == null equals to', 0 == null); // false
// console.log('Boolean(null) == Boolean(0)', Boolean(null) == Boolean(0)); //true
 
// console.log('\n*** undefined boolean operations ***');
// console.log('Boolean(undefined) equals', Boolean(undefined)); //false
// console.log('undefined == false correct?', undefined == false); //false
// console.log('undefined == true correct?', undefined == true); //false
// console.log('0 == undefined correct?', 0 == undefined); //false
// console.log('null == undefined correct?', null == undefined); //true
// console.log('null === undefined correct?', null === undefined); //false

// console.log('\n*** NaN operations ***'); //NaN(not a number)
// console.log(NaN == NaN); //false
// console.log(NaN === NaN); //false
// console.log(typeof NaN); //number
// ! use global isNaN() function to overcome this

/* var a;
while (isNaN(a)){
    a = prompt("Enter a Number")
    a = Number(a)
	console.log(a, typeof a)
} */

// console.log(false && true); //false
// console.log( 2 && 0); //0 falsy değer varsa and(&&) operatörü bize falsy değeri verir.
// console.log(0 && 3); //0
// console.log(3 && 2); //2  / iki değerde truty ise ikinci değeri verir.
// console.log(2 && 3 && 4 ); //4

// OR (Veya)

// console.log((8>2) || 3) //true
// console.log(0 || 3) //true

//Not(!)

// console.log(!true);
// console.log(!false);
// console.log(!5);
// console.log(!0);


//Nullish(??)
//NOT: ilk değer null ya da undefined ise direk ikinci çıktıyı verir. Null değilse ilk değeri verir. 
// var n;
// console.log(n); //undefined
// console.log(null ?? true); //true
// console.log((8>9) ?? 0); //false
// console.log(n ?? 100); //100
// console.log(100 ?? n); //100