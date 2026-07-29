export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'GitHub', href: '/github' },
  { label: 'Timeline', href: '/timeline' },
  { label: 'Experience', href: '/experience' },
  { label: 'Achievements', href: '/achievements' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
];
