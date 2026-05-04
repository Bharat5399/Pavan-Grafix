import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

const FloatingShape = ({ position, rotation, scale, geometry, color }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.003;
      // Pulse scale slightly
      const pulse = Math.sin(state.clock.elapsedTime + position[0]) * 0.05;
      meshRef.current.scale.setScalar(scale + pulse);
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <primitive object={geometry} attach="geometry" />
        <meshStandardMaterial 
          color={color} 
          wireframe={Math.random() > 0.7}
          roughness={0.1}
          metalness={0.9}
          emissive={color}
          emissiveIntensity={0.3}
          transparent={true}
          opacity={0.8}
        />
      </mesh>
    </Float>
  );
};

const InteractiveGroup = ({ children }) => {
  const groupRef = useRef();

  useFrame((state) => {
    // Smoothly rotate the entire group based on mouse pointer position
    const targetX = (state.pointer.x * Math.PI) / 4;
    const targetY = (state.pointer.y * Math.PI) / 4;
    
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX, 0.05);
  });

  return <group ref={groupRef}>{children}</group>;
};

const Background3D = () => {
  // Generate random shapes
  const shapes = useMemo(() => {
    const geometries = [
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.TorusGeometry(0.7, 0.2, 16, 100),
      new THREE.OctahedronGeometry(1),
      new THREE.ConeGeometry(0.8, 1.5, 32),
      new THREE.SphereGeometry(0.8, 32, 32),
      new THREE.IcosahedronGeometry(1, 0)
    ];

    const colors = ['#4a00e0', '#ff007f', '#00f0ff', '#8a2be2'];

    return Array.from({ length: 40 }).map((_, i) => ({
      position: [
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 25,
        (Math.random() - 0.5) * 15 - 5
      ],
      rotation: [Math.random() * Math.PI, Math.random() * Math.PI, 0],
      scale: Math.random() * 0.6 + 0.2,
      geometry: geometries[Math.floor(Math.random() * geometries.length)],
      color: colors[Math.floor(Math.random() * colors.length)],
      id: i
    }));
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
        <color attach="background" args={['#050510']} />
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#00f0ff" />
        <pointLight position={[-10, -10, -10]} intensity={1.5} color="#ff007f" />
        
        <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} fade speed={1.5} />

        <InteractiveGroup>
          {shapes.map((shape) => (
            <FloatingShape key={shape.id} {...shape} />
          ))}
        </InteractiveGroup>
        
        {/* Fog for depth */}
        <fog attach="fog" args={['#050510', 5, 20]} />
      </Canvas>
    </div>
  );
};

export default Background3D;
