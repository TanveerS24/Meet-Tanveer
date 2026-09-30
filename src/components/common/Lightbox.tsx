import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LightboxProps {
  isOpen: boolean;
  imageSrc: string | null;
  title: string | null;
  subtitle: string | null;
  onClose: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  imageSrc,
  title,
  subtitle,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && imageSrc && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 cursor-zoom-out"
          role="dialog"
          aria-modal="true"
          aria-label={title || 'Image preview'}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full bg-surface-elevated rounded-3xl border border-outline-variant overflow-hidden shadow-2xl cursor-default"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">close</span>
            </button>

            {/* Image display */}
            <div className="w-full max-h-[75vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={imageSrc}
                alt={title || 'Gallery render'}
                className="w-full h-full object-contain max-h-[75vh]"
              />
            </div>

            {/* Footer information */}
            <div className="p-6 flex items-center justify-between bg-surface-elevated">
              <div>
                <h3 className="font-headline font-bold text-lg text-on-surface">{title}</h3>
                {subtitle && (
                  <p className="font-body text-sm text-on-surface-variant">{subtitle}</p>
                )}
              </div>
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-full bg-surface-low text-on-surface font-label text-sm font-semibold hover:bg-surface-container"
              >
                Close (Esc)
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
