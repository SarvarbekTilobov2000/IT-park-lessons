"use strict"
// document.write("hello world");
// document.write("developer")
// const db = ('<h1>senior developer</h1>')
// console.log(db);
//  document.getElementById("text").innerHTML = "New text";
// const db =  5 + 10
// console.log(db)

//console.log(
// 13 % 3
// Math.floor(13/3)
//)

// var ism = "Abbosbek"; 
//var ism = "Jo'rabek" // qayta elon qilish
// ism='New name'  //Qayta qiymatlash
// console.log(ism);

// let ism = "Samandar";
// //let ism ="new name"//qayta qiymatlab bo'lmay di
// ism='New name'// let bilan ishlatilganda qayta qiymatlash 
// console.log(ism);

// const ism = "Muhammadi";  
// //const ism='name2'//const ishlaganda ham qayta elon qilib bolmaydi !!!
// // ism ='name2'// const bilan elon qilinganda qayta qiymatlab bolmaydi !!!
// console.log(ism);

//document.getElementById("text").innerHTML = "<h1>start</h1>";
// document.getElementById("text").innerHTML = "Sarvarbek Tilobov";

// let rost = true;
// let yolgon = false;
// console.log(rost)
// console.log(yolgon)

// let cros = null;
// console.log(cros)

// let son=''
// console.log(son);

// let acer;
// console.log(acer)

// let gers = 15555555555555684635168468468476851;
// console.log(gers)

// const also = BigInt(900719925472222222222222222222222222220991);
// console.log(also);

// let id = Symbol('id');
// console.log(id);

// let a = 10
// let b = "10";
// a = a === b
// console.log(!a)

// let massa = +prompt("kilogramni kiriting");
// let kg = massa / 1000;
// console.log(kg + " tonna ga teng")
// let minut = +prompt("minutni kiritin");
// let natija = minut / 60;
// console.log(natija)

// let a = 5,
//     b = 10,
//     c = 15;
// console.log(a)    //5
// a = b;
// console.log(a)    //10
// a += b;
// console.log(a)    //20
// a -= b;
// console.log(b)    //10
// c *= b;
// console.log(c)    //150
// c /= 5;
// console.log(c)    //30
// b %= 2;
// console.log(b)    //0

// TYPE CONVERSION   bu-- - js da saqlanayotgan maluot turini  1 korim - nish dan 2 = - kornishga otishi
//  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// const yosh = "23";
// const x = Number("red");
// console.log(typeof x);
// console.log(x + " teng lik")//ozgaruvchiga string malumot qoshib yozildi natija NaN va string
// console.log(Number) // type  ozgartirilishi       x  ozgaruvchi  harflardan iboratligi uchun Nan chiqaradi   <<<<< not a number
// STRING TURDAGI  MALUMOT LARGA  ARIFMETIK APERATORLARNI  ISHLATIB BOLMAYDI
// console.log(Boolean(x>=yosh))// boolen korinishda  ozgardi
// console.log(Boolean(x >= yosh))
// console.log(Symbol(x + yosh));// data symbol korinishida

// const yosh = "20"
// console.log(yosh + 10) //ozgaruvchiga  son qoshildi va u string korinhida bolgani uchun qiymat va  2010 korinishi da  ifodalandi
// console.log(Number(yosh))//typeni  ozgartirish
// console.log(Number(yosh) + 10)// type ozgardi va  son qoshildi
// console.log(Number(yosh) - 50)//type ozgardi va  son ayirib tashlandi
// console.log(Number(yosh) * 5) //type  ozgardi  va sanga kopaytirildi
// console.log(Number(yosh) / 2)//type  ozgartirdim  va  son ga bolin di
// console.log(Number(yosh) % 3)//type ozgardi va qoldiqli bolindi

// const yil = 2021;
// console.log(yil);
// console.log(String(yil))//number  typedan string korinishi ga otkazildi
// console.log("men" + 2008 + "yilda tavallud topganman") //strin malumot bor bolgani uchin  son ham  string koriishidagi  malumot turiga aylandi

// let a = 5, b = 10;
// console.log(a++)//qiymatni bittaga oshirish {post-increment}
// console.log(a) //bu qatorda bittaga oshgani  korinadi
// console.log(++a) //{pre-increment}  bunda shu elon ning ozida bittaga oshirilib chiqadi
// console.log(b--) //{post-increment }  qiymat bttaga kamayadi
// console.log(b)// natija   shu elon da chiqadi  chunki post-increment ishlatilmoqda
// console.log(--b)
// // ++belgisi o'zgaruvchi oldidan qoyilssa osha elon qilinganning o'zidayoq natija ko'rinadi
// let bg = 50;
// console.log(++bg);

// //COMPARISON  yani  solishtirish  aperatorlari
// //>>>>>>>>>>>>>>>>>>>>>>>
// let a = 5, b = 10, c = "5";
// const z = a;
// console.log(a == c) //bu holatda ozgaruvchilarni  qiymatini tekshirib  true or false qaytaradi   j=true
// console.log(a === c)//bu holatda esa  type  bilan tekshirib  natija qaytaradi     j-false
// console.log(a == z)//bu holda qiymatlar ham  type ham br xil shuning uchun  j=true
// console.log(a === z)// j=true
// console.log(a != b) //teng emasliigini   soralmoqda miz  agar  teng bolgan da  false  qaytargan bolardi  j=true
// console.log(a != z)// qiymatlar  teng emas  j=false
// console.log(a > b)//a katta b dan    j=false
// console.log(a < b)//a kichik b dan    j=true
// console.log(a >= b)// bunda  a katta yoki teng   b dan  j=false
// console.log(a >= b)//a kichik yoki teng  b dan  j=true

