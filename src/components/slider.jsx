import React, { useState } from "react";

const ImageSlider = () => {
  const images = [
    "https://picsum.photos/id/1015/600/300",
    "https://picsum.photos/id/1016/600/300",
    "https://picsum.photos/id/1018/600/300",
    "https://picsum.photos/id/1020/600/300"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Image Slider</h1>

      <img
        src={images[currentIndex]}
        alt="slider"
        style={{ width: "600px", borderRadius: "10px" }}
      />

      <div style={{ marginTop: "20px" }}>
        <button onClick={prevImage} style={styles.btn}>
          Back
        </button>

        <button onClick={nextImage} style={styles.btn}>
          Next
        </button>
      </div>
    </div>
  );
};

const styles = {
  btn: {
    margin: "10px",
    padding: "10px 24px",
    fontSize: "16px",
    cursor: "pointer",
    background: "#38bdf8",
    color: "#0a0e1a",
    border: "none",
    borderRadius: "8px",
    fontWeight: "600",
    transition: "all 0.3s ease"
  }
};

export default ImageSlider;