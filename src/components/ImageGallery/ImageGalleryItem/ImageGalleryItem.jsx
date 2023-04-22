import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({imgLink, alt, onClick, id}) => {
    return (
        <li
            onClick={onClick}
            className={css['gallery-item']}
        >
            <img src={imgLink} alt={alt} id={id}/>
        </li>
    );
};