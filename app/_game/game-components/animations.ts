import { NumberKeyframeTrack, AnimationClip } from 'three';

const headsEndingKeyFrameTrack = new NumberKeyframeTrack(
  '.rotation[x]',
  [0, 2],
  [0, 17.2],
);

const tailEndingKeyFrameTrack = new NumberKeyframeTrack(
  '.rotation[x]',
  [0, 2],
  [0, 20.5],
);

const liftKeyFrameTrack = new NumberKeyframeTrack(
  '.position[z]',
  [0, 0.7, 1, 1.3, 2],
  [-13, 3, 4, 3, -13],
);

const wingingKeyFrameTrack = new NumberKeyframeTrack(
  '.rotation[z]',
  [0, 0.7, 0.8, 1, 2, 2.05, 2.05, 2.1, 2.2, 2.3, 2.4, 2.5],
  [0, 0, -0.5, -0.5, 0.5, 0.5, -0.5, 0, -0.3, 0.1, -0.1, 0],
);

export const headsEndingFlipAnimationClip = new AnimationClip(
  'tail-to-heads-flip',
  -1,
  [headsEndingKeyFrameTrack, liftKeyFrameTrack, wingingKeyFrameTrack],
);

export const tailEndingFlipAnimationClip = new AnimationClip(
  'heads-to-tail-flip',
  -1,
  [tailEndingKeyFrameTrack, liftKeyFrameTrack, wingingKeyFrameTrack],
);
