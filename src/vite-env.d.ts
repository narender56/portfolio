/// <reference types="vite/client" />

declare module 'react-tilt';
declare module 'maath/random/dist/maath-random.esm';
declare module 'react-vertical-timeline-component';


declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";

declare module '*.webp' {
    const ref: string;
    export default ref;
  }

