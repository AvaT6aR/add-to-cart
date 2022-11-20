let username = document.querySelector('#username')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let registerBtn = document.querySelector('#signup')
let imgFile = document.getElementById('file-img')
let userImg = document.getElementById('userImg')
userImg.src = 'img/115-1150456_avatar-generic-avatar.png';
imgFile.addEventListener('change' , uploadImg)
registerBtn.addEventListener('click' , (e) => {
    e.preventDefault()
    if(username.value === "" || email.value === "" || password.value === ""){
        alert('Please Fill Data')
    } else {
        localStorage.setItem('username' , username.value)
        localStorage.setItem('email' , email.value)
        localStorage.setItem('password' , password.value)
        localStorage.setItem('userImg' , userImg.src)
        
        setTimeout(() => {
            location.pathname = 'login.html'
        }, 1500)
    }
})

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
        userImg.src = reader.result
    }
    reader.onerror = () => {
        alert('Error !!')
    }
}
