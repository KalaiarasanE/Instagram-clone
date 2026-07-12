import { useState } from "react";
import { AppShell } from "../components/AppShell.jsx";
import { reels } from "../data/mock.js";
import {
  HeartIcon,
  CommentIcon,
  ShareIcon,
  BookmarkIcon,
  MusicIcon,
  MoreIcon,
} from "../components/Icons.jsx";

export function ReelsPage() {
  return (
    <AppShell hideMobileTop>
      <div className="reels-wrap">
        {reels.map((reel) => (
          <ReelItem key={reel.id} reel={reel} />
        ))}
      </div>
    </AppShell>
  );
}

function ReelItem({ reel }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);

  return (
    <div className="reel">
      <div className="reel-frame">
        <img src={reel.video} alt="" />
        <div className="reel-overlay">
          <div className="reel-user">
            <img src={reel.user.avatar} alt="" />
            <b>{reel.user.username}</b>
            <button>Follow</button>
          </div>
          <div className="reel-caption">{reel.caption}</div>
          <div className="reel-music">
            <MusicIcon style={{ width: 14, height: 14 }} /> {reel.music}
          </div>
        </div>
        <div className="reel-side">
          <button onClick={() => setLiked((value) => !value)}>
            <HeartIcon
              style={{ fill: liked ? "#ed4956" : "none", stroke: liked ? "#ed4956" : "#fff" }}
            />
            <div className="num">{(reel.likes + (liked ? 1 : 0)).toLocaleString()}</div>
          </button>
          <button>
            <CommentIcon />
            <div className="num">{reel.comments}</div>
          </button>
          <button>
            <ShareIcon />
            <div className="num">{reel.shares}</div>
          </button>
          <button onClick={() => setSaved((value) => !value)}>
            <BookmarkIcon style={{ fill: saved ? "#fff" : "none" }} />
          </button>
          <button>
            <MoreIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
