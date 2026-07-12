import { useEffect } from "react";
import { NavigationProvider, usePath } from "./navigation.jsx";
import { Splash } from "./pages/Splash.jsx";
import { Login } from "./pages/Login.jsx";
import { Signup } from "./pages/Signup.jsx";
import { Home } from "./pages/Home.jsx";
import { Explore } from "./pages/Explore.jsx";
import { ReelsPage } from "./pages/Reels.jsx";
import { MessagesPage } from "./pages/Messages.jsx";
import { NotificationsPage } from "./pages/Notifications.jsx";
import { ProfilePage } from "./pages/Profile.jsx";
import { CreatePage } from "./pages/Create.jsx";
import { NotFoundPage } from "./pages/NotFound.jsx";

const routes = {
  "/": { title: "Instagram Clone", Component: Splash },
  "/login": { title: "Log in - Instagram", Component: Login },
  "/signup": { title: "Sign up - Instagram", Component: Signup },
  "/home": { title: "Instagram", Component: Home },
  "/explore": { title: "Explore - Instagram", Component: Explore },
  "/reels": { title: "Reels - Instagram", Component: ReelsPage },
  "/messages": { title: "Messages - Instagram", Component: MessagesPage },
  "/notifications": { title: "Notifications - Instagram", Component: NotificationsPage },
  "/profile": { title: "you.designer - Instagram", Component: ProfilePage },
  "/create": { title: "Create post - Instagram", Component: CreatePage },
};

function RouteView() {
  const pathname = usePath();
  const route = routes[pathname] ?? {
    title: "Page not found - Instagram",
    Component: NotFoundPage,
  };
  const { Component, title } = route;

  useEffect(() => {
    document.title = title;
  }, [title]);

  return <Component />;
}

export default function App() {
  return (
    <NavigationProvider>
      <RouteView />
    </NavigationProvider>
  );
}