// //    TAYINLASH APERATORLARI  { assignmant }
// //   >>>>>>>>>>>>>>>>>>>>>>>>
// // let son = 20;
// // let l = +prompt("Sm ni kiriting");
// // let uzunligi = l / 100;
// // console.log("To'liq metr soni: " + uzunligi + " metr");
// // console.log(`To'liq metr soni ${l} metr ga teng `);
// // if (name > 20) {
// //     console.log("Xa");
// // } else {
// //     console.log("yoq");
// // }
// let name = prompt("foydalanuvchi ismi")
// let javob = name + " foydalanuvchi familiyasini kiriting"
// let lok = javob + "yashash joyini kiriting"
// let tel = lok + "telefon numberni kiriting"
// let fam = prompt(javob);
// console.log(String(fam))
// console.log(fam)

// //    TEZLIK XISOBLOVCHI >>>>>>>>>>>>>
// let x = +prompt("tezlikni kititing");
// if (x >= 60) {
//     console.log("siz radarga tushdingiz");
// }
// else if(x<=59){
//     console.log("siz normal tezlikdasiz");
// }
// else {
//     console.log("siz radarga tushmadingiz");
// }


// // IF ELSE  BO'YICHA amaliy dastur                                       ➡️
// const htmlPassed = false;
// const cssPassed = true;
// let message = '';
// if (htmlPassed && cssPassed) {
//     message = 'Siz Bootstrap kursini boshlashingiz mumkin!';
// } else if (htmlPassed || cssPassed) {
//     message = 'Iltimos ikkinchi kursni ham tugating!';
// } else {
//     message = 'Iltimos birinchi ikkala kursni tugatib chiqing!';
// }
// console.log(message);

// //IF ELsE  bo'yicha amaliy dastur
// //>>>>>>>>>>>>>>>>>>>>>>>>>
// var yomgir = false;
// var soyabon = true;
// if (yomgir) {
//     console.log("soyabon ol");
// } else {
//     console.log("soyabon shart emas");
// }

// //IF ELSE AMALIY ISH
// const son = +prompt("sonni kiriting");
// if (son > 0) {
//     console.log("berilgan son musbat");
// }
// else {
//     console.log("berilgan son manfiy");
// }
// console.log("keyingi qator");

// //IF ELSE AMALIY ISH
// let tovar = +prompt("yaroqlilik muddatini kiriting");
// if (tovar < 72) {
//     console.log("maxsulot istemolga yaroqli");
// }
// else {
//     console.log("maxsulot istemolga yaroqsiz");
// }

// // MANFIY  OR MUSBAT amaliy is >>>>>>>>IF ELSE
// const s = +prompt("javobingizni kiriting");
// if (s > 0) {
//     console.log("kiritilgan noldan katta");
// }
// else if (s == 0) {
//     console.log("kiritilgan son nolga teng");
// }
// else if (s < 0) {
//     console.log("kiritilgan son noldan kichkina");
// }
// else{
//     console.log("not found");
// }

// //IF ELSE  AND ligical operants  amaliy ish>>>>>>>>>>>>
// let energy = +prompt("zaryadnik narxini kiriting");
// if(energy <60000){
//     console.log("Zaryadnik narxi juda arzon 👌");
// }
// else if (61000 <= energy && energy <= 70000) {
//     console.log("zaryadnik narxi normal darajada");
// }
// else if (71000 <= energy && energy <= 80000) {
//     console.log("zaryadnik narxi yuqoriga tomon o'sgan ⬆️");
// }
// else if (81000 <= energy && energy <= 100000) {
//     console.log("zaryadnik narxi juda baland");
// }
// else {
//     console.log("not found");
// }

// let narx = +prompt("narxni kiriting: ")
// if (narx < 20) {
//     console.log("narx juda past");
// }
// else if (20 <= narx && narx <= 40) {
//     console.log("narx normal darajada");
// }
// else if (41 <= narx && narx <= 100) {
//     console.log("narx da tepaga qarab o'sgan ");
// }
// else if (101 <= narx) {
//     console.log("narx juda baland");
// }
// else {
//     console.log("not found");
// }

// //object
// const dasturchi = {
//     ism: "sarvarbek",
//     yosh: 15,
// }
// console.log(dasturchi);
// console.log(dasturchi.yosh);

// //TEMPLATE LITERALS
// let user = "java"
// let user2 = "script"
// let user3 = user + user2;
// console.log(user3);
// // bu usul no professional usul hisoblanadi
// console.log(`dasturlash tili bu ${user}${user2}
//     keyingi qator`);

// //   SVETAFOR STRUKTURASI
// // >>>>>>>>>>>>>>>>>>>>>>>>>>
// let x = prompt("rangni kiriting")
// if (x == "red") {
//     console.log("to'xtab turing");
// }
// else if (x == "yellow") {
//     console.log("harakatga tayorlaning");
// }
// else if (x == "green") {
//     console.log("harakatlaning");
// }
// else {
//     console.log("bu rang hisoblanmaydi");
// }

// //JUFT YOKI TOQ SON LARNI ANIQLOVCHI  AMALIY ISH                                            ➡️
// let a = +prompt("enter the number")
// if (a % 2 == 0) {// bu yerda  kiritilgan data qoldiqli 2 ga bo'linadi  va qoldiq 0 ga teng bolsa juft boladi 
//                                                              //   aks holda toq boladi
//     console.log("son juft");
// }
// else {
//     console.log("son toq");
// }

//  //   >>>>>>>>>>> TERNARY OPERATORS >>>>>>>>>>>>>>>>>>>>>>
//  const age = +prompt("yoshingizni kiriting")
// if (age < 18) {
//     alert("siz voyaga yetmagansiz");
// }
// else if(age>=18){
//     alert("siz voyaga yetgansiz")
// }
// else {
//     alert("not found") //>>>> QUYIDA IF ELSE APERATORLARI Bilan ish bajarilga
// }
// //>>>>>>>> QUYIDA TERNARY OPERATORS BILAN ISH BAJARILGAN va  ternary operator ishda ancha qulay hisoblanadi

// let rang = prompt("Rangni kiriting");
// if (rang == "Yashil") {
//     console.log("Yurish mumkin");
// } else if (rang == "Sariq") {
//     console.log("Diqqat");
// } else if (rang == "Qizil") {
//     console.log("Yurish mumkin emas");
// } else {
//     console.log("Bu rang hisoblanmaydi");
// }

