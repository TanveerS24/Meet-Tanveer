import React, { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { StickerBadge } from './StickerBadge';
import { useAnimationGate } from '../../motion/tokens';
import { profileData } from '../../content/profile';

export const HeroBlobs: React.FC = () => {
  const { isReducedMotion } = useAnimationGate();
  const heroRef = useRef<HTMLDivElement>(null);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Motion values for smooth 3-layer depth interpolation
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Layer 1: Background Blobs (mint & coral) - depth factor ~12px
  const bgX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const bgY = useSpring(mouseY, { stiffness: 120, damping: 20 });

  // Layer 2: Yellow Blob behind Photo - depth factor ~20px
  const blobX = useSpring(mouseX, { stiffness: 180, damping: 22 });
  const blobY = useSpring(mouseY, { stiffness: 180, damping: 22 });

  // Layer 3: Stickers - depth factor ~28px
  const stickerX = useSpring(mouseX, { stiffness: 240, damping: 25 });
  const stickerY = useSpring(mouseY, { stiffness: 240, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isReducedMotion || isTouchDevice || !heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const normX = (e.clientX - centerX) / (rect.width / 2);
    const normY = (e.clientY - centerY) / (rect.height / 2);

    mouseX.set(normX * 14); // max shift ~14px (Layer 1)
    mouseY.set(normY * 14);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full flex items-center justify-center py- space-md lg:py-0 select-none"
    >
      <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
        {/* Layer 1: Ambient Background Blobs */}
        <motion.div
          style={{ x: bgX, y: bgY }}
          className="absolute -top-12 -left-12 w-64 h-64 rounded-full bg-secondary-container/25 blur-3xl pointer-events-none -z-10"
        />
        <motion.div
          style={{ x: bgX, y: bgY }}
          className="absolute -bottom-12 -right-12 w-64 h-64 rounded-full bg-primary-container/20 blur-3xl pointer-events-none -z-10"
        />

        {/* Layer 2: Organic Sunny Yellow Blob Base */}
        <motion.div
          style={{
            x: blobX,
            y: blobY,
          }}
          className="absolute inset-0 rounded-[42%_58%_70%_30%/45%_45%_55%_55%] bg-[#FFC93C] shadow-lg transform -rotate-3 transition-transform duration-700 hover:rotate-2"
        />

        {/* Center Photo Avatar Frame */}
        <div className="relative z-10 w-[82%] h-[82%] rounded-[40%_60%_60%_40%/50%_50%_50%_50%] overflow-hidden bg-surface-elevated border-4 border-surface-elevated shadow-md">
          <img
            src={profileData.photoPlaceholder}
            alt={profileData.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Layer 3: Interactive Floating Stickers */}
        {/* Sticker 1: Blue - Full Stack (Top Left) */}
        <motion.div
          style={{ x: stickerX, y: stickerY }}
          className="absolute -top-4 -left-4 z-20"
        >
          <StickerBadge
            label="Full Stack"
            rotateDeg={-6}
            bobDuration={3.2}
            bobDelay={0}
            icon={
              <span className="w-6 h-6 rounded-lg bg-[#5B9BFF]/20 text-[#2C64C7] flex items-center justify-center font-code text-xs font-bold">
                &lt;/&gt;
              </span>
            }
          />
        </motion.div>

        {/* Sticker 2: Mint - AR & Blender (Bottom Right) */}
        <motion.div
          style={{ x: stickerX, y: stickerY }}
          className="absolute bottom-1 -right-6 z-20"
        >
          <StickerBadge
            label="AR & Blender"
            rotateDeg={8}
            bobDuration={4.0}
            bobDelay={0.5}
            icon={
              <span className="w-6 h-6 rounded-lg bg-secondary-container/40 text-secondary flex items-center justify-center">
                <span className="material-symbols-outlined text-[16px]">view_in_ar</span>
              </span>
            }
          />
        </motion.div>

        {/* Sticker 3: Coral - SIH '25 Winner (Bottom Left) */}
        <motion.div
          style={{ x: stickerX, y: stickerY }}
          className="absolute -bottom-5 left-2 z-20"
        >
          <StickerBadge
            label="SIH '25 Winner"
            rotateDeg={-4}
            bobDuration={3.6}
            bobDelay={1.0}
            icon={
              <span className="w-6 h-6 rounded-lg bg-primary-container/20 text-primary flex items-center justify-center">
                <span className="material-symbols-outlined text-[16px]">emoji_events</span>
              </span>
            }
          />
        </motion.div>
      </div>
    </div>
  );
};
