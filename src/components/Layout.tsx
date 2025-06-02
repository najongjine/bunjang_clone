import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow bg-gray-50 mt-4 py-4">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
