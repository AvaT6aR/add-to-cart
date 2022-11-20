let productName = document.getElementById('product-name')
let productDesc = document.getElementById('product-desc')
let productPrice = document.getElementById('product-price')
let productSizeSelect = document.getElementById('product-size')
let createForm = document.getElementById('create-form')
let imgFile = document.getElementById('file-img')
let productSizeValue;
let productImg;


productSizeSelect.addEventListener('change' , getProductSizeValue)
createForm.addEventListener('submit' , createProductFun)
imgFile.addEventListener('change' , uploadImg)

function getProductSizeValue(e){
    productSizeValue = e.target.value;
}
function createProductFun(e){
    e.preventDefault()
    if(localStorage.getItem('username')){
        let allProducts = JSON.parse(localStorage.getItem('products')) || productsDB;
        let nameValue = productName.value
        let descValue = productDesc.value
        let priceValue = productPrice.value
        if(nameValue && descValue && priceValue) {
            let obj = {
                id: Math.random(10),
                qty:1,
                title:nameValue,
                imgUrl:productImg,
                size:productSizeValue,
                price:priceValue,
                desc:descValue,
                isMe:true
            }
            let newProducts = allProducts ? [...allProducts , obj] : [obj]
            localStorage.setItem('products' , JSON.stringify(newProducts))
            productName.value = ''
            productDesc.value = ''
            productPrice.value = ''
            productSizeSelect.value = ''

            setTimeout(() => {
                location.pathname = 'index.html'
            } , 500)
        } else {
            alert('Please Enter Data ..')
        }
    }
    
}
function uploadImg(){
    let file = this.files[0]
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
