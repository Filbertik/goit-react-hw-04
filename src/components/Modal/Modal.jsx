import ReactModal from "react-modal";
import styles from "./Modal.module.css";

ReactModal.setAppElement("#root");

const Modal = ({ image, onClose }) => {
  return (
    <ReactModal
      isOpen={true}
      onRequestClose={onClose}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <button onClick={onClose} className={styles.closeButton}>
        Close
      </button>
      <p className={styles.description}>
        {image.alt_description || "Опис відсутній"}
      </p>

      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={styles.image}
      />
    </ReactModal>
  );
};

export default Modal;
