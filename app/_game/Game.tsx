'use client';

import { useEffect, useRef, useState } from 'react';
import {
  AnimationAction,
  Audio,
  Mesh,
  CylinderGeometry,
  AudioListener,
  AnimationMixer,
  Clock,
} from 'three';

import { Button, Select } from '@/app/_components';

import {
  createCamera,
  createScene,
  createCoin,
  createRenderer,
  headsEndingFlipAnimationClip,
  tailEndingFlipAnimationClip,
  createAudio,
} from './game-components';

import { createNonRepeatableAnimation } from './utils';

type CoinFlipAnimationRef = {
  headsEndingFlipAnimation: AnimationAction;
  tailEndingFlipAnimation: AnimationAction;
};

type CoinSide = 'heads' | 'tail';

export const Game = () => {
  const [preferredCoinSide, setPreferredCoinSide] = useState<CoinSide>('heads');

  const flipAnimationsRef = useRef<CoinFlipAnimationRef>();
  const coinDropSoundRef = useRef<Audio>();
  const coinMeshRef = useRef<Mesh<CylinderGeometry>>();

  const handlePreferredCoinSideChange = (newValue: CoinSide) => {
    setPreferredCoinSide(newValue);
  };

  const flipCoin = () => {
    if (!flipAnimationsRef.current) return;

    const { tailEndingFlipAnimation, headsEndingFlipAnimation } =
      flipAnimationsRef.current;

    if (preferredCoinSide === 'heads') {
      tailEndingFlipAnimation.stop();
      headsEndingFlipAnimation.reset().play();
    } else {
      headsEndingFlipAnimation.stop();
      tailEndingFlipAnimation.reset().play();
    }
    setTimeout(() => {
      if (coinDropSoundRef.current) {
        coinDropSoundRef.current.play();
      }
    }, 2000);
  };

  useEffect(() => {
    const renderer = createRenderer('game-canvas');

    const scene = createScene();

    const camera = createCamera();

    const listener = new AudioListener();
    camera.add(listener);

    const coinDropSound = createAudio(listener, './coin-drop-sound.mp3');
    coinDropSoundRef.current = coinDropSound;

    const coin = createCoin();
    coinMeshRef.current = coin;

    coin.position.set(0, 0, -13);
    coin.rotation.set(1.5, 1.9, 0);

    scene.add(coin);

    const animationMixer = new AnimationMixer(coin);

    const tailEndingFlipAnimation = createNonRepeatableAnimation(
      animationMixer,
      tailEndingFlipAnimationClip,
    );
    const headsEndingFlipAnimation = createNonRepeatableAnimation(
      animationMixer,
      headsEndingFlipAnimationClip,
    );

    flipAnimationsRef.current = {
      headsEndingFlipAnimation,
      tailEndingFlipAnimation,
    };

    const clock = new Clock();

    renderer.setAnimationLoop(() => {
      animationMixer.update(clock.getDelta());
      renderer.render(scene, camera);
    });
  }, []);

  return (
    <section className="w-[500px] h-[500px] mx-auto">
      <canvas className="mb-5" id="game-canvas"></canvas>
      <section className="flex gap-2 items-center justify-between">
        <Select
          options={[
            {
              value: 'heads',
              label: 'Heads',
            },
            {
              value: 'tail',
              label: 'Tail',
            },
          ]}
          onChange={handlePreferredCoinSideChange}
          value={preferredCoinSide}
          label="Choose your coin side:"
        />
        <Button onClick={flipCoin}>Flip the coin!</Button>
      </section>
    </section>
  );
};
