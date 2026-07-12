import { useState } from "react";
import { Link, useNavigate } from "../navigation.jsx";

export function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [pw, setPw] = useState("");
  const [err, setErr] = useState("");
  const [remember, setRemember] = useState(true);

  const submit = (event) => {
    event.preventDefault();
    if (!user.trim() || pw.length < 4) {
      setErr("Please enter a valid username and password (min 4 chars).");
      return;
    }
    setErr("");
    navigate("/home");
  };

  return (
    <div className="auth-shell">
      <div>
        <div className="auth-card">
          <div className="auth-title">Instagram</div>
          <form className="auth-form" onSubmit={submit}>
            <div className="field">
              <input
                value={user}
                onChange={(event) => setUser(event.target.value)}
                placeholder=" "
                id="u"
              />
              <label htmlFor="u">Phone number, username or email</label>
            </div>
            <div className="field">
              <input
                type="password"
                value={pw}
                onChange={(event) => setPw(event.target.value)}
                placeholder=" "
                id="p"
              />
              <label htmlFor="p">Password</label>
            </div>
            <div className="auth-row">
              <label style={{ display: "flex", gap: 6, alignItems: "center" }}>
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(event) => setRemember(event.target.checked)}
                />
                Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>
            <button className="btn-primary ripple" type="submit" disabled={!user || !pw}>
              Log in
            </button>
            {err && <div className="error-msg">{err}</div>}
            <div className="auth-divider">OR</div>
            <button
              type="button"
              onClick={() => {
                setUser("guest");
                setPw("guest123");
              }}
              className="btn-ghost ripple"
            >
              Continue as guest
            </button>
          </form>
        </div>
        <div className="auth-card">
          Don't have an account?{" "}
          <Link to="/signup" style={{ color: "var(--accent)", fontWeight: 600 }}>
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
}
