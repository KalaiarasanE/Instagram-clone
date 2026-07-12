import { useEffect } from "react";
import { useNavigate } from "../navigation.jsx";

export function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/login"), 2000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash">
      <div className="splash-inner">
        <div className="splash-logo">
          <div className="splash-cam" />
        </div>
        <div className="splash-title">Instagram</div>
        <div className="splash-bar">
          <span />
        </div>
      </div>
    </div>
  );
}
