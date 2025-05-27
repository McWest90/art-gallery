// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { UI } from "./components/UI";
import { Experience } from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/book"
          element={
            <>
              <UI />
              <Loader />
              <Canvas
                shadows
                camera={{
                  position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
                  fov: 45,
                }}
              >
                <group position-y={0}>
                  <Suspense fallback={null}>
                    <Experience />
                  </Suspense>
                </group>
              </Canvas>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
