"use strict"
// const form = document.querySelector('form')
// const input1 = document.querySelector('.input1')
// const input2 = document.querySelector('.input2')
// const btn1 = document.querySelector('.btn1')
// const card1 = document.querySelector('.card1')
// const card2 = document.querySelector('.card2')
// const icon = document.querySelector('.fa-x')
// const btn2 = document.querySelector('.btn2')

// btn1.addEventListener('click', () => {
//   btn1.classList.add('d-none')
//   card1.classList.replace('d-none', 'd-block')
// })
// icon.addEventListener('click', () => {
//   btn1.classList.replace('d-none', 'd-block')
//   card1.classList.replace('d-block', 'd-none')
// })
// const notErr = (i1, i2) => { i1.classList.replace("d-block", 'd-none'); i2.classList.replace('d-none', 'd-block'); }

// const showErr1 = (i1, i2) => {
//   i1.style.cssText = "border:red solid 2px"; i2.style.cssText = "border:red solid 2px";
//   setTimeout(() => { i1.style.cssText = ""; }, 1000); setTimeout(() => { i2.style.cssText = ""; }, 1500)
// }

// const showErr2 = (i1, i2) => {
//   i1.style.cssText = ""; i2.style.cssText = "border:red solid 2px";
//   setTimeout(() => { i2.style.cssText = ""; }, 1500)
// }

// const showErr3 = (i1, i2) => {
//   i1.style.cssText = "border:red solid 2px"; i2.style.cssText = "";
//   setTimeout(() => { i1.style.cssText = ""; }, 1000)
// }
// btn2.addEventListener('click', () => {
//   if (!input1.value == "" && !input2.value == "") { notErr(card1, card2) }//1 va 2 bor
//   if (input1.value == "" && input2.value == "") { showErr1(input1, input2) }//1 va 2 bo'sh
//   if (input1.value == "" && !input2.value == "") { showErr3(input1, input2) }//1 bo'sh va 2 bor
//   if (!input1.value == "" && input2.value == "") { showErr2(input1, input2) }//1 bor va 2 bo'sh
// });
//====================================================================
// const showError = (input1, input2) => {
//   input1.style.border = 'red solid 2px';
//   input2.style.border = 'red solid 2px';
//   setTimeout(() => {
//     input1.style.border = '';
//     input2.style.border = '';
//   }, 1500);
// };

// btn2.addEventListener('click', () => {
//   if (input1.value && input2.value) {
//     card1.classList.replace('d-block', 'd-none');
//     card2.classList.replace('d-none', 'd-block');
//   } else {
//     showError(input1, input2);
//   }
// });
//==============================================================================

// const card = document.querySelector('.card');
// let mouse = document.querySelector('.mouse');
// const input = document.querySelector('input');
// const outer = document.querySelector('.outer')

// // loyiha ishi ======================================
// const wrapper = document.querySelector('.wrapper');//wrapper
// const select = document.querySelector('#select')
// const dinamicF = (data) => {
//   data.forEach((e) => {
//     const div = document.createElement('div');
//     div.setAttribute('class', 'card')
//     div.innerHTML = `<div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
//         <img src="${e.picture}" class="img-fluid mt-3">
//         <a href="#!">
//           <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
//         </a>
//       </div>
//       <div class="card-body">
//         <h5 class="card-title">${e.name}</h5>
//         <ul class="list-unstyled ">
//           <li>RAM: ${e.RAM}</li>
//           <li>ROM: ${e.ROM}</li>
//           <li>Chipset: ${e.chipset}</li>
//           <li>ReleasedDate: ${e.releasedDate}</li>
//         </ul>
//         <a href="#!" class="btn btn-primary w-75" data-mdb-ripple-init>Buy</a>
//       </div>`;
//     wrapper.append(div)
//   });
// }
// dinamicF(phones)
// const category = [];
// function dynamicOption() {
//   phones.forEach((e) => {
//     if (!category.includes(e.category)) {
//       category.push(e.category)
//       const option = document.createElement('option')
//       option.textContent = e.category;
//       select.append(option)
//     }
//   })
// }
// dynamicOption()
// select.addEventListener('change', (e) => {
//   wrapper.innerHTML = ''
//   const filterProduct = phones.filter((el) => el.category.toLowerCase() === e.target.value.toLowerCase())
//   dinamicF(filterProduct)
// })
// // loyiha ishi ======================================




