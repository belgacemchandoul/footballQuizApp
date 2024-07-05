// src/components/Layout.tsx
import Footer from "./Footer";
import Header from "./Header";
import { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col select-none overflow-hidden">
      <Header />
      <main className="inner-container mx-auto flex-grow flex flex-col items-center ">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
