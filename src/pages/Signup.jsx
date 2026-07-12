import { useState } from "react";
import { Link, useNavigate } from "../navigation.jsx";
import { CameraIcon } from "../components/Icons.jsx";

function strength(pw) {
  let score = 0;
  if (pw.length >= 8) score += 1;
  if (/[A-Z]/.test(pw)) score += 1;
  if (/[0-9]/.test(pw)) score += 1;
  if (/[^A-Za-z0-9]/.test(pw)) score += 1;
  return score;
}

export function Signup() {
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState(null);
  const [name, setName] = useState("");
  const [uname, setUname] = useState("");
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [err, setErr] = useState("");

  const score = strength(pw);
  const strengthColor = ["#ed4956", "#f59e0b", "#eab308", "#22c55e", "#16a34a"][score];
  const strengthLabel = ["Too weak", "Weak", "Fair", "Good", "Strong"][score];

  const onFile = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatar(reader.result);
    reader.readAsDataURL(file);
  };

  const submit = (event) => {
    event.preventDefault();
    if (!name || !uname || !email || pw.length < 6) {
      setErr("Fill all fields (password 6+).");
      return;
    }
    if (pw !== pw2) {
      setErr("Passwords do not match.");
      return;
    }
    setErr("");
    navigate("/home");
  };

  return (
    <div className="auth-shell">
      <div>
        <div className="auth-card">
          <div className="auth-title" style={{ fontSize: 44 }}>
            Instagram
          </div>
          <p
            style={{
              textAlign: "center",
              color: "var(--text-muted)",
              fontWeight: 600,
              fontSize: 14,
              marginTop: 0,
            }}
          >
            Sign up to see photos and videos from your friends.
          </p>
          <div className="avatar-upload">
            <label htmlFor="pf">
              <div className="avatar-inner">
                {avatar ? <img src={avatar} alt="" /> : <CameraIcon />}
              </div>
              <input
                id="pf"
                type="file"
                accept="image/*"
                onChange={(event) => onFile(event.target.files?.[0])}
              />
            </label>
          </div>
          <form className="auth-form" onSubmit={submit}>
            <div className="field">
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                placeholder=" "
                id="n"
              />
              <label htmlFor="n">Full Name</label>
            </div>
            <div className="field">
              <input
                value={uname}
                onChange={(event) => setUname(event.target.value)}
                placeholder=" "
                id="un"
              />
              <label htmlFor="un">Username</label>
            </div>
            <div className="field">
              <input
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder=" "
                id="em"
              />
              <label htmlFor="em">Email</label>
            </div>
            <div className="field">
              <input
                type="password"
                value={pw}
                onChange={(event) => setPw(event.target.value)}
                placeholder=" "
                id="pw"
              />
              <label htmlFor="pw">Password</label>
            </div>
            {pw && (
              <>
                <div className="password-strength">
                  <span style={{ width: `${(score / 4) * 100}%`, background: strengthColor }} />
                </div>
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{strengthLabel}</div>
              </>
            )}
            <div className="field">
              <input
                type="password"
                value={pw2}
                onChange={(event) => setPw2(event.target.value)}
                placeholder=" "
                id="pw2"
              />
              <label htmlFor="pw2">Confirm Password</label>
            </div>
            <button className="btn-primary ripple" type="submit">
              Create Account
            </button>
            {err && <div className="error-msg">{err}</div>}
          </form>
        </div>
        <div className="auth-card">
          Have an account?{" "}
          <Link to="/login" style={{ color: "var(--accent)", fontWeight: 600 }}>
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
}
