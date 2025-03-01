import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Home, PlaySquare, Tv, History, Film, Gamepad2, Music, Clock } from "lucide-react"; // Using Lucide icons

const Sidebar = () => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  const menuItems = [
    { title: "", items: [{ name: "Home", icon: <Home />, path: "/" }, { name: "Shorts", icon: <PlaySquare /> }, { name: "Subscriptions", icon: <Tv /> }] },
    { title: "Library", items: [{ name: "History", icon: <History /> }, { name: "Movies", icon: <Film /> }, { name: "Gaming", icon: <Gamepad2 /> }, { name: "Music", icon: <Music /> }] },
    { title: "Watch Later", items: [{ name: "Saved Videos", icon: <Clock /> }] }
  ];

  return (
    <div className="p-4 shadow-lg w-[16rem] h-screen bg-white  left-0 overflow-y-auto">
      {menuItems.map((section, index) => (
        <div key={index} className="mb-4">
          {section.title && <h1 className="font-bold text-gray-600 mb-2">{section.title}</h1>}
          <ul>
            {section.items.map((item, idx) => (
              <li key={idx} className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-200 cursor-pointer">
                {item.icon}
                {item.path ? <Link to={item.path} className="text-md">{item.name}</Link> : <span>{item.name}</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
