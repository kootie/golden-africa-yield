
import { SVGProps } from 'react';

export const GoldIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 3v3" />
    <path d="M18.5 6.5 16 9" />
    <path d="M21 12h-3" />
    <path d="M18.5 17.5 16 15" />
    <path d="M12 21v-3" />
    <path d="M5.5 17.5 8 15" />
    <path d="M3 12h3" />
    <path d="M5.5 6.5 8 9" />
    <circle cx="12" cy="12" r="4" />
  </svg>
);
