interface CollegeItem {
    start: string;
    end: string;
    college: string;
    title: string;
    description: string[];
}

const Colleges: CollegeItem[] = [
    {
        start: "Sep 2024",
        end: "Present",
        college: "University of California, Irvine",
        title: "B.S. in Software Engineering",
        description: ["Irvine, CA"]
    },
    {
        start: "Aug 2022",
        end: "Jun 2024",
        college: "Las Positas College and Diablo Valley College",
        title: "Transfer",
        description: ["Livermore, CA and Pleasant Hill, CA"]
    },
]

const Education = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-bold">Education</h1>
            <div className="p-1">
                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    {Colleges.map((item, index) => (
                        <li key={index} className="mb-10 ms-4">
                            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{item.start} - {item.end}</time>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title} at {item.college}</h3>
                            <ul className="text-base text-slate-500 dark:text-slate-300 leading-relaxed">
                                {item.description.map((desc: string, key: number) => (
                                    <li key={key}>{desc}</li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
}
export default Education