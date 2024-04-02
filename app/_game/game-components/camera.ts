import { PerspectiveCamera } from 'three';

export const createCamera = () => {
  const camera = new PerspectiveCamera(45, 1, 0.5, 2000);
  camera.position.set(0, 0, 20);

  return camera;
};
