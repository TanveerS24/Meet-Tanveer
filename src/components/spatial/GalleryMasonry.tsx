import React, { useState } from 'react';
import { Lightbox } from '../common/Lightbox';
import { trackEvent } from '../../analytics/AnalyticsProvider';

interface GalleryItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  imageSrc: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'cyber-studio',
    title: 'Isometric Cyber-Studio',
    subtitle: 'Blender 4.2 Cycles • Volumetric lighting & ambient occlusion',
    badge: '4K Render',
    imageSrc: '/placeholders/render1_cyberpunk.webp',
  },
  {
    id: 'roche-hud',
    title: 'Clinical Workflow HUD',
    subtitle: 'Unity & WebXR • Hands-free volumetric gestures',
    badge: 'Roche 2026',
    imageSrc: '/placeholders/render2_roche_hud.webp',
  },
];

export const GalleryMasonry: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  const handleOpenImage = (item: GalleryItem) => {
    setSelectedImage(item);
    trackEvent('gallery_lightbox_open', { item: item.id });
  };

  return (
    <div className="flex flex-col gap-gutter h-full justify-between">
      {galleryItems.map((item) => (
        <div
          key={item.id}
          onClick={() => handleOpenImage(item)}
          className="group relative rounded-2xl bg-surface-elevated border border-outline-variant p-3 shadow-sm overflow-hidden hover:-translate-y-0.5 transition-all cursor-pointer focus-within:ring-2 focus-within:ring-primary-container"
          tabIndex={0}
          role="button"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') handleOpenImage(item);
          }}
        >
          <div className="h-36 rounded-squircle overflow-hidden bg-surface-low relative">
            <img
              src={item.imageSrc}
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
              <span className="material-symbols-outlined text-[24px]">zoom_in</span>
            </div>
          </div>
          <div className="pt-2.5 px-1 flex items-center justify-between">
            <div>
              <p className="font-headline font-bold text-sm text-on-surface">{item.title}</p>
              <p className="font-body text-xs text-on-surface-variant line-clamp-1">{item.subtitle}</p>
            </div>
            <span className="px-2 py-0.5 rounded-full bg-surface-low font-code text-[11px] text-on-surface-variant shrink-0 font-medium">
              {item.badge}
            </span>
          </div>
        </div>
      ))}

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={!!selectedImage}
        imageSrc={selectedImage?.imageSrc || null}
        title={selectedImage?.title || null}
        subtitle={selectedImage?.subtitle || null}
        onClose={() => setSelectedImage(null)}
      />
    </div>
  );
};
