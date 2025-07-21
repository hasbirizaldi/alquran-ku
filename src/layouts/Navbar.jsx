import { NavLink } from "react-router-dom";
import RightButton from "../components/RightButton";
const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white py-0 fixed w-[100vw] z-50 ">
      <div className="container px-5 flex justify-between items-center">
        <NavLink to="/" className="flex gap-1 amiri-bold justify-center items-center">
          <div className=" rounded-full ">
            <img src="/public/img/logo2.png" alt="quran ku" className="w-14 h-14 object-fill" />
          </div>
          <h1 className="text-xl font-bold">Al Qur'an Ku</h1>
        </NavLink>
        <RightButton />
      </div>
    </nav>
  );
};

export default Navbar;
