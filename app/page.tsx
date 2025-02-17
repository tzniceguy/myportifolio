import Introduction from "@/components/introduction";
import Showcase from "@/components/showcase";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <div className="">
      <div className="gap-4">
        <Introduction />
        <Skills />
        <Showcase />
      </div>
    </div>
  );
}
