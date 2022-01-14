import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";

function Sidebar() {
  return (
    <div>
      <img
        src="https://iduke.online/_next/static/images/profile-540f687f9cdf9bce8bb2cd898abd249b.png"
        alt="User Avatar"
        className="w-32 h-32 mx-auto rounded-full "
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-purple-700">Alex </span>
        <span>Marques</span>
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-300 rounded-full">Web Developer</p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-300 rounded-full"
        href=""
        download="name"
      >
        <GiTie className="w-6 h-6" /> Download Resume
      </a>
      {/* Social Media Icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a>
          <AiFillInstagram className="w-8 h-8 cursor-pointer" />
        </a>
        <a>
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a>
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* Address */}
      <div
        className="py-4 my-5 bg-gray-300"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Juazeiro, Bahia</span>
        </div>
        <p className="my-2">contact@iduke.online</p>
        <p className="my-2">**123456789/**123456789</p>
      </div>
      {/* Email Button */}
      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:contact@iduke.online")}
      >
        Email Me
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400">
        Toggle Theme
      </button>
    </div>
  );
}

export default Sidebar;
