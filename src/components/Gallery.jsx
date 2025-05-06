export function Gallery() {
  const images = [
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/539304409.jpg',
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/539304384.jpg',
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/539304377.jpg',
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/539304397.jpg',
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/539304419.jpg',
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/539304412.jpg',
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/539304390.jpg',
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/539304381.jpg',
    'https://cf.bstatic.com/xdata/images/hotel/max1024x768/539304402.jpg'
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Apartment photo ${index + 1}`}
          className="rounded-lg shadow-lg w-full h-72 object-cover transform transition-transform hover:scale-105"
        />
      ))}
    </div>
  );
}