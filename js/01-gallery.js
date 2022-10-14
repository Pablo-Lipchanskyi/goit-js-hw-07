import { galleryItems } from './gallery-items.js';
// Change code below this line
const mainGallery = document.querySelector(".gallery");
const createdImages = galleryItemsCreate(galleryItems);
mainGallery.insertAdjacentHTML('beforeend', createdImages);
mainGallery.addEventListener("click", onClick);


function onClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return
    } 
}




function galleryItemsCreate(galleryItems) {
    return galleryItems.map(
        ({ description, preview, original }) =>
            `<a class="gallery__link" href="${original}">
            <img class="gallery__image"
            src="${preview}"
            alt="${description}"/></a>
            `).join('');
}
console.log(galleryItems);
