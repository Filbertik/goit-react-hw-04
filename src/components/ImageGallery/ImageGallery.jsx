import ImageItem from "../ImageItem/ImageItem";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {images.map((image) => (
        <ImageItem key={image.id} image={image} onClick={onImageClick} />
      ))}
    </ul>
  );
};

export default ImageGallery;
