let products = JSON.parse(localStorage.getItem('products')) || productsDB
let productId = JSON.parse(localStorage.getItem('editProduct'))
let getProduct = products.find(item => item.id === productId)
console.log('1' , getProduct);
let productName = document.getElementById('product-name')
let productDesc = document.getElementById('product-desc')
let productPrice = document.getElementById('product-price')
let productSizeSelect = document.getElementById('product-size')
let updateForm = document.getElementById('update-form')
let imgFile = document.getElementById('file-img')
let productSizeValue;
let productImg;

productName.value = getProduct.title
productDesc.value = getProduct.desc
productPrice.value = getProduct.price
productSizeSelect.value = getProduct.size
productImg = getProduct.imgUrl

productSizeSelect.addEventListener('change' , getProductSizeValue)
updateForm.addEventListener('submit' , updateProductFun)
imgFile.addEventListener('change' , uploadImg)

function getProductSizeValue(e){
    productSizeValue = e.target.value;
}

function updateProductFun(e){
    e.preventDefault()
    
    getProduct.title = productName.value
    getProduct.desc = productDesc.value
    getProduct.price = productPrice.value
    getProduct.size = productSizeSelect.value
    getProduct.imgUrl = productImg
    console.log('2' , getProduct);
    localStorage.setItem('products' , JSON.stringify(products))
    setTimeout(() => {
        location.pathname = 'index.html'
    } , 500)
}
function uploadImg(){
    let file = this.files[0]
    console.log(file);
    getImgBase64(file)
    let types = ["image/png" , "image/avif" , "image/svg" , "image/webp" , "image/jpg"]
    if(types.indexOf(file.type) == -1) {
        alert('Type not Supported')
        return;
    }
    if(file.size > 3 * 1024 * 1024){
        alert('Image not Exced 3MG')
    }
}
function getImgBase64(file){
    let reader = new FileReader()
    reader.readAsDataURL(file)

    reader.onload = () => {
        productImg = reader.result
    }
    reader.onerror = () => {
        alert('Error !!')
    }
}
