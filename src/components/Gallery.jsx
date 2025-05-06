export function Gallery() {
  const images = [
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/539304409.jpg',
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/539304384.jpg'
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((src, i) => (
        <img key={i} src={src} alt={`Apartment view ${i + 1}`}
             className="rounded-lg shadow-lg w-full h-72 object-cover transition-transform hover:scale-105" />
      ))}
    </div>
  );
}