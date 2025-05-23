import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import AlbumView from "./components/AlbumView";

const albums = [
  {
    id: "9-20-24",
    src: "image1.jpg",
    title: "Late Afternoon Hikes",
    description: "These photos were taken at an open space preserve not too far from Gunn. I enjoy visiting this place to relax, get some exercise, and appreciate the beauty of nature.",
  },
  {
    id: "3-24-2024",
    src: "image2.jpg",
    title: "The Quiet Looms",
    description: "I took these photos with the intention of capturing a quiet and unsettling feeling.",
  },
  {
    id: "4-3-2025",
    src: "image3.jpg",
    title: "Film Scans",
    description: "I took these photos on a Canon EOS Rebel G camera from my photography class. When taking these photos, I tried to focus on three elements: light, shadow, and frame.",
  },
  {
    id: "9-10-2024",
    src: "image4.jpg",
    title: "Abstraction",
    description: "I took these photos on the Gunn High School campus. With these abstract photos, I tried to explore different elements (e.g. color, form, and texture) to evoke different emotions.",
  },
  {
    id: "8-29-2024",
    src: "image5.jpg",
    title: "Cracks",
    description: "I took these photos on the Gunn High School campus. With these photos, I tried to evoke emotions of decay and transience.",
  },
  {
    id: "1-15-2024",
    src: "image6.jpg",
    title: "Ruggged Beauty",
    description: "I took these photos back in winter and in a heavily forested area to get that sort of lighting that is synonymous with the imperfections of nature.",
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