// const res = +prompt("sonni kiriting");//juft  yoki toq son aniqlash➡️
// if (res % 2 == 0) {
//     alert("kiritgan soningiz juft son")
// }
// else {
//     alert("kiritilgan raqam toq son")
// }

// //SXEMA 1                                    
// let x = +prompt("sonni kiriting")
// console.log(Math.floor(x / 10) + " o`nlar xonasi");
// console.log(x % 10 + " birlar xonasi");

// const son = +prompt("sonni kiiting")
// if (10 <= son && son < 100) {
//     console.log(Math.floor(son / 10) + " son onlik");
//     console.log(son % 10 + " birlik xonasi");
// }                                                                                          ➡️
// // else if(son>100){//bu shartni kiritish shart emas chunki if blokda 2xonali sonlar orasida 
// //belgilab berilgan  boshqa sonlarda else blok ishlaydi                                      
// //     console.log("ikki xonali son kiriting");
// // }
// else {
//     console.log('not found');
// }

// //SXEMA 2                                                                ➡️
// let son = +prompt("2 xonali son kiriting")
// if (0 < son && son < 100) {
//     let onlik = Math.floor(son / 10)
//     let birlik = son % 10;
//     console.log(son + " sonida");
//     console.log(`${onlik} o'nliklar xonasi`);
//     console.log(`${birlik} birliklar xonasi`);
//     let uch = "sonlari ko'paytmasi " + onlik * birlik + " ga teng, ";
//     let tor = "sonlari qo'shilganda " + (onlik + birlik) + " ga teng, ";
//     let besh = "sonlari ayirmasi " + (onlik - birlik) + " ga teng, ";
//     let olt = "sonlari bo'linmasi " + onlik / birlik + " ga teng";
//     console.log(uch, tor, besh, olt);
// }
// else {
//     console.log('not found');
// }

// let soniya = +prompt("soniyani kiriting")
// let a = soniya / 60;
// let b = soniya / 3600;
// console.log("kun boshidan beri " + soniya + " sekund");
// console.log(Math.floor(a) + " minut o`tdi");
// console.log(Math.floor(b) + " soat o`tdi");
// //2 chi usuli
// // let soniya = +prompt("soniyani kiriting")
// // let a = Math.floor(soniya / 60);
// // let b = Math.floor(soniya / 3600);
// // console.log(`kun boshidan beri ${soniya} sekund`);
// // console.log(`${a} minut o'tdi`);
// // console.log(`${b} soat o'tdi`);

// const nbm = +prompt("brendni kiriting")
// switch (nbm) {
//     case 10: console.log("tesla"); break
//     case 5: console.log("Stive Jobs"); break
//     default: console.log("not found");
// }

// let hafta = +prompt("nechinchi kun")
// if (hafta === 1) {
//     console.log("dushanba");
// } else if (hafta === 2) {
//     console.log("seshanba");
// } else if (hafta === 3) {
//     console.log("chorshanba");
// } else if (hafta === 4) {
//     console.log("payshanba");
// } else if (hafta === 5) {
//     console.log("juma");
// } else if (hafta === 6) {
//     console.log("shanba");
// } else if (hafta === 7) {
//     console.log("yakshanba");
// } else if (typeof hafta === String) {
//     console.log("bu yerga faqat son kiriting");
// } else {
//     console.log("not found");
// }

let p = prompt("brend");
switch (p) {
    case "Tesla": console.log("Elon Musk"); break
    case "Stiv Jobs": console.log("Apple"); break
    case "Bill Geyts": console.log("Micrasoft"); break
    default: console.log("not found");
}

let respo

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//     let a = +prompt("baholarni kiritish paneli");
// switch (a) {
//     case a == 5: console.log(` ${a} baho`); break
//     case a == 4: console.log(` ${a} baho`); break
//     case a == 3: console.log(` ${a} baho`); break
//     case a == 2: console.log(` ${a} baho`); break
//     case a == 1: console.log(` ${a} baho`); break
//     //  default :console.log("bu kiritilgan son baholash mezonidan tashqari");
// }
// console.log(`${a} baho yaxshi`);

// const a = "stringdata";
// let b = "stringdata";

// a == b ? console.log("xa") : console.log("yoq");

// let a = +prompt("sonni kiriting");
// let b;
// switch (a) {
//     case 50:
// }

// let ball = +prompt("natijani bilish");
// let IELTS = +prompt("IELTS balingiz")
// let usd = +prompt("moliyaviy mablag`ingiz")

// if (ball >= 150 || IELTS >= 7 && usd >= 5000) {
//     console.log("oqishga qabul qilindingiz");
// } else {
//     console.log("oqishga qabul qilinmadingiz");
// }

// // object  >>>>>>>>>>>>>
// var inson = {//obyekt elon qilindi va qiymatlari yozildi
//     ismi: 'sardor',
//     familiyasi: 'tolibov',
//     joyi: 'tafakkur',
//     yoshi: 15,
// }
// console.log(inson);//obyekt elon qilindi
// console.log(inson.yoshi);//obyrkt ichidagi qiymat chaqirib olindi   boshqalari ham shu ko'rinish da elon qilinadi

// For
// javascript tilida >>> FOR loop dan foydalanib malum bir kod bloki ni  bir naecha bor ishga tushurish mumkun
// umumiy ko`rinishi { boshlangichifoda : tekshiruv sharti : tanasi }
// BOSHLANGICH IFODA ---o`zgaruvchilarni elon qilish uchun yoziladi  va bir marta ishga tushadi
// TEKSHIRUV SHARTI berilgan shart tekshirikadi  agar rost bo`lsa berilgan kod blok ishga tushadi  false bo`lsa  for loop tugatiladi
// IFODANI YANGILASH tekshiruv sharti rost bolgan holda, boshlangich ifoda yangilanadi

