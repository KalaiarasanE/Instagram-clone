import { Link, usePath } from "../navigation.jsx";
import {
  HomeIcon,
  SearchIcon,
  CompassIcon,
  ReelsIcon,
  MessageIcon,
  HeartIcon,
  PlusIcon,
  MoreIcon,
  SunIcon,
  MoonIcon,
} from "./Icons.jsx";
import { useTheme } from "./Theme.jsx";
import { currentUser } from "../data/mock.js";

const items = [
  { to: "/home", label: "Home", Icon: HomeIcon },
  { to: "/explore", label: "Search", Icon: SearchIcon },
  { to: "/explore", label: "Explore", Icon: CompassIcon },
  { to: "/reels", label: "Reels", Icon: ReelsIcon },
  { to: "/messages", label: "Messages", Icon: MessageIcon },
  { to: "/notifications", label: "Notifications", Icon: HeartIcon },
  { to: "/create", label: "Create", Icon: PlusIcon },
];

export function Sidebar() {
  const pathname = usePath();
  const { theme, toggle } = useTheme();

  return (
    <aside className="sidebar">
      <Link to="/home" className="sidebar-logo">
        <span className="ig-logo">Instagram</span>
      </Link>
      {items.map(({ to, label, Icon }) => (
        <Link
          key={label}
          to={to}
          className={`sidebar-item ripple${pathname === to ? " active" : ""}`}
        >
          <Icon />
          <span>{label}</span>
        </Link>
      ))}
      <Link
        to="/profile"
        className={`sidebar-item ripple${pathname === "/profile" ? " active" : ""}`}
      >
        <img
          src={currentUser.avatar}
          alt=""
          style={{ width: 24, height: 24, borderRadius: 999, objectFit: "cover" }}
        />
        <span>Profile</span>
      </Link>

      <div className="sidebar-spacer" />

      <button className="theme-toggle ripple" onClick={toggle} aria-label="Toggle theme">
        {theme === "light" ? <MoonIcon /> : <SunIcon />}
        <span>{theme === "light" ? "Dark mode" : "Light mode"}</span>
      </button>
      <div className="sidebar-item">
        <MoreIcon />
        <span>More</span>
      </div>
    </aside>
  );
}
