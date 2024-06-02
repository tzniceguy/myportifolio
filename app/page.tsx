import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import Showcase from "./components/Showcase";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col gap-4 px-6 py-12 md:px-72">
      <div className="gap-4">
        <div>
          <h1 className="font-semibold text-2xl">about</h1>
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
