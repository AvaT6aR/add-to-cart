let get_user = localStorage.getItem('username')
let get_email = localStorage.getItem('email')
let get_img = localStorage.getItem('userImg')
let imgUrl = document.getElementById('img_url')
let products = JSON.parse(localStorage.getItem('products')) || productsDB
let myProduct = products.filter(item => item.isMe === true)
document.getElementById('username').innerHTML = get_user
document.getElementById('email').innerHTML = get_email
document.getElementById('productsLength').innerHTML = myProduct.length
imgUrl.src = get_img