import { useState } from "react";
import { AppShell } from "../components/AppShell.jsx";
import { ImageIcon } from "../components/Icons.jsx";
import { useNavigate } from "../navigation.jsx";

const filters = [
  { name: "Original", filter: "none" },
  { name: "Clarendon", filter: "contrast(1.2) saturate(1.35)" },
  { name: "Gingham", filter: "brightness(1.05) hue-rotate(-10deg)" },
  { name: "Moon", filter: "grayscale(1) contrast(1.1) brightness(1.1)" },
  { name: "Lark", filter: "contrast(0.9) saturate(1.1) brightness(1.1)" },
  { name: "Reyes", filter: "sepia(0.4) contrast(0.85) brightness(1.1)" },
  { name: "Juno", filter: "saturate(1.4) hue-rotate(-15deg)" },
  { name: "Slumber", filter: "saturate(0.66) brightness(1.05)" },
];

export function CreatePage() {
  const navigate = useNavigate();
  const [img, setImg] = useState(null);
  const [filter, setFilter] = useState(filters[0]);
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");
  const [tags, setTags] = useState("");
  const [progress, setProgress] = useState(0);

  const onFile = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImg(reader.result);
    reader.readAsDataURL(file);
  };

  const share = () => {
    setProgress(1);
    const interval = setInterval(() => {
      setProgress((value) => {
        if (value >= 100) {
          clearInterval(interval);
          setTimeout(() => navigate("/home"), 400);
          return 100;
        }
        return value + 8;
      });
    }, 80);
  };

  return (
    <AppShell>
      <div className="app-container wide">
        <div className="create-modal">
          <div className="create-head">
            <button onClick={() => navigate("/home")}>Cancel</button>
            <div className="title">Create new post</div>
            <button onClick={share} disabled={!img || progress > 0}>
              Share
            </button>
          </div>

          {!img ? (
            <div className="create-body">
              <label className="create-drop">
                <ImageIcon />
                <div style={{ fontSize: 18, color: "var(--text)" }}>
                  Drag photos and videos here
                </div>
                <span className="btn-primary">Select from computer</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(event) => onFile(event.target.files?.[0])}
                />
              </label>
            </div>
          ) : (
            <>
              <div className="create-preview">
                <img src={img} alt="preview" style={{ filter: filter.filter }} />
              </div>
              <div className="create-filters">
                {filters.map((item) => (
                  <div
                    key={item.name}
                    className={`filter-thumb${filter.name === item.name ? " active" : ""}`}
                    onClick={() => setFilter(item)}
                  >
                    <div className="swatch">
                      <img src={img} alt="" style={{ filter: item.filter }} />
                    </div>
                    <span>{item.name}</span>
                  </div>
                ))}
              </div>
              <div className="create-form">
                <textarea
                  value={caption}
                  onChange={(event) => setCaption(event.target.value)}
                  placeholder="Write a caption... #hashtags"
                />
                <label>Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  placeholder="Add location"
                />
                <label>Tag people</label>
                <input
                  type="text"
                  value={tags}
                  onChange={(event) => setTags(event.target.value)}
                  placeholder="@friend"
                />
                <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <input type="checkbox" defaultChecked /> Turn off commenting
                </label>
                <label style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <input type="checkbox" /> Hide like count
                </label>
                {progress > 0 && (
                  <div className="create-progress">
                    <span style={{ width: `${progress}%` }} />
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </AppShell>
  );
}
