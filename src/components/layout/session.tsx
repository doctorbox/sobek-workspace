import { NavigationBar } from "@/components/navigation/bar";
import Header from "@/components/header";
import { useRouter } from "next/router";

type SessionLayoutProps = {
  children: React.ReactNode;
};

const SessionLayout: React.FC<SessionLayoutProps> = ({ children }) => {
  const router = useRouter();
  const showHeader = router.pathname.startsWith("/session/[levelId]");
  return (
    <div>
      <NavigationBar />
      {showHeader && <Header />}
      <main>{children}</main>
    </div>
  );
};

export default SessionLayout;
