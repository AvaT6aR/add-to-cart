let productsDom = document.querySelector('.products')
let noProductsDom = document.querySelector('.noProducts')
function displayProducts(allproducts = []){
    if(JSON.parse(localStorage.getItem('productsFovorite')).length === 0){
        noProductsDom.innerHTML = `
        There Is No Items !!
        `;
    }else {
        let products = JSON.parse(localStorage.getItem('productsFovorite')) || allproducts
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
            <button class="btn add-to-cart" onclick="removeItemFromFovorite(${item.id})"> Remove From Fovorite</button>
        </div>
        </div>
        `
    })
    productsDom.innerHTML = productsUI.join("")
    }
}
displayProducts()
function removeItemFromFovorite(id){
    let productsFovorite = localStorage.getItem('productsFovorite')
    if(productsFovorite){
        let items = JSON.parse(productsFovorite)
        let filteredItems = items.filter(item => item.id !== id)
        localStorage.setItem('productsFovorite' , JSON.stringify(filteredItems))
        displayProducts(filteredItems)
    }
}

