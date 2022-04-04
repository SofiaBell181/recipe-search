const tl = new TimelineMax();

tl.from('.images', 2, {
    scaleY:1,
    height:'100vh',
    ease: Circ.easeOut
})

tl.from('#inputField', 2, {
    opacity: 0,
    y: -100,
    ease: "back.out(1.7)"
})

tl.from('.dishContainer', 3, {
    opacity: 0,
    stagger: 1,
})

gsap.from('h1', 2, {opacity: 0, delay:1})


const inputField = document.querySelector('#inputField');
const dishContainer = document.querySelectorAll('.dishContainer');

inputField.addEventListener('keyup', (event) => {
    let word = event.target.value.toLowerCase().trim();
    dishContainer.forEach(item => {
        item.querySelector('ul').textContent.toLowerCase().includes(word) || item.querySelector('h3').textContent.toLowerCase().includes(word) 
        ? ((item.style.display = 'block') && (item.style.display = 'flex')) : (item.style.display = 'none');
    })

})

    const btn = document.querySelector('#btn');
    btn.addEventListener('click', () => {
        document.querySelector('.recepiesOne').classList.toggle('show');
    })


    const btnTwo = document.querySelector('#btnTwo');
    btnTwo.addEventListener('click', () => {
        document.querySelector('.recepiesTwo').classList.toggle('show');
    })    

    const btnThree = document.querySelector('#btnThree');
    btnThree.addEventListener('click', () => {
        document.querySelector('.recepiesThree').classList.toggle('show');
    })  

    const btnFour = document.querySelector('#btnFour');
    btnFour.addEventListener('click', () => {
        document.querySelector('.recepiesFour').classList.toggle('show');
    }) 

    const btnFive = document.querySelector('#btnFive');
    btnFive.addEventListener('click', () => {
        document.querySelector('.recepiesFive').classList.toggle('show');
    }) 

    const btnSix = document.querySelector('#btnSix');
    btnSix.addEventListener('click', () => {
        document.querySelector('.recepiesSix').classList.toggle('show');
    }) 

    const btnSeven = document.querySelector('#btnSeven');
    btnSeven.addEventListener('click', () => {
        document.querySelector('.recepiesSeven').classList.toggle('show');
    }) 

    const btnEight = document.querySelector('#btnEight');
    btnEight.addEventListener('click', () => {
        document.querySelector('.recepiesEight').classList.toggle('show');
    }) 

    const btnNine = document.querySelector('#btnNine');
    btnNine.addEventListener('click', () => {
        document.querySelector('.recepiesNine').classList.toggle('show');
    }) 








