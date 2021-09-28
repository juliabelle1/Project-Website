const button = document.querySelector('.navbar-toggler');
const menu = document.querySelector('.navbar-appear');
const close = document.querySelector('.close');
const menyDark = document.querySelector('.bg-dark');

button.addEventListener('click',() =>{
    menu.style.display = 'flex'
})

close.addEventListener('click',() =>{
    menu.style.display = 'none'
})


let sticky = menyDark.offsetTop;


window.onscroll = () => {
    if (window.pageYOffset >= sticky) {
        menyDark.classList.add("sticky")
    } 
    else {
        menyDark.classList.remove("sticky");
    }
}



