import { useEffect, useState } from "react";
import { Link } from "../navigation.jsx";
import { AppShell } from "../components/AppShell.jsx";
import { Stories } from "../components/Stories.jsx";
import { PostCard } from "../components/PostCard.jsx";
import { posts, suggestions, currentUser } from "../data/mock.js";

export function Home() {
  const [visible, setVisible] = useState(3);

  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 400) {
        setVisible((value) => Math.min(value + 2, posts.length));
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AppShell>
      <div className="home-grid">
        <div>
          <Stories />
          {posts.slice(0, visible).map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
          {visible < posts.length && (
            <div className="skeleton" style={{ height: 400, marginBottom: 24 }} />
          )}
        </div>
        <aside className="home-side">
          <div className="home-side-head">
            <div className="post-avatar">
              <img src={currentUser.avatar} alt="" />
            </div>
            <div>
              <div className="name">{currentUser.username}</div>
              <div className="sub">{currentUser.name}</div>
            </div>
            <button>Switch</button>
          </div>
          <div className="suggest-title">
            <span>Suggested for you</span>
            <button>See All</button>
          </div>
          {suggestions.map((user) => (
            <div key={user.id} className="suggest-row">
              <div className="post-avatar">
                <img src={user.avatar} alt="" />
              </div>
              <div>
                <div className="name">{user.username}</div>
                <div className="sub">Suggested for you</div>
              </div>
              <button>Follow</button>
            </div>
          ))}
          <div className="footer-links">
            <Link to="/">About</Link> &middot; <a href="#">Help</a> &middot; <a href="#">Press</a>{" "}
            &middot; <a href="#">API</a> &middot; <a href="#">Jobs</a> &middot;{" "}
            <a href="#">Privacy</a> &middot; <a href="#">Terms</a> &middot;{" "}
            <a href="#">Locations</a> &middot; <a href="#">Language</a>
            <span className="copy">&copy; 2026 Instagram Clone</span>
          </div>
        </aside>
      </div>
    </AppShell>
  );
}
