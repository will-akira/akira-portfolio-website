const overlay = document.getElementById('large-images');

const images = document.querySelectorAll('.image-grid img');

const hobGoblinFolder = [
    '/images/hob-goblin-armors/hob goblin armor warrior render1.png'
]

images.forEach(thumb => {
    // creating the large image and buttons and then appending them to #large-images section
    thumb.addEventListener('click', (e) => {
        e.stopPropagation(); // prevents the click from reaching the body
        const largeSrc = thumb.src;
        const largeImg = document.createElement('img');
        largeImg.src = largeSrc;
        
        const leftButton = document.createElement('button');
        leftButton.id = 'leftbutton';
        leftButton.innerText = '<';

        const rightButton = document.createElement('button');
        rightButton.id = 'rightbutton';
        rightButton.innerText = '>';

        overlay.innerHTML = '';
        overlay.appendChild(leftButton);
        overlay.appendChild(largeImg);
        overlay.appendChild(rightButton);
        overlay.style.display = 'flex';
    })
})

// prevents clicks inside the overlay from closing it
overlay.addEventListener('click', (e) => e.stopPropagation());


// only closes the overlay when clicking "outside" of it
document.body.addEventListener('click', () => {
    overlay.style.display = 'none';
})