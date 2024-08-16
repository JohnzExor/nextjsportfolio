import Header from "@/components/header/Header";
import Card from "./Card";
import About from "./About";
import Stack from "./Stack";

const page = () => {
  return (
    <div>
      <Header />
      <div className="space-y-4 m-4">
        <Card />
        <About />
        <Stack />
      </div>
    </div>
  );
};

export default page;
