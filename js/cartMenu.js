let cartProductsMenu = document.querySelector('.carts-products');
let badgeDom = document.querySelector('.badge');
let cartProductsDom = document.querySelector('.carts-products div');
let shopingCartIcon = document.querySelector('.shopingCart');
// check if there is items in localStorage
let addedItem = 
localStorage.getItem('productsInCart') ? 
JSON.parse(localStorage.getItem('productsInCart')) : []
if(addedItem){
    addedItem.map(item => {
        cartProductsDom.innerHTML += `<p>${item.title} ${item.qty}</p>`
    })
    badgeDom.style.display = 'block'
    badgeDom.innerHTML += addedItem.length
}
shopingCartIcon.addEventListener('click' , openCartMenu)
function openCartMenu(){
    if(cartProductsDom != ""){
        cartProductsMenu.classList.toggle('active')
    } 
}
// Price Total
let totalPrice = document.getElementById('total_Price');
let total = 0
let totalAvatar = localStorage.getItem('priceTotal') ? Number(localStorage.getItem('priceTotal')) : 0
if(totalAvatar){
    totalPrice.innerHTML += totalAvatar + '$'
    total = totalAvatar
}