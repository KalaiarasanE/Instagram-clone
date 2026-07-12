import { Link } from "../navigation.jsx";
import { HeartIcon, MessageIcon } from "./Icons.jsx";

export function MobileTopBar() {
  return (
    <header className="mobile-topbar">
      <Link to="/home">
        <span className="ig-logo">Instagram</span>
      </Link>
      <div className="top-actions">
        <Link to="/notifications" aria-label="Notifications">
          <HeartIcon />
        </Link>
        <Link to="/messages" aria-label="Messages">
          <MessageIcon />
        </Link>
      </div>
    </header>
  );
}
