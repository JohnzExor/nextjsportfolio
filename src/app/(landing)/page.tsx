import Header from "@/components/header/Header";
import Card from "./Card";
import About from "./About";
import Stack from "./Stack";

const page = () => {
  return (
    <div>
      <Header />
      <Card />
      <div className="space-y-4 absolute top-[570px] bg-white rounded-t-xl p-4 -z-30">
        <a href="#contact" className=" -space-y-1">
          <h1 className=" text-green-800 font-medium">Available for work</h1>
          <p className="text-sm">Contact me now!</p>
        </a>
        <About />
        <Stack />
      </div>
    </div>
  );
};

export default page;
