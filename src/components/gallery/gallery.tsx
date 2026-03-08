import { useNavigate } from "react-router-dom";
import './gallery.css';

import { useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";

const images: GalleryItem[] = [
  {
    srcSet: "assets/img/3.jpg 1024w, assets/img/3.jpg 800w, assets/img/3.jpg 640w",
    sizes: "(max-width: 1024px) 100vw, (max-width: 800px) 100vw, (max-width: 640px) 100vw, 1024px",
    original: "assets/img/3.jpg",
    thumbnail: "assets/img/3.jpg",
  },
  {
    srcSet: "assets/img/4.jpg 1024w, assets/img/4.jpg 800w, assets/img/4.jpg 640w",
    sizes: "(max-width: 1024px) 100vw, (max-width: 800px) 100vw, (max-width: 640px) 100vw, 1024px",
    original: "assets/img/4.jpg",
    thumbnail: "assets/img/4.jpg",
  },
  {
    srcSet: "assets/img/5.jpg 1024w, assets/img/5.jpg 800w, assets/img/5.jpg 640w",
    sizes: "(max-width: 1024px) 100vw, (max-width: 800px) 100vw, (max-width: 640px) 100vw, 1024px",
    original: "assets/img/5.jpg",
    thumbnail: "assets/img/5.jpg",
  },
];

export default function Gallery() { 
  const navigate = useNavigate();
  const galleryRef = useRef<ImageGalleryRef>(null);

  return (
    <div>
      <div id="header"><h1>Gallery</h1>
    </div>

    <div id="content">
      <div id="current-image">
          <ImageGallery
            ref={galleryRef}
            items={images}
            onSlide={(index) => console.log("Slid to", index+1)}
            showThumbnails={false}

          />
      </div>

      <div id="description">
        
      </div>
    </div>

      <div id="footer">
        <div id="footer-container">
          <p>      
            <div className="back_button" onClick={() => navigate("/")}>&larr; Go back</div>
          </p>
        </div>
      </div>
      
    </div>
  );
};
