import { AudioListener, Audio, AudioLoader } from 'three';

export const createAudio = (listener: AudioListener, resourceSrc: string) => {
  const audio = new Audio(listener);

  const audioLoader = new AudioLoader();
  audioLoader.load(resourceSrc, function (buffer) {
    audio.setBuffer(buffer);
    audio.setLoop(false);
    audio.setVolume(0.5);
  });

  return audio;
};
