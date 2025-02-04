import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const albums = {
  "sunset-over-the-hills": {
    title: "Sunset Over the Hills",
    intro: "This album captures the beauty of late summer hikes, showcasing breathtaking sunsets over rolling landscapes.",
    images: ["image1.jpg", "image1-1.jpg", "image1-2.jpg"],
  },
  "whispers-of-the-forest": {
    title: "Whispers of the Forest",
    intro: "A deep dive into the quiet resilience of nature, focusing on intricate textures and serene woodland moments.",
    images: ["image2.jpg", "image2-1.jpg", "image2-2.jpg"],
  },
  "reflections": {
    title: "Reflections",
    intro: "A collection exploring symmetry and balance in nature, featuring stunning water reflections and dynamic skies.",
    images: ["image3.jpg", "image3-1.jpg", "image3-2.jpg"],
  },
};

function AlbumView() {
  const { albumId } = useParams();
  const album = albums[albumId];

  // State to track which image is clicked
  const [selectedImage, setSelectedImage] = useState(null);

  if (!album) {
    return <h2 className="text-center text-2xl font-bold mt-8">Album not found</h2>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
        {album.title}
      </h1>
      <p className="text-lg text-center text-gray-600 mb-8">{album.intro}</p>

      {/* Image Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {album.images.map((src, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-2xl shadow-md bg-white cursor-pointer"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={`/${src}`}  // Remove `/public/` from the path
              alt={album.title}
              className="w-full h-64 object-cover hover:opacity-90 transition-opacity duration-300"
            />
          </motion.div>
        ))}
      </div>

      {/* Full-Screen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={`/${selectedImage}`}  // Remove `/public/` from the path
              alt="Expanded view"
              className="max-w-full max-h-full rounded-lg shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default AlbumView;