import {
  TextureLoader,
  MeshStandardMaterial,
  CylinderGeometry,
  Mesh,
} from 'three';

export const createCoin = () => {
  const tailTexture = new TextureLoader().load('./tail.svg');
  const headsTexture = new TextureLoader().load('./heads.svg');
  const materialParameters = { metalness: 0.5, roughness: 0.5 };

  const tailMaterial = new MeshStandardMaterial({
    map: tailTexture,
    ...materialParameters,
  });
  const headsMaterial = new MeshStandardMaterial({
    map: headsTexture,
    ...materialParameters,
  });

  const edgeMaterial = new MeshStandardMaterial({
    color: '#e5ffe5',
    ...materialParameters,
  });

  const geometry = new CylinderGeometry(3, 3, 0.5, 32, 20, false);

  return new Mesh(geometry, [edgeMaterial, tailMaterial, headsMaterial]);
};
