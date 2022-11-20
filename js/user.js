let userInfo = document.querySelector('#user_info')
let userDom = document.querySelector('#user')
let links = document.querySelector('#links')
let logOut = document.querySelector('#logout')

let username = localStorage.getItem('username')
let userImg = localStorage.getItem('userImg')
if(username){
    links.remove()
    userInfo.style.display = 'flex'
    user.innerHTML = username
    imgUser.src = userImg
}
logOut.addEventListener('click' , () => {
    localStorage.clear()
    setTimeout(() => {
        location.pathname = 'register.html'
    } , 1500)
})