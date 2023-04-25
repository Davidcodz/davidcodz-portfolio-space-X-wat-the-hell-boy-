let main = document.getElementById('main');
let articles = document.querySelectorAll('article h1 p');
let scrollSpeed = 0.5;

window.onresize = () => {
    scrollSpeed = 0.5;

    let windowHeight = window.innerHeight;
    let windowWidth = window.innerWidth;

    scrollSpeed += (windowHeight / windowWidth) / 710;

    console.log(scrollSpeed);
}

window.addEventListener(onscroll = () => {
    let moveDown = window.scrollY;
    main.style.right = `${moveDown * scrollSpeed}px`;
});
