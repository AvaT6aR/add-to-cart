let newUsername = document.getElementById('new-username')
let newEmail = document.getElementById('new-email')
let passwordOld = document.getElementById('password')
let newPassword = document.getElementById('new-password')
let passwordLocal = localStorage.getItem('password')
let imgFile = document.getElementById('imgFile')
let editProfile = document.getElementById('editProfile')
let imgUrl = document.getElementById('img_url')
let get_img = localStorage.getItem('userImg')
imgUrl.src = get_img
imgFile.addEventListener('change' , uploadImg)
editProfile.addEventListener('submit' , editProfileFun)

function editProfileFun(e){
    e.preventDefault()
    if(passwordLocal === passwordOld.value){
        localStorage.setItem('username' , newUsername.value)
        localStorage.setItem('email' , newEmail.value)
        localStorage.setItem('password' , newPassword.value)
        localStorage.setItem('userImg' , imgUrl.src)
        setTimeout(() => {
            location.pathname = 'profile.html'
        } , 500)
    } else {
        alert('The password is wrong')
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
        imgUrl.src = reader.result
    }
    reader.onerror = () => {
        alert('Error !!')
    }
}