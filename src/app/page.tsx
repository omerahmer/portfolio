import Certifications from "@/components/Certifications";
import Education from "@/components/Education";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Meteors from "@/components/ui/meteors";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <div className="lg:w-8/12 md:w-7/12 sm:w-full mx-auto items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] relative overflow-hidden">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start overflow-hidden">
        <Meteors />
        <Intro />
        <Projects />
        <Certifications />
        <WorkExperience />
        <Skills />
        <Education />
      </main>
    </div>
  );
}
