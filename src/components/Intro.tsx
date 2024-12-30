'use client'
import Image from "next/image";

const Intro = () => {
    return (
        <div className="flex gap-4 flex-col-reverse sm:flex-row justify-center items-center">
            <div className="flex flex-col gap-4 lg:w-9/12 md:w-9/12 sm:w-full">
                <h1 className="text-4xl font-bold">Hello! I&apos;m Syed Omer Ahmer</h1>
                <p className="text-md text-slate-500 dark:text-slate-300">I am a student at UC Irvine pursuing a degree in Software Engineering. I excel in building full-stack applications from scratch with React, TypeScript, Next.js, and other new technologies. My experience spans across frontend, backend, and DevOps, and I have a particular passion for security and performance.</p>
            </div>
            <div className="md:w-3/12 flex-1 sm:w-full">
                <Image src="/images/omer.png" alt="omer" height={120} width={120} className="rounded-full border border-gray-300 dark:border-gray-800 h-36 w-36" />
            </div>
        </div>
    );
}

export default Intro;