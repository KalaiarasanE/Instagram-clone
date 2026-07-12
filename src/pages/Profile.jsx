import { useState } from "react";
import { AppShell } from "../components/AppShell.jsx";
import { currentUser, explorePhotos, highlights } from "../data/mock.js";
import { GridIcon, ReelsIcon, BookmarkIcon, TagIcon } from "../components/Icons.jsx";

const tabs = [
  { key: "posts", label: "Posts", Icon: GridIcon },
  { key: "reels", label: "Reels", Icon: ReelsIcon },
  { key: "saved", label: "Saved", Icon: BookmarkIcon },
  { key: "tagged", label: "Tagged", Icon: TagIcon },
];

export function ProfilePage() {
  const [tab, setTab] = useState("posts");

  return (
    <AppShell>
      <div className="app-container wide">
        <div className="profile-header">
          <div className="profile-avatar">
            <img src={currentUser.avatar} alt="" />
          </div>
          <div className="profile-info">
            <h1>
              {currentUser.username}
              {currentUser.verified && <span className="verified">&#10003;</span>}
              <div className="profile-actions">
                <button className="btn-ghost">Edit profile</button>
                <button className="btn-ghost">View archive</button>
              </div>
            </h1>
            <div className="profile-stats">
              <div>
                <b>{currentUser.posts}</b>posts
              </div>
              <div>
                <b>{currentUser.followers?.toLocaleString()}</b>followers
              </div>
              <div>
                <b>{currentUser.following}</b>following
              </div>
            </div>
            <div className="profile-bio">
              <b>{currentUser.name}</b>
              {currentUser.bio?.split("\n").map((line, index) => (
                <div key={index}>{line}</div>
              ))}
              <a href={`https://${currentUser.website}`} target="_blank" rel="noreferrer">
                {currentUser.website}
              </a>
            </div>
          </div>
        </div>

        <div className="highlights">
          {highlights.map((highlight) => (
            <div key={highlight.id} className="highlight">
              <div className="highlight-ring">
                <img src={highlight.cover} alt="" />
              </div>
              <div className="highlight-name">{highlight.name}</div>
            </div>
          ))}
          <div className="highlight">
            <div
              className="highlight-ring"
              style={{
                display: "grid",
                placeItems: "center",
                fontSize: 30,
                color: "var(--text-muted)",
              }}
            >
              +
            </div>
            <div className="highlight-name">New</div>
          </div>
        </div>

        <div className="profile-tabs">
          {tabs.map(({ key, label, Icon }) => (
            <div
              key={key}
              className={`profile-tab${tab === key ? " active" : ""}`}
              onClick={() => setTab(key)}
            >
              <Icon /> {label}
            </div>
          ))}
        </div>

        <div className="profile-grid">
          {explorePhotos.map((src, index) => (
            <div key={index} className="explore-cell">
              <img src={src} alt="" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
