// src/components/Layout.tsx
import Header from "./Header";
// import Footer from "./Footer";
import { ReactNode } from "react";
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto flex-grow">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
