import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import AlbumView from "./components/AlbumView";

const albums = [
  {
    id: "sunset-over-the-hills",
    src: "image1.jpg",
    title: "Sunset Over the Hills",
    description: "Captured during a late summer hike, this photo reflects the serene blend of warm hues and natural silhouettes.",
  },
  {
    id: "whispers-of-the-forest",
    src: "image2.jpg",
    title: "Whispers of the Forest",
    description: "An intimate shot capturing the intricate details of moss-covered bark, emphasizing the quiet resilience of nature.",
  },
  {
    id: "reflections",
    src: "image3.jpg",
    title: "Reflections",
    description: "A still lake mirroring the dramatic sky above, illustrating the symmetry and balance in natural landscapes.",
  },
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Alex Misra's Photography Portfolio
        </h1>

        <Routes>
          {/* Homepage: Display album covers */}
          <Route
            path="/"
            element={
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {albums.map((album) => (
                  <Link to={`/album/${album.id}`} key={album.id}>
                    <motion.div
                      className="overflow-hidden rounded-2xl shadow-md bg-white"
                      whileHover={{ scale: 1.02 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <img
                        src={album.src}
                        alt={album.title}
                        className="w-full h-64 object-cover hover:opacity-90 transition-opacity duration-300"
                      />
                      <div className="p-4">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                          {album.title}
                        </h2>
                        <p className="text-gray-600 text-base">{album.description}</p>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            }
          />

          {/* Album Page: Show images in the album */}
          <Route path="/album/:albumId" element={<AlbumView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
