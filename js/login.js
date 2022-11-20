let username = document.querySelector('#username')
let password = document.querySelector('#password')
let loginBtn = document.querySelector('#signin')

let getUser = localStorage.getItem('username')
let getPassword = localStorage.getItem('password')
loginBtn.addEventListener('click' , (e) => {
    e.preventDefault()
    if(username.value === "" || password.value === ""){
        alert('Please Fill Data')
    } else if(getUser && getUser.trim() && getPassword && getPassword.trim() ) {
        setTimeout(() => {
            location.pathname = 'index.html'
        }, 1500)
    }
})