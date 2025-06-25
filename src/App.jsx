// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { UI } from "./components/UI";
import { Experience } from "./components/Experience";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Suspense } from "react";

import { TaidekouluPage } from './components/TaidekouluPage';
import { ViktorMarkPage } from './components/ViktorMarkPage';
import { KehystamoPage } from "./components/KehystamoPage";
import { VuokraaminenPage } from './components/VuokraaminenPage';
import { TilaustyoPage } from './components/TilaustyoPage';
import { YhteystiedotPage } from './components/YhteystiedotPage';

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
         <Route path="/taidekoulu" element={<TaidekouluPage />} />
        <Route path="/viktor-mark" element={<ViktorMarkPage />} />
        <Route path="/kehystamo" element={<KehystamoPage />} />
        <Route path="/vuokraaminen" element={<VuokraaminenPage />} />
        <Route path="/tilaustyo" element={<TilaustyoPage />} />
        <Route path="/yhteustiedot" element={<YhteystiedotPage />} />
      </Routes>
    </Router>
  );
}

export default App;
