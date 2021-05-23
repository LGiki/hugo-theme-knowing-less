function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

window.addEventListener('load', () => {
    document.querySelector('#back-to-top').addEventListener('click', scrollToTop);
})

window.addEventListener('scroll', () => {
    let top = document.documentElement.scrollTop || document.body.scrollTop;
    if (top > 300) {
        document.querySelector('#back-to-top').className = 'float-button show';
    } else {
        document.querySelector('#back-to-top').className = 'float-button';
    }
})
