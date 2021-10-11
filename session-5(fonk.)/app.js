/* for (let i = 0; i <= 100; i++) {
    if (i % 5 == 0) {
        continue
    } else {
        console.log(i);
    }
}

for (let i=0; i<=20; i++ ){
    if(i%5==0){
        continue;
    }else{
        console.log(i);
    }
} */

//[1-6] arasında   
// sayı 3 defa 3 çıkarsa oyun bitecek

/* let count = 0;

while (true) {
  let x = Math.floor(Math.random() * 6);
    if (x == 6) {
      console.log("kazandı")
      break
    } else if (x == 3) {
      count += 1
    } else if (count == 3) {
      console.log("3'ü tamamladın ve çıkış yaptın")
      break
    }
  } */

  /* function square(num){
      num = num * num;
      return num;
  }
  let myNum = 4;

  console.log(square(myNum));
  console.log(myNum); */

  const students = ["Sait", "Shelby", "Gül", "ozan"];
 /*  console.log(`Welcome ${students[0]}`)
  console.log(`Welcome ${students[1]}`)
  console.log(`Welcome ${students[2]}`)
  console.log(`Welcome ${students[3]}`) */

  function greetAll(who){
      for (let i = 0; i < who.length; i++){
          greet(who[i]);
      }
  }
  greetAll(students);