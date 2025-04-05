import styles from "./ImageItem.module.css";

const ImageItem = ({ image, onClick }) => {
  return (
    <li className={styles.item} onClick={() => onClick(image)}>
      <img src={image.urls.small} alt={image.alt_description} />
    </li>
  );
};

export default ImageItem;
