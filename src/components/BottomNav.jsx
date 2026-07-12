import { Link, usePath } from "../navigation.jsx";
import { HomeIcon, SearchIcon, PlusIcon, ReelsIcon } from "./Icons.jsx";
import { currentUser } from "../data/mock.js";

const items = [
  { to: "/home", Icon: HomeIcon, label: "Home" },
  { to: "/explore", Icon: SearchIcon, label: "Search" },
  { to: "/create", Icon: PlusIcon, label: "Create" },
  { to: "/reels", Icon: ReelsIcon, label: "Reels" },
];

export function BottomNav() {
  const pathname = usePath();

  return (
    <nav className="bottom-nav">
      {items.map(({ to, Icon, label }) => (
        <Link key={label} to={to} className={pathname === to ? "active" : ""} aria-label={label}>
          <Icon />
        </Link>
      ))}
      <Link to="/profile" aria-label="Profile" className={pathname === "/profile" ? "active" : ""}>
        <img
          src={currentUser.avatar}
          alt=""
          style={{
            width: 26,
            height: 26,
            borderRadius: 999,
            objectFit: "cover",
            outline: pathname === "/profile" ? "2px solid var(--text)" : "none",
          }}
        />
      </Link>
    </nav>
  );
}
