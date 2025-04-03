import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import AlbumView from "./components/AlbumView";

const albums = [
  {
    id: "9-20-24",
    src: "image1.jpg",
    title: "Album 1: 9/20/2024",
    description: "These photos were taken at an open space preserve not too far from Gunn. I enjoy visiting this place to relax, get some exercise, and appreciate the beauty of nature.",
  },
  {
    id: "3-24-2024",
    src: "image2.jpg",
    title: "Album 2: 3/24/2024",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: "4-3-2025",
    src: "image3.jpg",
    title: "3 Film Scans: 1/15/2024",
    description: "I took these photos on a Canon EOS Rebel G camera from my photography class. I tried to focus on three elements when taking these photos: light, shadow, and frame.",
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
