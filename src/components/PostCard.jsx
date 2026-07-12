import { useState } from "react";
import {
  HeartIcon,
  CommentIcon,
  ShareIcon,
  BookmarkIcon,
  MoreIcon,
  ChevronLeft,
  ChevronRight,
  SmileIcon,
} from "./Icons.jsx";

export function PostCard({ post }) {
  const [liked, setLiked] = useState(post.liked ?? false);
  const [saved, setSaved] = useState(post.saved ?? false);
  const [likes, setLikes] = useState(post.likes);
  const [idx, setIdx] = useState(0);
  const [burst, setBurst] = useState(false);
  const [comment, setComment] = useState("");

  const toggleLike = () => {
    setLiked((value) => {
      const next = !value;
      setLikes((count) => count + (next ? 1 : -1));
      return next;
    });
  };

  const onDoubleTap = () => {
    if (!liked) toggleLike();
    setBurst(true);
    setTimeout(() => setBurst(false), 900);
  };

  return (
    <article className="post">
      <header className="post-head">
        <div className="post-avatar">
          <img src={post.user.avatar} alt="" />
        </div>
        <div className="post-meta">
          <div className="post-user">
            {post.user.username}
            {post.sponsored && (
              <span style={{ color: "var(--text-muted)", fontWeight: 400 }}>
                {" "}
                &middot; Sponsored
              </span>
            )}
          </div>
          {post.location && <div className="post-loc">{post.location}</div>}
        </div>
        <button className="post-more" aria-label="More">
          <MoreIcon />
        </button>
      </header>

      <div className="post-media" onDoubleClick={onDoubleTap}>
        <img src={post.images[idx]} alt={post.caption} loading="lazy" />
        {post.images.length > 1 && (
          <>
            {idx > 0 && (
              <button
                className="carousel-arrow left"
                onClick={() => setIdx((value) => value - 1)}
                aria-label="Prev"
              >
                <ChevronLeft />
              </button>
            )}
            {idx < post.images.length - 1 && (
              <button
                className="carousel-arrow right"
                onClick={() => setIdx((value) => value + 1)}
                aria-label="Next"
              >
                <ChevronRight />
              </button>
            )}
            <div className="carousel-dots">
              {post.images.map((_, index) => (
                <span key={index} className={index === idx ? "active" : ""} />
              ))}
            </div>
          </>
        )}
        <svg
          className={`heart-burst${burst ? " show" : ""}`}
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
        </svg>
      </div>

      <div className="post-actions">
        <button
          className={`icon-btn${liked ? " liked" : ""}`}
          onClick={toggleLike}
          aria-label="Like"
        >
          <HeartIcon />
        </button>
        <button className="icon-btn" aria-label="Comment">
          <CommentIcon />
        </button>
        <button className="icon-btn" aria-label="Share">
          <ShareIcon />
        </button>
        <button
          className={`icon-btn right${saved ? " saved" : ""}`}
          onClick={() => setSaved((value) => !value)}
          aria-label="Save"
        >
          <BookmarkIcon />
        </button>
      </div>

      <div className="post-body">
        <div className="post-likes">{likes.toLocaleString()} likes</div>
        <div className="post-caption">
          <b>{post.user.username}</b>
          {post.caption} <span className="post-hashtags">{post.hashtags.join(" ")}</span>
        </div>
        <div className="post-comments-link">View all {post.comments} comments</div>
        <div className="post-time">{post.time}</div>
      </div>

      <form
        className="post-comment-form"
        onSubmit={(event) => {
          event.preventDefault();
          setComment("");
        }}
      >
        <button type="button" className="icon-btn" aria-label="Emoji">
          <SmileIcon />
        </button>
        <input
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Add a comment..."
        />
        <button type="submit" disabled={!comment.trim()}>
          Post
        </button>
      </form>
    </article>
  );
}
