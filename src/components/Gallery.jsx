import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

const images = [
  { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/539304409.jpg' },
  { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/539304384.jpg' },
  { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/539304377.jpg' },
  { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/539304397.jpg' },
  { src: 'https://cf.bstatic.com/xdata/images/hotel/max1024x768/539304419.jpg' },
];

export function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, i) => (
          <img
            key={i}
            src={image.src}
            alt={`Apartment view ${i + 1}`}
            className="cursor-pointer rounded shadow-md hover:opacity-80"
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        slides={images}
      />
    </div>
  );
}