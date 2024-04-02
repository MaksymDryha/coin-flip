import { WebGLRenderer } from 'three';

export const createRenderer = (canvasElId: string) => {
  const renderer = new WebGLRenderer({
    antialias: true,
    canvas: document.getElementById(canvasElId)!,
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(500, 500);

  return renderer;
};
