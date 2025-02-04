import './App.css';
import { motion } from 'framer-motion';

const images = [
  {
    src: 'image1.jpg',
    title: 'Sunset Over the Hills',
    description: 'Captured during a late summer hike, this photo reflects the serene blend of warm hues and natural silhouettes.'
  },
  {
    src: 'image2.jpg',
    title: 'Whispers of the Forest',
    description: 'An intimate shot capturing the intricate details of moss-covered bark, emphasizing the quiet resilience of nature.'
  },
  {
    src: 'image3.jpg',
    title: 'Reflections',
    description: 'A still lake mirroring the dramatic sky above, illustrating the symmetry and balance in natural landscapes.'
  }
];

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        Alex Misra's Photography Portfolio
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-2xl shadow-smooth bg-white"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-64 object-cover hover:opacity-90 transition-opacity duration-300"
            />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                {image.title}
              </h2>
              <p className="text-gray-600 text-base">{image.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;
