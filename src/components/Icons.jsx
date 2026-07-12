const P = (props) => ({
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  viewBox: "0 0 24 24",
  ...props,
});

export const HomeIcon = (props) => (
  <svg {...P(props)}>
    <path d="M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1v-8.5Z" />
  </svg>
);
export const SearchIcon = (props) => (
  <svg {...P(props)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);
export const CompassIcon = (props) => (
  <svg {...P(props)}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2.5 5-5 2.5 2.5-5 5-2.5Z" />
  </svg>
);
export const ReelsIcon = (props) => (
  <svg {...P(props)}>
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <path d="M10 9v6l5-3-5-3Z" />
  </svg>
);
export const MessageIcon = (props) => (
  <svg {...P(props)}>
    <path d="M21 12a8 8 0 1 1-3.2-6.4L21 4l-1.4 3.2A8 8 0 0 1 21 12Z" />
  </svg>
);
export const HeartIcon = (props) => (
  <svg {...P(props)}>
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
  </svg>
);
export const PlusIcon = (props) => (
  <svg {...P(props)}>
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <path d="M12 8v8M8 12h8" />
  </svg>
);
export const CommentIcon = (props) => (
  <svg {...P(props)}>
    <path d="M21 12a8 8 0 0 1-12 6.9L3 21l2-6a8 8 0 1 1 16-3Z" />
  </svg>
);
export const ShareIcon = (props) => (
  <svg {...P(props)}>
    <path d="m22 2-7 20-4-9-9-4 20-7Z" />
  </svg>
);
export const BookmarkIcon = (props) => (
  <svg {...P(props)}>
    <path d="M6 3h12v18l-6-4-6 4V3Z" />
  </svg>
);
export const MoreIcon = (props) => (
  <svg {...P(props)}>
    <circle cx="5" cy="12" r="1.5" />
    <circle cx="12" cy="12" r="1.5" />
    <circle cx="19" cy="12" r="1.5" />
  </svg>
);
export const SunIcon = (props) => (
  <svg {...P(props)}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);
export const MoonIcon = (props) => (
  <svg {...P(props)}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </svg>
);
export const CameraIcon = (props) => (
  <svg {...P(props)}>
    <path d="M23 19V8a2 2 0 0 0-2-2h-3.2l-1.5-2.2A2 2 0 0 0 14.6 3H9.4a2 2 0 0 0-1.7.8L6.2 6H3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2Z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);
export const XIcon = (props) => (
  <svg {...P(props)}>
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);
export const ChevronLeft = (props) => (
  <svg {...P(props)}>
    <path d="m15 6-6 6 6 6" />
  </svg>
);
export const ChevronRight = (props) => (
  <svg {...P(props)}>
    <path d="m9 6 6 6-6 6" />
  </svg>
);
export const MusicIcon = (props) => (
  <svg {...P(props)}>
    <path d="M9 18V5l12-2v13" />
    <circle cx="6" cy="18" r="3" />
    <circle cx="18" cy="16" r="3" />
  </svg>
);
export const SmileIcon = (props) => (
  <svg {...P(props)}>
    <circle cx="12" cy="12" r="9" />
    <path d="M8 14a5 5 0 0 0 8 0M9 9h.01M15 9h.01" />
  </svg>
);
export const MicIcon = (props) => (
  <svg {...P(props)}>
    <rect x="9" y="3" width="6" height="12" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
  </svg>
);
export const ImageIcon = (props) => (
  <svg {...P(props)}>
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-5-5-8 8" />
  </svg>
);
export const GridIcon = (props) => (
  <svg {...P(props)}>
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
);
export const TagIcon = (props) => (
  <svg {...P(props)}>
    <path d="M12 3H4a1 1 0 0 0-1 1v8l9 9 9-9-9-9Z" />
    <circle cx="8" cy="8" r="1.5" />
  </svg>
);