// let n = 1;
// while (n <= 20) {
//     if (n % 2 == 0) {
//         console.log(n);
//         n++;
//     }
// }
// console.log(a)

// for (acer = 0; acer <= 100; acer++) {
//     // console.log("salom dunyo");
//     console.log(acer);
// }

// let sum = 0

// for (i = 1; i <= 10; i++) {
//     console.log(sum);
//     sum += 10;//sum=sum+i
// }
// console.log('sum: ' + sum);

// BREAK >>>>>>>>>>>>> statement  yordamida berilgan malum bir shart bajarilgan holatda  loop ni to'xtatish imkoniyati mavjud
// br dan  besh gacha bolgan  saonlarni console ga chiqaruvchi  loop

// for (let i = 1; i <= 10; i++) {
//     ///breack condition
//     if (i === 3) { break }
// }
// console.log(i);

// let n = 1;

// do {
//     n++
//     console.log(n);

// } while (n < 10)

// let m = prompt("nomni kiriting");
// switch (m) {
//     case "acer": alert("100"); break
//     case "hp": alert("200"); break
//     case "lenovo": alert("300"); break
//     default: alert("not found")
// }

// function myName() {
//     console.log("sarvarbek");
//     document.body.style.backgroundColor = "#000";
// }

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> ARREY  va errey metodlari
// let mehmonlar = [`sardor`, `sarvar`, `diyor`, `temur`]
// console.log(mehmonlar[1]);//bu yerda  sarvar so'zi consolga chiqadi
// //chunki js da sanoq son 0 dan boshlanadi    bundan korinadiki sardor=0, sarvar=1, diyor=2, temur=3
// mehmonlar[0] = "jorabek"; //bunda arrey soni bn chaqirib olinib  boshqa bir qiymatga tenglandi
// console.log(mehmonlar);
// let numbers = [12, 54, 5, 5185, 123]
// //let result=numbers.length //length bu ichidagi elementlar sonini anglatadi
// console.log(result);
// let result = mehmonlar.indexOf(`diyor`)//bu yerda indexof metodi ishlatilgan va
// bu diyor qiymatini ni arrey ichida joylashivi nechinchi ekanligini  aniqlab beradi
// console.log(result);
// let result = mehmonlar.concat(numbers) //concat metodi  bu yerda biriktirish manosida va ikki arreyni biriktirib yani birga yozib bermoqda
// console.log(result);
// mehmonlar.push('davlatbek') // bu metod tashqaridan element qoshishda ishlatiladi
// console.log(mehmonlar);
// mehmonlar.pop("diyor")//bu metod biror qiymatni olib qo'yishda ishlatiladi
// console.log(mehmonlar);
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//     console.log(mehmonlar);
// console.log(mehmonlar[2]);
// const sd = mehmonlar.length
// console.log(sd);
// var sar = mehmonlar.indexOf("sarvar")
// console.log(sar);
// var ser = mehmonlar.concat(numbers)
// console.log(ser);
// mehmonlar.push("senior");
// console.log(mehmonlar);

// const ism = prompt("Ismingizni kiriting")
// const yosh = prompt(`Hurmatli ${ism} yoshingizni kiriting`)
// const yil = 2023 - yosh;
// const oy = yosh * 12;
// let hafta = (yosh * 12) * 4;//yoki hafta=(yosh*365)\7
// let kun = yosh * 365;
// let soat = yosh * 365 * 24;
// let minut = yosh * 365 * 24 * 60;
// let secund = yosh * 365 * 24 * 3600;
// let result = `Qadrli ${ism} siz ${yil} -yilda tugilgansiz. Siz ${oy} oy,
//  ${(hafta).toFixed(0)} hafta, ${kun} kun, ${soat} soat ${minut} minut va ${secund} sekund yashagansiz👌😁👌`
// alert(result);

// let ism = prompt(`Qidirilayotgan ismni kiriting`)
// let ismlar = [`yodgor`, `sardor`, `firdavs`, `diyor`]
// if (ismlar.includes(ism)) {
//     alert(`Ha ${ism} bor`)
// } else {
//     alert(`Afsuski ${ism} yo'q`)
// }

// let ism = prompt(`Qidirilayotgan ismni kiriting`);
// let ismlar = [`yodgor`, `sardor`, `firdavs`, `diyor`];

// switch (true) {
//     case ismlar.includes(ism):
//         alert(`Ha ${ism} bor`);
//         break;
//     default:
//         alert(`Afsuski ${ism} yo'q`);
// }

// let ism = [`sardor`, `sarvar`, `diyor`]
// for (let i = 0; i < ism.length; i++) {
//     let result = ism[i] + "bek";
//     // console.log(result);
//     alert(result)
// }

// let ism = [`sardor`, `sarvar`, `diyor`]
// let i = 0;
// while (i < ism.length) {
//     let result = ism[i] + 'bek';
//     console.log(result);
//     i++
// }

// let nom = prompt("viloyat nomini kiriting")
// switch (nom) {
//     case "farg'gona": alert("farg'onada 1.5mlrd aholi bor")
//         break
//     case "namangan": alert('namanganda 1 mlrd aholi bor')
//         break
//     case "toshkent": alert("toshkentda 4 mlrd aholi bor")
//         break
//     default:
//         alert(`Kechirasiz ${nom} nomli viloyat mavjud emas`)
// }

// let meyor = 20;
// let a = prompt("parolingini kiriting")
// if (a > meyor) {
//     alert(`Bizda meyor ${meyor} ga teng va siz meyordan ${a - meyor} ta ko'p belgi yozdingiz.`)
// } else {
//     alert(`Bizda meyor ${meyor} ga teng va siz ${meyor - a} ta kam belgi ishlatdingz`)
// }

// const ism = "Anna";
// const names = ["John", "Anna"];
// switch (ism) {
//     case names.find((el) => el == ism):
//         console.log(`Ha ${ism} bor`)
//         break
//     default:
//         console.log("Ism yo'q");
// }

