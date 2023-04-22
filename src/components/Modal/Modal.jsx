import ReactModal from 'react-modal';

import css from './Modal.module.css';

ReactModal.setAppElement('#root');

export const ModalComponent = ({showModal, onRequestClose, imgLink, alt}) => {
    return (   
        <ReactModal 
           isOpen={showModal}
           onRequestClose={onRequestClose}
           className={css.modal}
           overlayClassName={css.overlay}
        >
          <img src={imgLink} alt={alt} />
        </ReactModal>
    );
};