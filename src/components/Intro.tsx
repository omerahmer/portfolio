'use client'
import Image from "next/image";

const Intro = () => {
    return (
        <div className="flex gap-4">
            <div className="flex flex-col gap-4 w-9/12">
                <h1 className="text-4xl font-bold">Hello! I&apos;m Syed Omer Ahmer</h1>
                <p className="text-lg text-slate-500">I am a student at UC Irvine pursuing a degree in Software Engineering. I excel in building full-stack applications from scratch with React, TypeScript, and other new technologies. My experience spans across frontend, backend, and DevOps, and I have a particular passion for security and performance.</p>
            </div>
            <div className="w-3/12 flex-1">
                <Image src="/images/IMG_2979.jpeg" alt="omer" height={100} width={100} className="rounded-full border border-gray-100 h-36 w-36"></Image>
            </div>
        </div>
    );
}

export default Intro;