// //function declaration>>>>>>>>>>>
// function asos() {
//     alert('quyidagi funksiya function declaration hisoblanadi')
// } asos()

// //function Expression>>>>>>>>>
// let asos = function () {
//     alert('quyidagi funksiya function Expression hisoblanadi')
// } asos()

// //arrow function>>>>>>>>.
// const asos = () => {
//     alert('quyidagi funksiya Arrow function hisoblanadi')
// } asos()

// const calcArea = function (radius) {
//     const area = 3.14 * radius ** 2
//     console.log(area);
// }  calcArea(21)

// const calcArea = function (radius) {
//     const area = 3.14 * radius ** 2
//     return area
// }   const a = calcArea(21)
// console.log(a);

// const calcArea = function (radius) {
//     return area = 3.14 * radius ** 2
// }  const a = calcArea(21)
// console.log(a);

// ELEMENTLARNI O'ZGARTIRISH>>>>>>>>>>.
// element matnini ozgartirish
// const item = document.getElementbyID(`sarlavha`);
// item.textContent = 'yangi matn';
// document.getElementById('sarlavha');

// const byClassName = document.getElementsByClassName('text');
// const byID = document.getElementById('text');
// const byTAGName = document.getElementsByTagName('div');
// const byNAME = document.getElementsByName('text')

// console.log(``);
// console.log(byID);
// console.log(byTAGName);
// console.log(byNAME);

// //f  lardan foydalanisahda function nomidan keyin qavslar qo'yib ishlatiladi
// // faqatgina  f declarationda o'zidan oldin chaqirib ishlatishning iloji bor
// function decloration() {
//     console.log('function declaration');
// }
// decloration()
// const Expression = function () {
//     console.log("function expression");
// }
// Expression()
// const arrow = () => {
//     console.log('arrow function');
// }
// arrow()

// const age = 24;                                                      //➡️➡️➡️
// if (true) {
//     age = 25
//     console.log("if else ichidagi age", age);
// }
// console.log("tashqi tomondagi age", age);

// let a = 45;                                                        //➡️➡️➡️
// if (true) {
//     a = 50
//     console.log('salom', a);
// }
// console.log(a);

// const ism = function (name, day) {                                    //➡️➡️➡️
//     // console.log(`hayirli kun ${name}`);
//     console.log(`hayirli ${day} ${name}`);
// }
// ism('sarvar', 'kech')

// const calcArea = function (radius) {                                  //➡️➡️➡️
//     const area = 3.14 * radius ** 2;
//     // console.log(area);
//     return area
// }
// const result = calcArea(10)
// console.log(result);

// const sarvar = function (son1, son2) {                   //➡️➡️➡️
//     const result = son1 + son2 * 40
//     return result
// }
// let as = sarvar(20, 100)
// console.log(as)

// const a = function () {                                             //➡️➡️➡️
//     const as = 32 + 38 * 40
//     return as
// }
// const result = a()
// console.log(result);

//             //funcsiyalar hechnarsaga bog'liq bolmagan holda ichlatiladi➡️➡️➡️
// const a = () => `arrow function`
// const b = a();
// console.log(b);
// //metodlar js dagi malum bir data type ga bog'liq ravishda ishlaydi
// const result = b.toUpperCase()
// console.log(result);

// //CALlback function bu  funksiyani argumentiga berilgan funksiya>>>>>>>>>>>>➡️➡️➡️
// const myfunc = (callback) => {
//     const number = 50;
//     callback(number)
// }
// myfunc(function (value) {
//     console.log(value);
// })

// const alfa = (chaqiruv) => {
//     const betta = "hello callback function"              //➡️➡️➡️
//     chaqiruv(betta)
// }
// alfa(function (good) {
//     console.log(good);
// })

// const m = (salom) => {
//     const res = `birnarsalar yozilgan`;                      //➡️➡️➡️
//     salom(res)
// }
// m(function (n) {
//     console.log(n);
// })

// const numberseries = +prompt("nechta serial ho'rdingiz", "")         //➡️➡️➡️
// const seriesDB = {
//     count: numberseries,
//     series: {},
//     actors: [],
//     genres: false,
//     private: false,
// };
// const a = prompt("ohirgi korgan serialingiz"),                           //➡️➡️➡️
//     b = prompt("nechi baho berasiz "),
//     c = prompt("ohirgi korgan serialingiz"),
//     d = prompt("nechi baho berasiz ");
// seriesDB.series[a] = b;
// seriesDB.series[c] = d;
// for (let i = 0; i < 2; i++) {
//     const a = prompt("ohirgi korgan serialingiz"),
//         b = prompt("nechi baho berasiz ");
//     seriesDB.series[a] = b;
// }
// console.log(seriesDB);

// const inRange = (min, max, number) => {                                          //➡️➡️➡️
//     if (number >= min && number <= max) {
//         console.log(`berilgan ${number} ${min} va ${max} orasida joylashgan`);
//     }
//     else {
//         console.log(`berilgan ${number} son ${min} va ${max} orasida emas`);
//     }
// }
// const minRange = 50;
// const maxRange = 100;
// const givenNumber = 40;
// inRange(minRange, maxRange, givenNumber)

// const simpleCalaulator = (num1, num2, oper) => {         //calculator➡️➡️➡️
//     switch (oper) {
//         case "add": console.log(`yig'indisi :${num1 + num2}`)
//             break;
//         case "subtract": console.log(`ayirmasi :${num1 - num2}`)
//             break;
//         case "multiply": console.log(`ko'paytmasi :${num1 * num2}`)
//             break;
//         case "divide": console.log(`bo'linmasi :${num1 / num2}`)
//             break;
//         default: console.log(`aniqlanmagan amal`);
//     }
// }
// const a = 100;
// const b = 40;
// const operation = "add"
// simpleCalaulator(a, b, operation)

