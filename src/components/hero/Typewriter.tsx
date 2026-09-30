import React, { useState, useEffect } from 'react';
import { useAnimationGate } from '../../motion/tokens';

const PHRASES = [
  "full stack apps",
  "3D worlds",
  "AR prototypes",
  "things at 2am"
];

export const Typewriter: React.FC = () => {
  const { isReducedMotion } = useAnimationGate();
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (isReducedMotion) {
      setText(PHRASES[0]);
      return;
    }

    const currentPhrase = PHRASES[phraseIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && text.length < currentPhrase.length) {
      // Typing phase: ~70ms per char
      timer = setTimeout(() => {
        setText(currentPhrase.slice(0, text.length + 1));
      }, 70);
    } else if (!isDeleting && text.length === currentPhrase.length) {
      // Hold phase: 1600ms
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 1600);
    } else if (isDeleting && text.length > 0) {
      // Deleting phase: ~40ms per char
      timer = setTimeout(() => {
        setText(currentPhrase.slice(0, text.length - 1));
      }, 40);
    } else if (isDeleting && text.length === 0) {
      // Move to next phrase
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % PHRASES.length);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, isReducedMotion]);

  if (isReducedMotion) {
    return (
      <span className="text-primary-container underline decoration-wavy font-extrabold">
        {PHRASES[0]}
      </span>
    );
  }

  return (
    <span
      className="inline-block relative"
      aria-label="Hi, I'm Tanveer! I build full stack apps"
    >
      {/* Invisible container reserving space of longest phrase to prevent layout shift */}
      <span className="invisible opacity-0 select-none font-extrabold underline decoration-wavy" aria-hidden="true">
        full stack apps
      </span>

      {/* Animated visible text */}
      <span className="absolute left-0 top-0 text-primary-container underline decoration-wavy font-extrabold whitespace-nowrap" aria-hidden="true">
        {text}
        <span className="inline-block w-1.5 h-8 md:h-10 bg-primary-container ml-1 align-middle rounded-full animate-pulse" />
      </span>
    </span>
  );
};
