import { AnimationClip, AnimationMixer, LoopOnce } from 'three';

export const createNonRepeatableAnimation = (
  mixer: AnimationMixer,
  clip: AnimationClip,
) => {
  const animationAction = mixer.clipAction(clip);

  animationAction.setLoop(LoopOnce, 1);
  animationAction.clampWhenFinished = true;

  return animationAction;
};
