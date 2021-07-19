const model=document.querySelector('.model')
const loginbtn=document.querySelector('.login-btn')
const closebtn=document.querySelector('.close')

loginbtn.addEventListener('click',openmodel)
closebtn.addEventListener('click',cloemodel)
window.addEventListener('click',outsideclick)

function openmodel(){
    model.style.display="block"
}
function cloemodel(){
    model.style.display="none"
}
function outsideclick(){
    if (e.target==model){
        cloemodel()
    }
}