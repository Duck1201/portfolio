const mainButton = document.querySelector('.main-header button')
const mediaBox = document.querySelectorAll('.media-box')

mediaBox?.forEach((box) =>{
    box.addEventListener('click', () => {
        window.open('https://www.google.com/', '_blank')
    })
})

mainButton?.addEventListener('click', () => {
    window.location.href = ('../html/minhahistoria.html')
})