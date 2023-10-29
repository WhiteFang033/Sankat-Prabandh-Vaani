const signOff = document.getElementById("UsignOfficial")
const signUser = document.getElementById("OsignUser")
const bgImage = document.getElementById("imageP")
const OffLogin = document.getElementById("OfficialLogin")
const UserLogin = document.getElementById("userLogin")
const UserLoginButton = document.getElementById('UsignUser')
const UserNameInput = document.getElementById('UnameInput')
const UserEmailInput = document.getElementById('UemailInput')
const OfficerNameInput = document.getElementById('OnameInput')
const OfficerEmailInput = document.getElementById('OemailInput')
const langBox = document.getElementById('languages');


const welcome = {
    en: "Welcome to Sankat Prabandh Vaani",
    hi: "संकट प्रबन्ध वाणी में आपका स्वागत है।",
    tm: "சங்கத் பிரபந்த வாணிக்கு வரவேற்கிறோம்."
}

if(localStorage.getItem("userName") != null)
{
    location.replace("./UserSideInterface.html")
}

langBox.addEventListener('click', (e)=>{
    language = e.target.value;
    localStorage.setItem("defaultLanguage",language);
    
    console.log(language)
})

signOff.addEventListener("click", (e) => {
    bgImage.classList.add("moveLeft")
    bgImage.style.borderRadius = "0 50px 50px 0"
    OffLogin.style.display = "flex";
    OffLogin.style.position = 'relative'
    OffLogin.style.right = '-60vw'
    UserLogin.style.display = "none";
})

signUser.addEventListener("click", (e) => {
    bgImage.classList.remove("moveLeft")
    bgImage.style.borderRadius = "50px 0 0 50px"
    UserLogin.style.display = "flex";
    UserLogin.style.position = 'relative'
    UserLogin.style.right = '-60vw'
    OffLogin.style.display = "none";
})

UserLoginButton.addEventListener('click', (e) => {
    console.log(e.target)
    if (UserNameInput.value == '') {
        UserNameInput.style.border = "2px solid red";
        return
    }
    if (UserEmailInput.value == '') {
        UserEmailInput.style.border = "2px solid red";
        return
    }

    localStorage.setItem("userName", UserNameInput.value);
    localStorage.setItem("userEmail", UserEmailInput.value);
    location.replace("./UserSideInterface.html")
})