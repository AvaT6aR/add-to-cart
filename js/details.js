let products = JSON.parse(localStorage.getItem('products')) || productsDB
let productId = localStorage.getItem('productId')
let itemDom = document.querySelector('.item-details')
let productsDetailsItem = products.find(item => item.id == productId)

itemDom.innerHTML = `
<img src="${productsDetailsItem.imgUrl}" alt="sora">
<h2>${productsDetailsItem.title}</h2>
<p>${productsDetailsItem.desc}</p>
<span>Size : ${productsDetailsItem.size}</span>
<span>Price : ${productsDetailsItem.price * productsDetailsItem.qty}$</span>
<span>Quntatit : ${productsDetailsItem.qty}</span>
<button class="btn btn-secondary mb-2" onclick="editProduct(${productId})">Edit Product</button>
`
function editProduct(id){
    localStorage.setItem('editProduct' , id)
    location.pathname = 'editProduct.html' 
}