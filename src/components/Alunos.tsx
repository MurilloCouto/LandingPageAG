import { useState, useEffect, useMemo } from "react";
import style from "./Alunos.module.scss";

export function Alunos() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState<string[]>([]);

  const images = useMemo(
    () => ["/slide-1.jpg", "/slide-2.jpg", "/slide-3.jpg", "/slide-2.jpg"],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  useEffect(() => {
    const endIndex = (currentIndex + 3) % images.length;
    setVisibleImages(getVisibleImages(currentIndex, endIndex, images));
  }, [currentIndex, images]);

  const getVisibleImages = (startIndex: number, endIndex: number, images: string[]) => {
    if (endIndex >= startIndex) {
      return images.slice(startIndex, endIndex);
    } else {
      return [...images.slice(startIndex), ...images.slice(0, endIndex)];
    }
  };

  const isMobile = window.innerWidth <= 768;

  return (
    <div id="alunos" className={style.alunos}>
      <h1>Aqui estão alguns dos resultados dos nossos alunos</h1>
      <div className={style.fotos}>
        {visibleImages.slice(0, isMobile ? 1 : visibleImages.length).map((image, index) => (
          <img key={index} src={image} alt="alunos" />
        ))}
      </div>
    </div>
  );
}
