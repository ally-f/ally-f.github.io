import { useNavigate } from "react-router-dom";
import './gallery.css';

import { useRef } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";

const images: GalleryItem[] = [
  {
    original: "../../assets/images/artwork1.jpg",
    thumbnail: "../../assets/react.svg",
  },
  {
    original: "../../assets/images/artwork2.jpg",
    thumbnail: "../../assets/images/artwork2_thumb.jpg",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
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
          <img src="" alt="artwork" />
          <ImageGallery
            ref={galleryRef}
            items={images}
            onSlide={(index) => console.log("Slid to", index)}
          />
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
