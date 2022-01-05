import "./App.css";
import { Canvas } from "@react-three/fiber";
import { Stars, OrbitControls } from "@react-three/drei";
import "@picocss/pico/css/pico.min.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");

  const onSave = () => {
    console.log();
  };

  return (
    <>
      <header className="container">
        <span style={{ fontSize: 100 }}>🍕</span>
        <div className="data">
          <h1>Heya, I'm {name}</h1>
          <span>{role}</span>
          <span>{location}</span>
        </div>
      </header>
      <main className="container">
        <div className="grid">
          <label htmlFor="name">
            Name
            <input
              type="text"
              id="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label htmlFor="role">
            Role
            <input
              type="text"
              id="role"
              placeholder="Role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
            />
          </label>
          <label htmlFor="location">
            Location
            <input
              type="text"
              id="location"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </label>
        </div>
        <button onClick={() => onSave()}>Save</button>
      </main>
      <Canvas style={{ position: "fixed", top: 0, zIndex: -1 }}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={0.5}
          enablePan={false}
          enableRotate={false}
        />
        <Stars />
      </Canvas>
    </>
  );
}

export default App;
