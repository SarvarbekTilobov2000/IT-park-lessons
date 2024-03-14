"use strict"

// const card = document.querySelector('card')
// const wrapper = document.querySelector('.wrapper')
// const select = document.querySelector('#select')
// function dF(data) {
//   data.forEach((item) => {
//     const div = document.createElement('div')
//     div.setAttribute('class', 'card')

//   });
// }


const card = document.querySelector('.card');
let mouse = document.querySelector('.mouse');
const input = document.querySelector('input');
const outer = document.querySelector('.outer')
const wrapper = document.querySelector('.wrapper');
const select = document.querySelector('#select')

const dinamicF = (data) => {
  data.forEach((e) => {
    const div = document.createElement('div');
    div.setAttribute('class', 'card')
    div.innerHTML = `<div class="bg-image hover-overlay" data-mdb-ripple-init data-mdb-ripple-color="light">
        <img src="${e.picture}" class="img-fluid mt-3">
        <a href="#!">
          <div class="mask" style="background-color: rgba(251, 251, 251, 0.15);"></div>
        </a>
      </div>
      <div class="card-body">
        <h5 class="card-title">${e.name}</h5>
        <ul class="list-unstyled ">
          <li>RAM: ${e.RAM}</li>
          <li>ROM: ${e.ROM}</li>
          <li>Chipset: ${e.chipset}</li>
          <li>ReleasedDate: ${e.releasedDate}</li>
        </ul>
        <a href="#!" class="btn btn-primary w-75" data-mdb-ripple-init>Buy</a>
      </div>`;
    wrapper.append(div)
  });
}
dinamicF(phones)

const category = [];
function dynamicOption() {
  phones.forEach((e) => {
    if (!category.includes(e.category)) {
      category.push(e.category)
      const option = document.createElement('option')
      option.textContent = e.category;
      select.append(option)
    }
  })
}
dynamicOption()

select.addEventListener('change', (e) => {
  wrapper.innerHTML = ''
  const filterProduct = phones.filter((el) => el.category.toLowerCase() === e.target.value.toLowerCase())
  dinamicF(filterProduct)
})



