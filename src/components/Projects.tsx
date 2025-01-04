"use client"

import Link from "next/link";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

interface Project {
    title: string;
    description: string;
    link: string;
    code: string;
    preview?: string;
    tech: string[];
}

const projectsData: Project[] = [
    {
        title: "Nanotech Lab Website",
        description: "A full-stack web application for users and scientists in the lab, complete with authentication.",
        link: "https://nanotech.berkeley.edu",
        code: "https://github.com/omerahmer/nano-webapp-new",
        preview: "videos/nanotech.mp4",
        tech: ["React", "TypeScript", "Tailwind CSS", "MongoDB", "Express"]
    },
    {
        title: "In The Mood",
        description: "A website that creates a custom Spotify playlist based on the user's mood.",
        link: "https://in-the-mood.onrender.com",
        code: "https://github.com/mattg1243/InTheMood",
        preview: "videos/inthemood.mp4",
        tech: ["TypeScript", "Express", "Spotify Web API", "HTML", "CSS"]
    },
    {
        title: "Weather",
        description: "A full-stack weather app. Work in progress.",
        link: "https://weather-drab-kappa.vercel.app/",
        code: "https://github.com/omerahmer/weather",
        preview: "videos/weather.mp4",
        tech: ["Next.js", "React", "TypeScript", "Clerk", "Zustand", "Zod", "REST APIs"]
    },
]

const Projects = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize(); // Check on initial render
        window.addEventListener("resize", handleResize); // Update on resize

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="flex flex-col gap-4">
            <h1 className="font-bold text-2xl">Projects</h1>
            <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4">
                {projectsData.map((item, index) => (
                    <div key={index} className="flex flex-col border border-gray-100 dark:border-gray-800 rounded-lg">
                        <video
                            src={item.preview}
                            autoPlay={!isMobile}
                            muted
                            loop
                            className="w-full h-full"
                        />
                        <div className="flex flex-col gap-3 p-4">
                            <h2 className="text-lg font-bold">{item.title}</h2>
                            <p className="text-slate-800 dark:text-slate-300 text-base">{item.description}</p>
                            <div className="flex gap-1 flex-wrap">
                                {item.tech.map((tech, index) => (
                                    <div key={index} className="flex border border-gray-200 dark:border-gray-800 rounded-md px-2 py-1 text-sm bg-sky-900 text-white">{tech}</div>
                                ))}
                            </div>
                            <div className="flex gap-2 mt-2">
                                <Link href={item.link} target="blank">
                                    <Button variant="default" className="bg-sky-600">View</Button>
                                </Link>
                                <Link href={item.code} target="blank">
                                    <Button variant="outline">Code</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects;