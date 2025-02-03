import Introduction from "@/components/introduction";
import Showcase from "@/components/showcase";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="">
      <div className="gap-4">
        <Introduction />
        <Showcase />
      </div>
    </div>
  );
}
