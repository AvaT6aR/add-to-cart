let products = JSON.parse(localStorage.getItem("products")) || productsDB
let productsDom = document.querySelector('.products')
let noProductsDom = document.querySelector('.noProducts')

let drewProductsUI;
(drewProductsUI = function (products = []){
    let myProducts = products.filter(item => item.isMe === true)
    if(myProducts.length != 0){
    let productsUI = myProducts.map((item) => {
        return `
        <div class="product-item" style="border: ${item.isMe === true ? "1px solid #28a745" : ""}">
        <img src="${item.imgUrl}" alt="img" class="product-item-img">
        <div class="product-item-desc">
            <a onclick="saveItemData(${item.id})">${item.title}</a>
            <p>${item.desc}</p>
            <span>Size : ${item.size}</span>
            <span>Price : ${item.price}$</span>
        </div>
        <div class="product-item-avtions d-block">
            <button class="btn btn-secondary mb-2 w-25" onclick="editProduct(${item.id})">Edit Product</button>
            <button class="btn btn-secondary mb-2 w-25" onclick="deleteProduct(${item.id})">Delete Product</button>
        </div>
    </div>
        `
    })
    productsDom.innerHTML = productsUI.join("")
} else{
    noProductsDom.innerHTML = 'No Products !!'
}
})(JSON.parse(localStorage.getItem("products")) || productsDB)


function editProduct(id){
    localStorage.setItem('editProduct' , id)
    location.pathname = 'editProduct.html' 
}
function deleteProduct(id){
    let products = JSON.parse(localStorage.getItem('products')) || productsDB
    let myProducts = products.filter(item => item.isMe === true)
    let filtered = myProducts.filter(item => item.id !== id)
    let clicked = myProducts.find(item => item.id === id)
    products = products.filter(item => item.id !== clicked.id)
    localStorage.setItem('products' , JSON.stringify(products))
    drewProductsUI(filtered)

}
