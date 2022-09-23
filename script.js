let padlock = document.querySelector('.padlock');
let text = document.querySelector('.text');

padlock.addEventListener('mouseenter', () => {
    text.className = 'text text_visible';

})

padlock.addEventListener('mouseleave', () => {
    text.className = 'text';
})



padlock.addEventListener('click', () => {
    padlock.className = 'padlock padlock_clicked';

    setTimeout(() => {
        padlock.className = 'padlock'
    }, 5000);
})

padlock.addEventListener('click', () => {
    text.className = 'text';
})