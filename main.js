document.querySelector('#icono')
.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

var icono = document.querySelector("#icono");

window.onscroll = function() {
    var scroll = document.documentElement.scrollTop;
    
    if (scroll > 500){
        icono.style.transform = "scale(1)"
    }
    else if(scroll < 500){
        icono.style.transform = "scale(0)"
    }
}

window.onload = () => {
    let loading = document.querySelector('.loader-container')
    setTimeout(() => {
    loading.style.visibility = 'hidden' ;
    loading.style.opacity = '0' ;
    },8000)
}

