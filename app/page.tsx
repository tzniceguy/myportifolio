import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="space-y-6 px-6 py-12 ">
      <div className="space-y-6">
        <div className="">
          <h1 className="font-bold text-3xl md:text-5xl">about</h1>
        </div>
        <NavBar />
      </div>
      <div className="gap-4">
        <Introduction />
        <Contact />
        <Showcase />
      </div>
    </main>
  );
}