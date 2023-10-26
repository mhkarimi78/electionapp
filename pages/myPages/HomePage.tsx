import React,{ ReactElement, useState } from "react";
import Header from "../../components/Header";

export function HomePage(): ReactElement {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex  overflow-hidden bg-gray-100">
      <div className="flex flex-col flex-1 w-full">
        <Header handleSidebarToggle={handleSidebarToggle} />
      </div>
    </div>
  );
}
