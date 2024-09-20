import Introduction from "./components/Introduction";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="">
      <div className="gap-4">
        <Introduction />
        <Contact />
        <Showcase />
      </div>
    </div>
  );
}