// //ENG KATTA SONNI ANIQLOVCHI FUNCTION>>>>>>>>>>>>>➡️➡️➡️
// const getLargestelement = (array) => {
//     let largest = array[0];
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] > largest) {
//             largest = array[i];
//         }
//     }
//     return largest;
// }
// const nums = [2121, 4545, 45, 641, 155, 11, 1111]
// const result = getLargestelement(nums)
// console.log(`eng katta element ${result}`);

// //ELEMENTLARNI TANLAB OLISH  >>>>>>>>>>>>>>>>>>>>>>>>>>>>➡️➡️➡️
// const byClassName = document.getElementsByClassName('text');
// console.log(byClassName);
// const byID = document.getElementById('text');
// byID.textContent = 'yangi sarlavha'
// //byID.remove()
// console.log(byID);
// const byTAGName = document.getElementsByTagName('text');
// console.log(byTAGName);
// const byNAME = document.getElementsByName('text')
// console.log(byNAME);

// events  bu >> foydalanuvchi yoki brauzerning ozi tomonidan amalga oshirilishi mumkun bolgan➡️➡️➡️
// brauzerda sodir bolAdigan hodisalar
// ELEMENT LARGA EVENT LARNI BOGLASHNI 3 TA USULI BOR
// INLINE EVENT HANDLERS >>>>>>>>>>>>>>
//     EVENT HANDLER PRPORTIES >>>>>>>>>>
//         EVENT LISTENERS >>>>>>>>>>>>
//             INLINE EVENT HANDLERS > event html tegining atributi sifatida function bn korsatib o'tiladi
// function script qismiga yoziladi
// QUYIDAGI  FUNCTION  ELEMENT  CONTENTINI OZGARTIRISH >>>>>>>
// const change = () => {
//     let sarlavha = document.getElementById('head')
//     sarlavha.textContent = "sarlavhaning nomi o'zgartirildi";
// }
// const back = () => {
//     sarlavha.textContent = 'sarlavha'
// }
// const btn = document.getElementById('btn');
// btn.onclick = change;

// function metodlari>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>➡️➡️➡️
//     toUpperCase()  harflarning hammasi bosh harf bn boshlanadi

// const array = [`sarvar`, `doniyor`, `sardor`, `temur`]
// array.forEach(function (name) {
//     const res = name.charAt().toUpperCase() + name.slice(1).toLowerCase() + `bek`
//     console.log(res);
// })

// //YUQORIDAGI ISMLARNI ARRAY KORINISHIDA CHIQARMOQCHI BO'LSAK QUYIDAGILAR>>>>>>>>>>>>>>>>➡️➡️➡️
// const array = [`sarvar`, `donior`, `sardor`, `temur`]
// const arraytwo = []
// array.forEach(function (name) {
//     const result = name.charAt().toUpperCase() + name.slice(1).toLowerCase() + 'bek'
//     arraytwo.push(result)
// })
// console.log(arraytwo);

// const user = {
//     name: 'javascript',                                   //object haqida ➡️➡️➡️
//     age: 15,
//     email: "index@gmail.com",
//     location: "Qashqadaryo",
//     langs: ['uzbek', 'english', 'turkish'],
//     login: function () {
//         console.log("siz sahifangizga kirdingiz");
//     },
//     logout: function () {
//         console.log('siz saifangizni tark etdingiz')
//     },
//     speak: function () {
//         console.log("I can speak:");
//         this.forEach(lang => {
//             console.log(lang);
//         });
//     },
// }
// user.speak()

// const user = {                                                              //➡️➡️➡️
//     langs: ['uzbek', 'english', 'turkish'],
//     login: function () { console.log("siz sahifangizga kirdingiz"); },
//     logout: function () { console.log('siz saifangizni tark etdingiz') },
//     speak: function () {
//         console.log(`I can speak:`);
//         this.langs.forEach((lang) => { console.log(lang); });
//     },
// }
// user.speak()

// const user = {                                                           //➡️➡️➡️
//     name: 'javascript',
//     age: 15,
//     email: "index@gmail.com",
//     location: "Qashqadaryo",
//     ism: `sarvar`,
//     mutaxasisligi: ['bootstrap', 'javascript', 'linux', 'React js', 'tailwind css'],
//     gapir: function () {
//         this.mutaxasisligi.forEach((calback) => { console.log(calback); }
//         )
//     }
// }
// user.gapir()//bu yerda funcsiya chaqirilyabti chuning uchun console.log yozish shart emas
// // console.log(user.age);//user ni yoshini chqarish,  bu yerda object ning value si chaqirilyabti

// const kinolar = [
//     { nomi: `avatar`, likes: '0135' },                                                   //if elde bilan➡️➡️➡️
//     { nomi: `sarvar`, likes: '15' },
//     { nomi: `tilobov`, likes: '15648' }
// ]
// const res = prompt(`kinolaringiz reytingini bilishni hohlaysizmi`)
// if (res == 'ha') {
//     kinolar.forEach((kino) => {
//         alert(`kino nomi ${kino.nomi}, yiggan layklari ${kino.likes}`);
//     })
// }
// else {
//     alert(`tizimda xatolik yuz berdi  qaytadan urunib ko'ring !!!`)
// }

// const movies = [                                                                             //foreach bilan➡️➡️➡️
//     { name: `avatar`, likes: '2615' },
//     { name: `front ortida`, likes: '351' },
//     { name: `epple haqida`, likes: '6351' },
//     { name: `loviya`, likes: '1351' },
//     { name: `qaoskorlar`, likes: '155' }
// ]
// movies.forEach((movie) => {
//     const res = `Kino nomi ${movie.name}🎥 layklari ${movie.likes}❤️ ta`
//     console.log(res);
// })

//  let num = 12.45634684156;
// console.log(Math.trunc(num));// butun sonning o'zini chiqaradi verguldan keyingi raqamlarni olib tashlaydi➡️➡️➡️
//console.log(Math.floor(num));//eng kichik  butun qismiga qarab yaxlitlaydi
// console.log(Math.ceil(num));// sonni eng katta butun songa qarab yaxlitlaydi
// console.log(Math.round(num));//sonni eng yaqin butun songa yaxlitlaydi
// console.log(Math.abs(num)); //berilgan qiymatning  mutloq  miusbat xolda qaytaradi
// console.log(Math.trunc(Math.random() * 5));
// console.log(Math.pow(162, 5));
// console.log(Math.sqrt(30));
// console.log(Number(num.toFixed(2)));
// console.log(Math.max(num));//

// const array = [`google`, [`item1`, `item2`], [1, 3], 48]    //STRING TURDAGI DATA NECHINCHI ONDEXDA LIGINI  ANIQLASH>>>>➡️➡️➡️
// for (let i = 0; i < array.length; i++) {                                 //FOR LOOP bilan
//     if (typeof array[i] == 'string') {
//         console.log('string turdagi malumot', i, 'qatorda bor');
//     }
// }

// const array = [[`item1`, `item2`], [1, 3], 48, `google`]                 //foreAch metodi bilan>>➡️➡️➡️
// array.forEach((item, i) => {
//     if (typeof item == 'string') {
//         console.log('string turdadi data', i, 'qatorda joylashgan');
//     }
// })

//BERILGAN ARRAY ning ichidan arraylarni ajratib olib uning ichidan ham item larni chiqarib yangi arrayga yuborish>➡️➡️➡️
// const datas = [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], `google`]
// const newdata = []
// datas.forEach((array) => {
//     const result = Array.isArray(array)
//     if (result) {
//         array.forEach((number) => {
//             newdata.push(number)
//         })
//     }
// })
// console.log(newdata);

// const checkdata = [null, 'false', 0, 99, false, undefined, '', NaN, '0']
// const falsyres = []
// checkdata.forEach((data) => {          //BERILGAN FALSE VALUELARNI ARRAYDAN CHIQARIB BOSHQA ARRAYDA console ga CHIQARISH>>>>>➡️➡️➡️
//     if (!data) {
//         falsyres.push(data)
//     }
// })
// console.log(falsyres);

// const word = 'samarqand'               //BERILGAN SO'Z-HARFLARINI TESKARI QILIB CHIQARISH >>>>>>>>>>>>>>>>➡️➡️➡️
// const splitword = word.split('').reverse()           //1-usul
// let newword = ''
// for (let i = 0; i < splitword.length; i++) {
//     newword += splitword[i]
// }
// console.log(newword);

// const word = "Amazon"                                    //2-usul➡️➡️➡️
// const splitword = word.split("")
// let newword = "";
// for (let i = word.length - 1; i >= 0; i--) {
//     newword += splitword[i]
// }
// console.log(newword);

// const word = prompt(`biror bir malumot kiriting`)//brauzerda string data kiritilganda so'zlarning bosh
// const splitword = word.split(' ')                                   // harfin kichkina qolganlari protiv   ➡️➡️➡️
// let newWord = ''
// splitword.forEach((item) => {
//     const boshi = item.charAt().toLowerCase()
//     const davomi = item.slice(1).toUpperCase()
//     newWord += ' ' + boshi + davomi
// })
// console.log(newWord.trimStart());

// const nembers = [-1, 15, Infinity, 5.2, 0, -5, 1, 84, -5.5]  //ARRAYda HAR HIL SONLAR ICHI DA FAQAT NATURALLARINI AJRATIB
// let naturalNumbers = 0                                                  //YIGINDISINI TOPISH>>>>>>>>>>>>>>>>>>>>>>>>>>>➡️➡️➡️
// nembers.forEach((num) => {
//     //1) son 0.0 dan katta 2) son yaxlitlansa o'ziga teng 3)son cheksiz emas 4) son 0 ga teng amas>> shartlar asosida natural son topilgan
//     if (num > 0.0 && Math.floor(num) === num && num !== Infinity && num !== 0) {
//         naturalNumbers += num
//     }
// });
// console.log(naturalNumbers);

// const word = prompt("O'zingiz haqingizda qisqacha malumot bering: ")//berilgan data da nechta  a  harfi borligini aniqlash➡️➡️➡️
// let split = word.split('') //bu yerda hardoimgidek split qilib harbir harfni array qiymati sifatida ozgartiriladi
// let counter = 0
// split.forEach((word) => {
//     if (word == 'a' || word == 'A') { //kiritilgan data teng bolsa  (a) else (A)  ga if true hissoblanadi
//         counter++                      // va  counter ga bir birlik qoshib boriladi
//     }
// });
// console.log(`Siz yozgan malumot da ${counter} ta a harfi ishtirok etgan ⭐`);

// //BERILGAN ARRAY DAGI MALUMOTNI DA TYPE NI BOSHQA ARRAY ICHIDA KO'RSATIB BERISH>>>>>>>.➡️➡️➡️
// const array = ['Nodira', 20.15, true, ' ', ["I'am array"], null, 145]
// const result = []
// array.forEach((element) => {
//     result.push(typeof element)
// });
// console.log(result);

// const word = 'Uzbekistan'
// console.log(word.lastIndexOf(word.slice(-1)) + 1); //bu yerda lastindexof ko'rsatilgan itemning index sini beradi➡️
// //                    ko'rsatilgan item ⬆️

// const numbers = [1, 2, 3, 4, 5]//bunda arraydagi har bir item ga o'zining indeksini qo'shib console ga chiqmoqda➡️
// const result = []
// numbers.forEach((number, i) => {
//     result.push(number + i)
// });
// console.log(result);

// //biror son berilganda  shu songacha nechta natural son bolsa hammasini yigindisini hisoblaydi➡️
// let counter = 0
// for (let i = 1; i <= 100; i++) {
//     counter += i
// }
// console.log(counter);

// const array = []
// let number = 9// bu ishda biror son berib o'tiladi , osha son har loop aylanganda i ga ko'paytiriladi va 1 ga qo'shiladi ➡️
// for (let i = 1; i <= 10; i++) {// masalan : i teng bolsa 4-loop da 4 ga, number 4 ga ko'paytiriladi va 1 qoshiladi
//     let res = number + i + 1
//     array.push(res)
// }
// console.log(array);

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]//berilgan array dagi sonlardni - son qilib chiqarish➡️
// let result = []
// const reverseFunc = (arr) => {
//     arr.forEach((num) => {
//         result.push(num * -1)
//     });
// }
// reverseFunc(numbers)
// console.log(result);

