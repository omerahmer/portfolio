import Intro from "@/components/Intro";
import Meteors from "@/components/ui/meteors";

export default function Home() {
  return (
    <div className="w-8/12 mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full overflow-hidden">
        <Meteors />
        <Intro></Intro>
      </main>
    </div>
  );
}
