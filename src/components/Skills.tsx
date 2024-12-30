const skillsData: string[] = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "MongoDB",
    "RESTful APIs",
    "Express",
    "Node.js",
    "HTML",
    "CSS",
    "C/C++",
    "Python",
    "Java",
    "Git",
    "GitHub",
    "Linux",
    "DevOps",
    "AWS",
    "CI/CD",
]

const Skills = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Skills</h1>
            <div className="flex flex-wrap gap-2 w-11/12">
                {skillsData.map((skill, index) => (
                    <div key={index} className="flex border border-gray-200 dark:border-gray-800 rounded-md px-2 py-1 text-sm bg-sky-900 text-white">
                        {skill}
                    </div>

                ))}
            </div>

        </div>
    )
}

export default Skills