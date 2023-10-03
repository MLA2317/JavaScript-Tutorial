// Promise - bu biron bir ish qilish yoki qilmaslik uchun
// resolve - qachonki promise natija qaytarilsa resolve qiymat berilsa,
// reject - qachonki error qaytaradi natijada reject murojat qilinsa

const promise = new Promise((resolve, reject) => {
    const number = Math.round(Math.random())
    if (!number){
      reject(new Error("Xatolik"));
    } else{
      console.log(number)
    }

    // resolve('OK')
    //reject(new Error("Xatolik"))
});
promise
  .then(data => {
     console.log(data);
})
  .catch(error => {
     console.log(error);
})


