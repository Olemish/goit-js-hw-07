import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');


const galleryItemMarkup = ({original, preview, description}) => {
    return `<div class="'gallery__item'">
    <a class="gallery_link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" data-source="${original}" />
    </a>
</div>`
}

// const galleryImages = galleryItems.map(({original, preview, description}) => {
//    return galleryItemMarkup({ original, preview, description })
// }).join('')

const galleryImages = galleryItems.reduce((acc, {original, preview, description}) => {
    return acc + galleryItemMarkup({ original, preview, description })
}, '')

gallery.insertAdjacentHTML('afterbegin', galleryImages)
let modalWindow;
const openModal = (e) => {
    e.preventDefault()

    if (e.target.nodeName !== "IMG") {
    return;
    }
    modalWindow = basicLightbox.create(`
    <img src="${e.target.src}" width="800" height="600">
`)
    
    modalWindow.show()
}

gallery.addEventListener('click', e => openModal(e))
document.addEventListener('keydown', e =>closeModal(e)) 

function closeModal(e) {
    e.preventDefault()
    
    if (e.keyCode === 27 && modalWindow.visible()) {
            modalWindow.close()
    }
}
