const shareButton = document.querySelector('.share-button')
const shareBox = document.querySelector('.article-preview-share-arrow-container')
const shareArrow = document.querySelector('.share-arrow')


shareBox.addEventListener("click", () => {
    shareButton.classList.toggle('active')
    shareArrow.classList.toggle('coloredArrow')
    if (document.documentElement.clientWidth >= 415) {
        shareBox.classList.toggle('colored')
    } else {
        shareBox.classList.toggle('colored-mobile')
    }
})