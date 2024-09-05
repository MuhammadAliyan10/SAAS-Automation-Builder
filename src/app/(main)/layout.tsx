import React from "react";
import Sidebar from "@/components/Sidebar";

type Props = { children: React.ReactNode };

const Layout = (props: Props) => {
  return (
    <div className="flex overflow-hidden h-screen">
      <Sidebar />
      <div className="w-full">{props.children}</div>
    </div>
  );
};

export default Layout;
