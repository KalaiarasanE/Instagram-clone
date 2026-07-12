import { useEffect, useState } from "react";
import { stories, currentUser } from "../data/mock.js";
import { XIcon, ChevronLeft, ChevronRight } from "./Icons.jsx";

export function Stories() {
  const [active, setActive] = useState(null);
  const [imgIdx, setImgIdx] = useState(0);
  const current = active !== null ? stories[active] : null;

  useEffect(() => {
    if (active === null) return undefined;
    setImgIdx(0);
    const timer = setInterval(() => {
      setImgIdx((index) => {
        const currentStory = stories[active];
        if (index + 1 >= currentStory.images.length) {
          setActive((value) => (value !== null && value + 1 < stories.length ? value + 1 : null));
          return 0;
        }
        return index + 1;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [active]);

  const prev = () => setActive((value) => (value !== null && value > 0 ? value - 1 : value));
  const next = () =>
    setActive((value) => (value !== null && value + 1 < stories.length ? value + 1 : null));

  return (
    <>
      <div className="stories">
        <div className="story">
          <div className="story-ring" style={{ background: "var(--border)", position: "relative" }}>
            <img src={currentUser.avatar} alt="" className="story-avatar" />
            <span
              style={{
                position: "absolute",
                right: -2,
                bottom: -2,
                width: 22,
                height: 22,
                borderRadius: 999,
                background: "var(--accent)",
                color: "#fff",
                display: "grid",
                placeItems: "center",
                border: "2px solid var(--bg-elev)",
                fontSize: 14,
                fontWeight: 700,
                lineHeight: 1,
              }}
            >
              +
            </span>
          </div>
          <div className="story-name">Your story</div>
        </div>
        {stories.map((story, index) => (
          <div
            key={story.id}
            className={`story${story.viewed ? " viewed" : ""}`}
            onClick={() => setActive(index)}
          >
            <div className="story-ring">
              <img src={story.user.avatar} alt={story.user.username} className="story-avatar" />
            </div>
            <div className="story-name">{story.user.username}</div>
          </div>
        ))}
      </div>

      {current && (
        <div className="story-viewer" onClick={() => setActive(null)}>
          <div className="story-viewer-frame" onClick={(event) => event.stopPropagation()}>
            <div className="story-progress">
              {current.images.map((_, index) => (
                <span
                  key={index}
                  className={index < imgIdx ? "done" : index === imgIdx ? "active" : ""}
                />
              ))}
            </div>
            <div className="story-header">
              <img src={current.user.avatar} alt="" />
              <span className="name">{current.user.username}</span>
              <span className="time">{current.time}</span>
              <button className="story-close" onClick={() => setActive(null)} aria-label="Close">
                <XIcon />
              </button>
            </div>
            <img src={current.images[imgIdx]} alt="" />
            <button className="story-nav left" onClick={prev} aria-label="Previous">
              <ChevronLeft />
            </button>
            <button className="story-nav right" onClick={next} aria-label="Next">
              <ChevronRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
