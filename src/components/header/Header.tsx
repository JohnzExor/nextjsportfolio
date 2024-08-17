import SideBarToggle from "../sidebar/SideBarToggle";

const Header = () => {
  return (
    <div className="fixed  w-full flex justify-between p-4">
      <div></div>
      <SideBarToggle />
    </div>
  );
};

export default Header;
