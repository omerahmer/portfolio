interface WorkExperienceItem {
    start: string;
    end: string;
    company: string;
    title: string;
    description: string[];
}

const jobs: WorkExperienceItem[] = [
    {
        start: "Aug 2023",
        end: "Sep 2024",
        company: "Nanotechnology Lab",
        title: "Software Engineer Intern/Undergraduate Researcher",
        description: [
            "Designed and developed a full-stack website using React for the frontend, Node.js/Express for the backend, and MongoDB for data storage, implementing features such as user authentication and RESTful API integration",
            "Implemented a new API resulting in a 30% reduction in load times and a 60% increase in user engagement",
            "Implemented a serial port program in C that increased USB read speeds by up to 50%"
        ],
    },
    {
        start: "Jun 2021",
        end: "Sep 2021",
        company: "Innowi",
        title: "Software Engineer Intern",
        description: [
            "Provided quality assurance and testing for new devices to be installed at customer locations",
            "Testing included: wireless connectivity, software versions, troubleshooting, and battery health checks"
        ]
    },
    {
        start: "May 2021",
        end: "Aug 2021",
        company: "Comet",
        title: "Flight Test Intern",
        description: [
            "Collaborated with engineers and other departments to develop effective strategies and test plans",
            "Analyzed UI/UX and reported results, bugs, and concerns during software user tests",
            "Conducted market research, participated in focus groups, and tested incremental product versions"
        ]
    }
]

const WorkExperience = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Work Experience</h1>
            <div className="p-1">
                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    {jobs.map((item, index) => (
                        <li key={index} className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.start} - {item.end}</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title} at {item.company}</h3>
                            <ul className="text-base text-slate-500 dark:text-slate-300 leading-relaxed w-10/12">
                                {item.description.map((desc, index) => (
                                    <li key={index}>{desc}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}

export default WorkExperience;