import {
  Scene,
  TextureLoader,
  RepeatWrapping,
  AmbientLight,
  DirectionalLight,
} from 'three';

export const createScene = () => {
  const scene = new Scene();

  const woodTexture = new TextureLoader().load('./wood-texture.png');

  woodTexture.repeat.set(6, 6);
  woodTexture.wrapS = RepeatWrapping;
  woodTexture.wrapT = RepeatWrapping;

  scene.background = woodTexture;

  const directionalLight = new DirectionalLight('#fff', 1);
  directionalLight.position.set(0, 0, 21);

  const ambientLight = new AmbientLight('#fff', 2);
  scene.add(ambientLight, directionalLight);

  return scene;
};
