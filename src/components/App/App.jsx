import { useState, useEffect } from "react";
import { fetchImages } from "../../api/unsplash";
import ImageGallery from "../ImageGallery/ImageGallery";
import Modal from "../Modal/Modal";
import Loader from "../Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import styles from "./App.module.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const form = e.target;
    const value = form.elements.query.value.trim();
    if (!value) return toast.error("Enter text to search!");

    setQuery(value);
    setImages([]);
    setPage(1);
  };

  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await fetchImages(query, page);
        if (data.length === 0) {
          toast.error("No images found");
        }
        setImages((prev) => [...prev, ...data]);
      } catch (error) {
        toast.error("Something went wrong");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  return (
    <div className={styles.container}>
      <Toaster />
      <form onSubmit={handleSearch} className={styles.form}>
        <input type="text" name="query" placeholder="Search images..." />
        <button type="submit">Search</button>
      </form>

      <ImageGallery images={images} onImageClick={setSelectedImage} />

      {images.length > 0 && !isLoading && (
        <button onClick={() => setPage((prev) => prev + 1)}>Load More</button>
      )}

      {isLoading && <Loader />}

      {selectedImage && (
        <Modal image={selectedImage} onClose={() => setSelectedImage(null)} />
      )}
    </div>
  );
};

export default App;
