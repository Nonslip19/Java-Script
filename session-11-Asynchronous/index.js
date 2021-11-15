// *=======================
// *        Promise
// *=======================

// const myPromise = new Promise((resolve, reject) => {
//   /* --- */
//   // resolve('task completed');
//   reject(new Error('Task failed'));
// });

// myPromise.then(result => console.log(result)).catch(err => console.log(err));

// const myPromise2 = new Promise((resolve, reject) => {
//   console.log('myPromise2 started');
//   /* ---- */
//   const arr = [1, 5, 8, 3, 6];
//   let condition = !Math.floor(Math.random() * 2);
//   if (condition) {
//     resolve(arr);
//   } else {
//     reject(new Error('failed'));
//   }
// });

// myPromise2.then(result => console.log(result)).catch(err => console.log(err));

// * 1. suyun kaynaması -> kettle -> çalışıyor / arızalı
//* 2. çay var mı
// * 3 bekle demlenme

function cayDemle() {
    suyuKaynat()
      .then(status1 => {
        console.log(status1);
        return demEkle();
      })
      .then(status2 => {
        console.log(status2);
        wait(1000);
        return 'Cay hazir afiyet olsun';
      })
      .then(status3 => {
        console.log(status3);
      })
      .catch(err => console.log(err));
    
  }
  cayDemle();
  
  function suyuKaynat() {
    return new Promise((resolve, reject) => {
      const suKaynadi = !Math.floor(Math.random() * 2);
      if (suKaynadi) {
        wait(1000);
        resolve('su kaynadi');
      } else {
        reject('Kettle arizali');
      }
    });
  }
  
  function demEkle() {
    return new Promise((resolve, reject) => {
      const cayMevcut = !Math.floor(Math.random() * 2);
      if (cayMevcut) {
        wait(1000);
        resolve('cay eklendi');
      } else {
        reject('cay bitmiş');
      }
    });
  }