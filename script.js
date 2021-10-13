const button = document.querySelector('.navbar-toggler');
const menu = document.querySelector('.navbar-appear');
const close = document.querySelector('.close');
const menyDark = document.querySelector('.bg-dark');
const order = document.querySelector('.order');

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

order.addEventListener('mouseover',() =>{
    Swal.fire({
        title: 'Veckans erbjudande!!!',
        text: 'Köp två rätter och få en dryck gratis!',
        imageUrl: 'https://images.unsplash.com/photo-1579684947550-22e945225d9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80',
        imageWidth: 350,
        imageHeight: 300,
        imageAlt: 'Custom image',
        background: '#ffdd93',
        confirmButtonText:'<a href="menu.html#pasta">Gör beställning</a>',
        confirmButtonColor: 'rgba(29, 28, 28, 0.9)',

})


})