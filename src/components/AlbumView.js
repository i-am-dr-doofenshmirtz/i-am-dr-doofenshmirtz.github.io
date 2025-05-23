import { useParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const albums = {
  "9-20-24": {
    title: "Late Afternoon Hikes",
    intro: "These photos were taken at an open space preserve not too far from Gunn. I enjoy visiting this place to relax, get some exercise, and appreciate the beauty of nature.",
    images: ["image1.jpg", "image1-1.jpg", "image1-2.jpg", "image1-3.jpg", "image1-4.jpg", "image1-5.jpg"],
  },
  "3-24-2024": {
    title: "The Quiet Looms",
    intro: "I took these photos with the intention of capturing a quiet and unsettling feeling.",
    images: ["image2.jpg", "image2-1.jpg", "image2-2.jpg", "image2-3.jpg", "image2-4.jpg", "image2-5.jpg", "image2-6.jpg"],
  },
  "4-3-2025": {
    title: "Film Scans",
    intro: "I took these photos on a Canon EOS Rebel G camera from my photography class. When taking these photos, I tried to focus on three elements: light, shadow, and frame.",
    images: ["image3.jpg", "image3-1.jpg", "image3-2.jpg", "image3-3.jpg", "image3-4.jpg", "image3-5.jpg"],
  },
  "9-10-2024": {
    title: "Abstraction",
    intro: "I took these photos on the Gunn High School campus. With these abstract photos, I tried to explore different elements (e.g. color, form, and texture) to evoke different emotions.",
    images: ["image4.jpg", "image4-1.jpg", "image4-2.jpg", "image4-3.jpg", "image4-4.jpg"],
  },
  "8-29-2024": {
    title: "Cracks",
    intro: "I took these photos on the Gunn High School campus. With these photos, I tried to evoke emotions of decay and transience.",
    images: ["image5.jpg", "image5-1.jpg", "image5-2.jpg", "image5-3.jpg", "image5-4.jpg", "image5-5.jpg"],
  },
  "1-15-2024": {
    title: "Rugged Beauty",
    intro: "I took these photos back in winter and in a heavily forested area to get that sort of lighting that is synonymous with the imperfections of nature.",
    images: ["image6.jpg", "image6-1.jpg", "image6-2.jpg", "image6-3.jpg", "image6-4.jpg"],
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