import { ReactNode } from "react";

interface SidebarProps {
  children?: ReactNode;
}

function Sidebar({}: SidebarProps) {
  return (
    <div>
      <img
        src="https://iduke.online/_next/static/images/profile-540f687f9cdf9bce8bb2cd898abd249b.png"
        alt="User Avatar"
      />
      <h3>
        <span>Alex</span>
        <span>Marques</span>
      </h3>
      <p>Web Developer</p>
      <p>Download Resume</p>
      {/* Social Media Icons */}

      {/* Address */}
      <div>
        <div>
          <span>Juazeiro, Bahia</span>
        </div>
        <p>contact@iduke.online</p>
        <p>**123456789/**123456789</p>
      </div>
      {/* Email Button */}
      <button>Email Me</button>
      <button>Toggle Theme</button>
    </div>
  );
}

export default Sidebar;
