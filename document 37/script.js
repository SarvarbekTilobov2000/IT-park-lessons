"use strict"

const select = document.querySelector('select')
const wrapper = document.querySelector('.wrapper')

const bFunc = (data) => {
    data.forEach((i) => {
        const card = document.createElement('div')
        card.setAttribute('class', 'card')
        card.classList.add("mt-5")
        card.innerHTML = `<img src="${i.picture}"style="width:150px" class="card-img-top mx-auto mt-2"
    alt="Fissure in Sandstone" />
    <div class="card-body">
    <h5 class="card-title">${i.name}</h5>
    <ul class="list-unstyled">
    <li>RAM: ${i.RAM}</li>
    <li>ROM: ${i.ROM}</li>
    <li>Chipset: ${i.chipset}</li>
    <li>releasedDate: ${i.releasedDate}</li>
    <li>category: ${i.category}</li>
</ul>
    <a href="#!" class="btn btn-primary" data-mdb-ripple-init>Button</a>`
        wrapper.append(card)
    });
}
const dataKeeper = []
const option = () => {
    phones.forEach((i) => {
        if (!dataKeeper.includes(i.category)) {
            dataKeeper.push(i.category)
            const optionI = document.createElement('option')
            optionI.textContent = i.category
            select.append(optionI)
        }
    });
}
select.addEventListener('change', (e) => {
    wrapper.innerHTML = ''
    const fPro = phones.filter((item) => item.category.toLowerCase() === e.target.value.toLowerCase())
    bFunc(fPro)
    wrapper.classList.replace('justify-content-between', 'justify-content-around')
})

bFunc(phones)
option()

