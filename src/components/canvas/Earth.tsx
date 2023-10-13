import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, useAnimations } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Earth = () => {
  const earth = useGLTF('./threejs/t-rex/scene.gltf');
  const { actions } = useAnimations(earth.animations, earth.scene)

  useEffect(() => {
    console.log(actions);
    actions['walk loop']?.play?.();
    actions['roar left']?.play?.();
  }, []);

  return (
    <>
      <spotLight position={[20, 50, 10]} angle={2} penumbra={2} intensity={5} castShadow shadow-mapSize={1024} />
      <primitive object={earth.scene} scale={0.4} rotation-y={-33} />
    </>
  );
};

export const EarthCanvas = () => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      color='#dddddd'
      camera={{
        fov: 45,
        near: 0.1,
        far: 400,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate={false}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};
