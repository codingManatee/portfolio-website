import DesktopNavbar from "./NavbarStyle.tsx/DesktopNavbar";
import MobileNavbar from "./NavbarStyle.tsx/MobileNavbar";

const Navbar = () => {
  return (
    <div className="">
      {/* IF SCREEN < SM */}
      <div className="flex sm:hidden">
        <MobileNavbar />
      </div>
      {/* IF SCREEN > SM */}
      <div className="hidden sm:flex">
        <DesktopNavbar />
      </div>
    </div>
  );
};

export default Navbar;
