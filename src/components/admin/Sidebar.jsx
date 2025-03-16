//rfce
import { LayoutDashboard, User } from "lucide-react";
import React from "react";
import { Link } from "react-router";
import { sidebarLink } from "../../utils/links";

function Sidebar() {
  return (
    <div className="bg-emerald-900 w-48 text-white">
      {/* Profile */}
      <div className="flex flex-col items-center py-12 gap-2">
        <User size={48} />
        <p>Profile</p>
      </div>
      {/* /Profile */}

      {/* Navlinks */}
      {sidebarLink.map((item) => {
        return (
          <div key={item.label}>
            <Link
              className="flex py-2 px-4 gap-2 hover:bg-emerald-500 hover:duration-300"
              to={item.link}
            >
              {item.icon}
              <p>{item.label}</p>
            </Link>
          </div>
        );
      })}

      {/* /Navlinks */}
    </div>
  );
}

export default Sidebar;
