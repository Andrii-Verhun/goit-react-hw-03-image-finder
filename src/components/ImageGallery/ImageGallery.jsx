import css from './ImageGallery.module.css';

import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({images, onClick}) => {
    return (
        <ul className={css.gallery}>
            {images.map((el) => {
                return <ImageGalleryItem
                    key={el.id}
                    imgLink={el.webformatURL}
                    alt={el.tags}
                    id={el.id}
                    onClick={onClick}
                />
            })}
        </ul>
    );
};