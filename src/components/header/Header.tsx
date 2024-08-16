import SideBarToggle from "../sidebar/SideBarToggle";

const Header = () => {
  return (
    <div className=" border rounded-xl flex justify-between items-center p-2 m-2">
      <div></div>
      <SideBarToggle />
    </div>
  );
};

export default Header;
