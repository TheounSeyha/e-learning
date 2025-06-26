class ImageGallery {
  constructor(containerId, images = []) {
    this.container = document.getElementById(containerId);
    this.images = images;
    this.render();
  }

  render() {
    // Create the masonry-style container using Tailwind's `columns-*`
    const masonryContainer = document.createElement('div');
    masonryContainer.className = 'columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4' ;

    this.images.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
      img.alt = 'Activity';
      img.className = 'w-full rounded-xl shadow mb-4 break-inside-avoid';
      masonryContainer.appendChild(img);
    });

    this.container.appendChild(masonryContainer);
  }
}

// Example image data
const imagePaths = [
  'asset/activityImage/activity.jpg', './asset/activityImage/activity4.jpg',
  'asset/activityImage/activyti1.jpg', './asset/activityImage/activity5.jpg',
  'asset/activityImage/actyvity.jpg', './asset/activityImage/activity6.jpg',
  'asset/activityImage/acvity2.jpg', './asset/image1.jpg',
  'asset/activityImage/actyvity.jpg', 'asset/activityImage/activyti1.jpg',
  './asset/activityImage/activity3.jpg', 'asset/activityImage/actyvity.jpg'
];

// Initialize the gallery
new ImageGallery('activity-gallery', imagePaths);