// const res = []
// const fizzbuzzFunc = function (number) {                                                    //➡️
//     for (let i = 1; i <= number; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             res.push('FizBuzz')
//         }
//         else if (i % 5 == 0) {
//             res.push('Buzz')
//         }
//         else if (i % 3 == 0) {
//             res.push('Fizz')
//         }
//         else {
//             res.push(i)
//         }
//     }
// }
// fizzbuzzFunc(100)
// console.log(res);

// const res = []
// const fbf = function (number) {
//     for (let i = 1; i <= number; i++) {
//         if (i % 3 == 0 && i % 5 == 0) {
//             res.push('fizzbuzz')
//         }
//         else if (i % 3 == 0) {
//             res.push('fizz')
//         }
//         else if (i % 5 == 0) {
//             res.push('buzz')
//         }
//         else (res.push(i))
//     }
//     console.log(res);
// }
// fbf(20)

// const parse= 21.65
// console.log(parseFloat(parse));

// const res = document.getElementById('text')                   //ID   bilan tanlab olish
// console.log(res);
// let result = document.getElementsByClassName('text')            //class   bilan tanlab olish
// console.log(result);
// const a=document.getElementsByName('text')                       //Name  bilan tanlab olish
// console.log(a);
// const LG = document.querySelector('.text')                         //So'rov yordamida tanlab olish
// console.log(LG);
// const LG = document.querySelector('#text')                         //So'rov yordamida tanlab olish
// console.log(LG);
// const LG = document.querySelector('h1')                         //So'rov yordamida tanlab olish
// console.log(LG);
// const LG = document.querySelector('')                         //So'rov yordamida tanlab olish
// console.log(LG);

