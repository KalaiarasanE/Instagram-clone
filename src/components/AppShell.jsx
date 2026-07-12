import { Sidebar } from "./Sidebar.jsx";
import { BottomNav } from "./BottomNav.jsx";
import { MobileTopBar } from "./MobileTopBar.jsx";

export function AppShell({ children, hideMobileTop = false }) {
  return (
    <div className="app-shell">
      <Sidebar />
      <main className="app-main">
        {!hideMobileTop && <MobileTopBar />}
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
