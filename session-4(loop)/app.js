// let score = 61;
// if (score>=80){
//     console.log(`tebrikler notunuz ${score} çok iyi bir öğrencisiniz.`);
// }else if (score>=50) {
//     console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz.`)
// }else{
//     console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`)
// }

// Ternary If else

/* let score = 60;

score >= 50 ? console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz.`) :
console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`) */

/* let username = "Mehmet";
username ? console.log(`Merhaba ${username}`) : console.log(`please Login`); */ 

/* let score = prompt(' Sınav notunu gir : ')
score >= 80 ? console.log(`Tebrikler notunuz ${score}, çok iyi bir öğrencisiniz`) : 
   (score >= 50 ? console.log(`Tebrikler notunuz ${score}, sınavdan geçtiniz`): console.log(`Üzgünüm notunuz ${score}, sınavdan kaldınız`)) */

  /*  let userName = 'sait';
   userName && console.log(`Merhaba ${userName}`); */

   // Switch case Yapısı

/*    var text;
   var fruits = "orange";

   switch(fruits){
       case "banana":
           text = "banana is good";
           break;
        case "orange":
            text= "ı am not fan of orange";
            break;
        case "apple":
            text= "how you like them apples?";
            break;
        default:
            text= ` have never heard of ${fruits} ` ;
   } */

/* var year = 2024;
var month = 5;
var dayCount;
switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        dayCount = 31;
        break;
    case 4:
    case 6:
    case 9:
    case 11:
        dayCount = 30;
        break;
    case 2:
        if (((year % 4 == 0) && !(year % 100 == 0))
            || (year % 400 == 0))
            dayCount = 29;
        else
            dayCount = 28;
        break;
    default:
        dayCount = -1; // invalid month
}
console.log(dayCount); // 29 */

/* let dayUser = prompt("Bir gün giriniz: ");
            let day = dayUser.toLocaleLowerCase();   
            let message;
            switch(day) {  
                case "monday":   
                case "wednesday":
                case "thursday":
                case "saturday":
                    message = "There is in-class today";
                break;
                case "tuesday":
                case "friday":
                    message = "There is TW today";
                break;
                case "sunday":
                    message = "Today is holiday";
                break;
                default:
                    message = "Invalid day";
            }
            document.write(message); */


/* let password = 'password'
if (password.length >=5){
    console.log('that password is strong');
}
else {
    console.log('password is not long enough');
} */

/* let password = 'pfdsfgdsg@'
if(password.length >=5 && password.includes('@') ){
    console.log('that password is strong');
}else {
    console.log('password is not long enough');
} */
  
// WHİLE

/* let i = 0;
let sum = 0;

while (i < 11) {
    sum += i;
    console.log(i);
    if (i == 8) break;
    i++
}   
console.log(sum); */


// DO WHİLE

/* let i = 5;
let sum = 0

do {
    sum += i;
    i++;
} while (i < 5);
console.log(sum); */  

// FOR

/* let text = 'clarusway';

for (let i =0; i < text.length; i++){
    console.log(text[i]);
} */

/* let sum = 0;
for (let i = 0; i<=10; i++){
    if (i % 2 == 0){
        //sum += i; 
        console.log(i);
    }   
} */

/* if (password.length >=5){
    console.log('that password is strong');
} */


for(let i = 0; i <100 ; i++){
    if(i%15 == 0){
      console.log("FizzBuzz")
    }
    else if(i%5 == 0){
      console.log("Buzz")
    }
    else if (i%3 == 0){
      console.log("Fizz")
    }
  }

for (let i = 0; i<=100; i++){
    if(i/1 && )
}