// const name = 'the first senior developer'//bu string metodi hisoblanadi va qavs ichida qaysi index dan boshlab
// // console.log(name.substring(0,10))                        // olib qaysi indexdagi item gacha olishi yoziladi
// // console.log(name.split (''));//berilgan elementni array ga aylantirib beruvchi property
// // //bu propertyda qaysi elementdan keyin arrayga ajratishini qavs ichiga belgilab korsatiladi
// // //misol uchun : probeldan kegin and verguldan keyin and va qaysidir harfdan kegn deb korsatilsa
// // //osha korsatlgan harfni console ga chiqarilmaydi
// console.log(name.toLocaleUpperCase()); //HAmma harfrlarni katta harf bilan

// const arr = ['item1', 'item2', 'item3']
// // arr.unshift('add')  // arrayga elementni boshidan boshlab qoshish   ➡️➡️
// arr.pop()//arraydagi element ni olib tashlash➡️➡️
// console.log(arr);

// // string to number
// let res;
// res = Number('65168')
// res = Number('165165e-315')
// //Boolean to number
// res = Number(true)
// res = Number(false)
// res = Number(null)
// res = Number(false)
// res = Number('hello')
// res = Number(undefined)
// res = Number(NaN)
// console.log(res);

// const a = +prompt("balingizni kiriting va natijangizni bilib oling")
// const money = +prompt('pul miqdori')
// const ielts = +prompt("IELTS bor bo'lsa  1  aks holda  0  kiriting")
// if (a >= 100) {
//     console.log('qabul qilindingiz');
// }
// else if (a >= 100 || money >= 5000 && ielts == 1) {
//     console.log('oqishga qabul qilindingiz');
// }
// else if (a < 50) {
//     console.log('kirmadingiz');
// }
// else {
//     console.log('error');
// }

// let card = document.querySelector('.container')//                     ➡️➡️
// let jins = +prompt('jinsingizni kiriting ')
// if (jins == 1) {
//     card.innerHTML = `<img src="./Без названия (1).jpg" alt="">`
// }
// else if (jins == 2) {
//     card.innerHTML = `<img src="./Без названия.jpg" alt="">`
// }
// else {
//     card.innerHTML = `<h1>Bu turdagi jins topilmadi</h1>`
// }

// const card = document.querySelector('.card');//                                    ➡️➡️
// let jins = +prompt("Jinsingizni kiriting: ayol=1 / Erkak=2");
// if (jins == 1) {
//     card.innerHTML = `<img src="./Без названия (1).jpg" alt="">`
// }
// else if (jins == 2) {
//     card.innerHTML = `<img src="./Без названия.jpg" alt="">`
// }
// else {
//     card.innerHTML = `<h1>Bu turdagi jins topilmadi</h1>`
// }


// function myName(a, b) {
//     console.log(`${a} ning kasbi ${b}`);
// }
// myName("Sarvar", "Dizayner")
// myName("Muhammadi", "programmer")
// myName("Abdulaziz", "copyrayter")

// const arrov (salomber){
// }
// arrov('salom')


// for (let i = 0; i <= 100; i++) {
//     if (i % 2 == 1) {
//         console.log(i);
//     }
// }

// const res = +prompt("bahoni kiritish")
// if (res >= 6) {
//     console.log('5 ballik sistemada boxolanadi');
// }
// else if (res == 5) {
//     console.log("Sizga 500000 som pul ajratildi");
// }
// else if (res == 4) {
//     console.log("Sizga 400000 som pul ajratildi");
// }
// else if (res == 3) {
//     console.log("Sizga 300000 som pul ajratildi");
// }
// else if (res <= 2) {
//     console.log("Sizga pul ajratilmadi");
// }
// else if (res == String) {
//     console.log(`Sizga pul ajratilmadi`);
// }
// else {
//     console.log('not found');
// }

// const calc = (a) => {
//     return a
// }
// const res = calc(20)
// console.log(res);

// const val = function (b) {
//     const result = res * b
//     console.log(result);
// }














