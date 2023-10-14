import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, useAnimations } from '@react-three/drei';

import CanvasLoader from '../Loader';
import { useIsMobile } from '../../hooks';

const Dinosaur = () => {
  const isMobile = useIsMobile();

  const earth = useGLTF('./threejs/t-rex/scene.gltf');
  const { actions } = useAnimations(earth.animations, earth.scene);

  useEffect(() => {
    actions['walk loop']?.play?.();
    actions['roar left']?.play?.();
  }, []);

  return (
    <>
      <spotLight position={[20, 50, 10]} angle={2} penumbra={2} intensity={5} castShadow shadow-mapSize={1024} />
      <primitive object={earth.scene} scale={isMobile ? 0.7 : 0.4} rotation-y={-33} />
    </>
  );
};

export const DinosaurCanvas = () => {

  return (
    <Canvas
      frameloop="always"
      id="canvasRef"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 400,
        position: [-4, 3, 6],
      }}

      onTouchMove={() => console.log('touch')}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={false}
        />
        <Dinosaur />
        <Preload all />
      </Suspense>
    </Canvas>
  );
};
