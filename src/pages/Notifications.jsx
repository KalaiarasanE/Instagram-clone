import { useState } from "react";
import { AppShell } from "../components/AppShell.jsx";
import { notifications, suggestions } from "../data/mock.js";

function group(time) {
  if (["2m", "1h", "3h", "5h"].includes(time)) return "Today";
  if (time === "1d" || time === "2d") return "This week";
  return "Earlier";
}

export function NotificationsPage() {
  const [followed, setFollowed] = useState({});
  const groups = {};

  notifications.forEach((notification) => {
    const groupName = group(notification.time);
    groups[groupName] = groups[groupName] || [];
    groups[groupName].push(notification);
  });

  return (
    <AppShell>
      <div className="app-container">
        <h2 style={{ padding: "16px", margin: 0 }}>Notifications</h2>
        {Object.entries(groups).map(([groupName, items]) => (
          <div key={groupName}>
            <div className="notif-section-title">{groupName}</div>
            <div className="notif-list">
              {items.map((notification) => {
                const isFollowing = followed[notification.id] ?? notification.followed;
                return (
                  <div key={notification.id} className="notif-item">
                    <img src={notification.user.avatar} alt="" />
                    <div className="text">
                      <b>{notification.user.username}</b> {notification.text}{" "}
                      <span className="time">{notification.time}</span>
                    </div>
                    {notification.type === "follow" ? (
                      <button
                        onClick={() =>
                          setFollowed((value) => ({
                            ...value,
                            [notification.id]: !value[notification.id],
                          }))
                        }
                        className="btn-primary"
                        style={{
                          padding: "6px 14px",
                          fontSize: 13,
                          background: isFollowing ? "var(--bg-soft)" : "var(--accent)",
                          color: isFollowing ? "var(--text)" : "#fff",
                        }}
                      >
                        {isFollowing ? "Following" : "Follow"}
                      </button>
                    ) : (
                      notification.thumb && (
                        <img className="thumb" src={notification.thumb} alt="" />
                      )
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
        <div className="notif-section-title">Suggested for you</div>
        {suggestions.slice(0, 4).map((user) => (
          <div key={user.id} className="notif-item">
            <img src={user.avatar} alt="" />
            <div className="text">
              <b>{user.username}</b>
              <div style={{ color: "var(--text-muted)", fontSize: 12 }}>{user.name}</div>
            </div>
            <button className="btn-primary" style={{ padding: "6px 14px", fontSize: 13 }}>
              Follow
            </button>
          </div>
        ))}
      </div>
    </AppShell>
  );
}
