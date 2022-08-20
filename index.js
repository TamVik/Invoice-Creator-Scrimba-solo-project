const carBtn = document.getElementById("car-btn")
const lawnBtn = document.getElementById("lawn-btn")
const weedsBtn = document.getElementById("weeds-btn")
const invoiceBtn = document.getElementById("invoice-btn")
const taskArr = []
let taskWrapper = document.getElementById("task-wrapper")
let amountWrapper = document.getElementById("amount-wrapper")
let taskTotal = document.getElementById("task-total")
const amountArr = []
let totalAmount = document.getElementById("total-amount")



carBtn.addEventListener("click", function(){
    taskArr.push("Wash Car")
    amountArr.push(10)
    renderServices()
    renderPrices()
}, {once: true})

lawnBtn.addEventListener("click", function(){
    taskArr.push("Mow Lawn")
    amountArr.push(20)
    renderServices()
    renderPrices()
}, {once: true})

weedsBtn.addEventListener("click", function(){
    taskArr.push("Pull Weeds")
    amountArr.push(30)
    renderServices()
    renderPrices()
}, {once: true})

function renderServices() {
    let listItems = ""
    for (let i = 0; i < taskArr.length; i++) {
        listItems += `<li>${taskArr[i]}</li>`
    }
    taskWrapper.innerHTML = listItems
}

function renderPrices() {
    let price = ""
    for (let i = 0; i < amountArr.length; i++) {
        price += `<li>$${amountArr[i]}<li>`
    }
    amountWrapper.innerHTML = price
    totalPrice()
}

function totalPrice() {
    let total = 0
    for (let i = 0; i < amountArr.length; i++) {
        total += amountArr[i]
    }
    totalAmount.innerHTML = `$${total}`
}

invoiceBtn.addEventListener("click", function(){
    taskWrapper.innerHTML = ""
    amountWrapper.innerHTML = ""
    totalAmount.innerHTML = ""
})