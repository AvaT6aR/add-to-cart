let productsDom = document.querySelector('.products')
let noProductsDom = document.querySelector('.noProducts')
function displayProducts(allproducts = []){
    if(JSON.parse(localStorage.getItem('productsInCart')).length === 0){
        noProductsDom.innerHTML = `
        There Is No Items !! <a href="index.html">Add To Cart</a>
        `;
    } else {
        let products = JSON.parse(localStorage.getItem('productsInCart')) || allproducts
        let productsUI = products.map((item) => {
        return `
        <div class="product-item">
        <img src="${item.imgUrl}" alt="img" class="product-item-img">
        <div class="product-item-desc">
            <h2>${item.title}</h2>
            <p>${item.desc}</p>
            <span>Size : ${item.size}</span>
            <span>Price : ${item.price * item.qty}$</span>
            <span>Quntatit : ${item.qty}</span>
        </div>
        <div class="product-item-avtions">
            <button class="btn add-to-cart" onclick="removeItemFromCart(${item.id})"> Remove From Cart</button>
        </div>
        </div>
        `
    })
    productsDom.innerHTML = productsUI.join("")
    }
}
displayProducts()
function removeItemFromCart(id){
    let productsInCart = localStorage.getItem('productsInCart')
    if(productsInCart){
        let items = JSON.parse(productsInCart)
        let filteredItems = items.filter(item => item.id !== id)
        let total = 0
        localStorage.setItem('productsInCart' , JSON.stringify(filteredItems))
        let priceTotal = JSON.parse(localStorage.getItem('productsInCart'))
        priceTotal.find(item => {
            total += item.price
        })
        localStorage.setItem('priceTotal' , JSON.stringify(total))
        displayProducts(filteredItems)
    }
}

