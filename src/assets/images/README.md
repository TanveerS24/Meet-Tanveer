# Portfolio Image Asset Directory

This directory contains the paths referenced across the portfolio components.
Place real images here with matching filenames to automatically replace the silhouette/gradient placeholders.

## Image Slots & Requirements

| Filename | Used In | Recommended Dimensions | Recommended Style / Framing |
|---|---|---|---|
| `hero-portrait.png` | Hero Section (`HeroSection.jsx`) | 1200 x 1800 px (PNG with transparency) | Full-body cutout or portrait with dramatic noir contrast, deep shadows, and warm orange rim lighting. |
| `about-portrait.png` | About Section (`AboutSection.jsx`) | 1000 x 1400 px (JPG/PNG/WebP) | Close-up moody developer portrait with noir lighting and fiery rim highlights. |
| `timeline-peak.png` | Timeline Section (`JourneySection.jsx`) | 1200 x 600 px (JPG/PNG/WebP) | Silhouette photo of developer standing atop a luminous platform / apex peak. |
| `footer-portrait.png` | Contact Section (`ContactSection.jsx`) | 1000 x 1400 px (JPG/PNG/WebP) | Dramatic closing portrait with warm backlight and confident posture. |
| `project-01.png` | Projects Section (`ProjectsSection.jsx`) | 1280 x 800 px (JPG/PNG/WebP) | High-contrast screenshot of AetherFlow real-time telemetry dashboard. |
| `project-02.png` | Projects Section (`ProjectsSection.jsx`) | 1280 x 800 px (JPG/PNG/WebP) | Mobile mockups of PulseSync health telemetry with dark UI & ECG charts. |
| `project-03.png` | Projects Section (`ProjectsSection.jsx`) | 1280 x 800 px (JPG/PNG/WebP) | Microservices routing topology / terminal dashboard for HyperScale API. |
| `project-04.png` | Projects Section (`ProjectsSection.jsx`) | 1280 x 800 px (JPG/PNG/WebP) | Component gallery showcase for NexusUI design kit. |
| `project-05.png` | Projects Section (`ProjectsSection.jsx`) | 1280 x 800 px (JPG/PNG/WebP) | AI chat / semantic agent workspace screenshot for Vanguard AI Copilot. |

## Notes
- `PhotoPlaceholder.jsx` handles missing images gracefully with a styled noir silhouette and rim light aura.
- When you add any of the files listed above, `PhotoPlaceholder` will detect and render it smoothly with a fade transition.
