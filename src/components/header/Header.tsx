import SideBarToggle from "../sidebar/SideBarToggle";
import Name from "./Name";

const Header = () => {
  return (
    <div className="fixed  w-full flex items-center justify-between p-2 px-4 bg-black -z-20 text-white">
      <Name />
      <SideBarToggle />
    </div>
  );
};

export default Header;
