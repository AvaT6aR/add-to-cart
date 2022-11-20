let productsDom = document.querySelector('.products');
let iconFovorite = document.querySelector('#iconFovorite');
let products = JSON.parse(localStorage.getItem('products')) || productsDB;
let drewProductsUI;
(drewProductsUI = function (products = []){
    let productsUI = products.map((item) => {
        return `
        <div class="product-item" style="border: ${item.isMe === true ? "1px solid #28a745" : ""}">
        <img src="${item.imgUrl}" alt="img" class="product-item-img">
        <div class="product-item-desc">
            <a onclick="saveItemData(${item.id})">${item.title}</a>
            <p>${item.desc}</p>
            <span>Size : ${item.size}</span>
            <span>Price : ${item.price}$</span>
            ${item.isMe === true ? '<button class="btn btn-secondary mb-2" onclick="editProduct('+item.id+')">Edit Product</button>' : ''}
        </div>
        <div class="product-item-avtions">
            <button class="btn add-to-cart" onclick="addedToCart(${item.id})"> Add To Cart</button>
            <i class="fa-heart ${item.liked == true ? 'fa-solid' : 'fa-regular'}" 
            style="color: ${item.liked == true ? '#cc0b0b' : ''}" 
            onclick="addToFovorite(${item.id})"></i>
        </div>
    </div>
        `
    })
    productsDom.innerHTML = productsUI.join("")
})(JSON.parse(localStorage.getItem("products")) || products)


// check if there is items in localStorage

// add to cart
function addedToCart(id) {
    if(localStorage.getItem('username')){
        let product = products.find((item) => item.id === id)
        let isProductInCart = addedItem.some(item => item.id === product.id)
        if(isProductInCart) {
            addedItem = addedItem.map(p => {
                if(p.id == product.id) p.qty ++;
                return p;
            })
        } else {
            addedItem.push(product)
        }

        cartProductsDom.innerHTML = ''
        addedItem.forEach(item => {
            cartProductsDom.innerHTML += `<p>${item.title} ${item.qty}</p>`
        })
        // Save Data
        localStorage.setItem('productsInCart', JSON.stringify(addedItem))

        // Add counter of items
        let cartProductItems = document.querySelectorAll('.carts-products div p')
        badgeDom.style.display = 'block'
        badgeDom.innerHTML = cartProductItems.length
        total += Number(product.price)
        localStorage.setItem('priceTotal' , total)
        document.getElementById('total_Price').innerHTML = total + '$'
    } else {
        location.pathname = 'login.html'
    }
}

function saveItemData(id){
    localStorage.setItem('productId' , id)
    location.pathname = 'cartDetails.html'
}

function search(term){
    let productdata = ""
    products.map(item => {
        if(item.title.toLowerCase().includes(term.toLowerCase().trim())){
            productdata += `
            <div class="product-item" style="border: ${item.isMe === true ? "1px solid #28a745" : ""}">
            <img src="${item.imgUrl}" alt="img" class="product-item-img">
            <div class="product-item-desc">
                <a onclick="saveItemData(${item.id})">${item.title}</a>
                <p>${item.desc}</p>
                <span>Size : ${item.size}</span>
                <span>Price : ${item.price}$</span>
                ${item.isMe === true ? '<button class="btn btn-secondary mb-2" onclick="editProduct('+item.id+')">Edit Product</button>' : ''}
            </div>
            <div class="product-item-avtions">
                <button class="btn add-to-cart" onclick="addedToCart(${item.id})"> Add To Cart</button>
                <i class="fa-heart ${item.liked == true ? 'fa-solid' : 'fa-regular'}" 
                style="color: ${item.liked == true ? '#cc0b0b' : ''}" 
                onclick="addToFovorite(${item.id})"></i>
            </div>
            </div>
            `
        }
    })
    productsDom.innerHTML = productdata
}
// add to Fovorite
let addedFovorite = 
localStorage.getItem('productsFovorite') ? 
JSON.parse(localStorage.getItem('productsFovorite')) : []
function addToFovorite(id) {
        if(localStorage.getItem('username')){
        let product = products.find((item) => item.id === id)
        product.liked = true;
        let isProductInFovorite = addedFovorite.some(item => item.id === product.id)
        if(isProductInFovorite){
            
        } else {
            addedFovorite.push(product)
        }
        localStorage.setItem('productsFovorite', JSON.stringify(addedFovorite));
        localStorage.setItem('products' , JSON.stringify(products))
        drewProductsUI(products)
    } else {
        location.pathname = 'login.html'
    }
}

// Filter Products 
let sizeFilter = document.getElementById('size-filter') 
let priceFilter = document.getElementById('price-filter')
sizeFilter.addEventListener('change' , getProductsFilterBySize)

function getProductsFilterBySize(e){
    let val = e.target.value

    let products = JSON.parse(localStorage.getItem('products')) || productsDB

    if(val == 'all'){
        drewProductsUI(products)
    } else {
        products = products.filter(item => item.size === val)
        drewProductsUI(products)
    }
}

function getProductsFilterByPrice(e){
    let price = Number(e)
    let products = JSON.parse(localStorage.getItem('products')) || productsDB
    if(price == ''){
        drewProductsUI(products)
    } else {
        products = products.filter(item => item.price <= price)
        drewProductsUI(products)
    }
}

// Edit Product
function editProduct(id){
    localStorage.setItem('editProduct' , id)
    location.pathname = 'editProduct.html' 
}
