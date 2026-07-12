import { createContext, useContext, useEffect, useMemo, useState } from "react";

const NavigationContext = createContext(null);

const normalizePath = (path) => {
  if (!path || path === "/") return "/";
  return path.endsWith("/") ? path.slice(0, -1) : path;
};

export function NavigationProvider({ children }) {
  const [pathname, setPathname] = useState(() => normalizePath(window.location.pathname));

  useEffect(() => {
    const onPopState = () => setPathname(normalizePath(window.location.pathname));
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const value = useMemo(() => {
    const navigate = (to) => {
      const next = normalizePath(to);
      if (next === pathname) return;
      window.history.pushState({}, "", next);
      setPathname(next);
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return { pathname, navigate };
  }, [pathname]);

  return <NavigationContext.Provider value={value}>{children}</NavigationContext.Provider>;
}

export function usePath() {
  return useContext(NavigationContext).pathname;
}

export function useNavigate() {
  return useContext(NavigationContext).navigate;
}

export function Link({ to, children, onClick, ...props }) {
  const navigate = useNavigate();

  return (
    <a
      href={to}
      onClick={(event) => {
        onClick?.(event);
        if (
          event.defaultPrevented ||
          event.button !== 0 ||
          event.metaKey ||
          event.altKey ||
          event.ctrlKey ||
          event.shiftKey
        ) {
          return;
        }
        event.preventDefault();
        navigate(to);
      }}
      {...props}
    >
      {children}
    </a>
  );
}
