import { galleryItems } from './gallery-items.js';
// import { galleryItems } from "simplelightbox";
// var lightbox = new SimpleLightbox('.gallery', {});
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');


const galleryItemMarkup = ({original, preview, description}) => {
    return `<a class="gallery__item" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>`
}
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
    modalWindow = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 })
}

gallery.addEventListener('click', e => openModal(e))



