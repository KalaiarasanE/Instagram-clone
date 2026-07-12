import { useMemo, useState } from "react";
import { AppShell } from "../components/AppShell.jsx";
import { explorePhotos, exploreCategories } from "../data/mock.js";
import { HeartIcon, CommentIcon } from "../components/Icons.jsx";

export function Explore() {
  const [cat, setCat] = useState(exploreCategories[0]);
  const [q, setQ] = useState("");

  const stats = useMemo(
    () =>
      explorePhotos.map((_, index) => ({
        likes: `${(((index * 1.7) % 9) + 1).toFixed(1)}k`,
        comments: (index * 37) % 200,
      })),
    [],
  );

  return (
    <AppShell>
      <div className="app-container wide">
        <div className="explore-search">
          <input value={q} onChange={(event) => setQ(event.target.value)} placeholder="Search" />
        </div>
        <div className="explore-cats">
          {exploreCategories.map((category) => (
            <button
              key={category}
              className={`explore-chip ripple${category === cat ? " active" : ""}`}
              onClick={() => setCat(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="explore-grid">
          {explorePhotos.map((src, index) => (
            <div key={src + index} className={`explore-cell${index % 7 === 2 ? " tall" : ""}`}>
              <img src={src} alt="" loading="lazy" />
              <div className="overlay">
                <div className="row">
                  <HeartIcon />
                  <span>{stats[index].likes}</span>
                </div>
                <div className="row">
                  <CommentIcon />
                  <span>{stats[index].comments}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
