import React from 'react';
import { Html, useProgress } from '@react-three/drei';

const CanvasLoader = () => {
  const { progress } = useProgress();

  return (
    <Html className="flex flex-col justify-center items-center" as="div" center>
      <span className="canvas-load"></span>
      <p
        style={{
          fontSize: 20,
          color: '#F1F1F1',
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

export default CanvasLoader;
