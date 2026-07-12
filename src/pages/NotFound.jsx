import { Link } from "../navigation.jsx";

export function NotFoundPage() {
  return (
    <div className="not-found">
      <div>
        <h1>404</h1>
        <h2>Page not found</h2>
        <p>The page you are looking for does not exist or has been moved.</p>
        <Link to="/home" className="btn-primary">
          Go home
        </Link>
      </div>
    </div>
  );
}
