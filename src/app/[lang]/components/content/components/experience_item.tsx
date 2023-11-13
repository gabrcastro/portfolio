import Skill from "./skill"

type ExperienceItemType = {
    company: string,
    startYear: string,
    endYear: string,
    position: string,
    description: string[],
    skills: string[]
}

export default function ExperienceItem(params: ExperienceItemType) {
    return (
        <div className="flex flex-col mb-16 w-full">
            <div className="flex flex-row w-full justify-between">
                <p className="text-xl font-bold text-gray-200">{params.company}</p>
                <p className="text-base font-semibold text-gray-500">{params.startYear} - {params.endYear}</p>
            </div>
            <p className="text-base text-gray-500 mt-1 mb-2">{params.position}</p>

            {params.description.map((item, index) => (
                <p key={index} className="break-normal text-base text-gray-100">{item.toString()}</p>
            ))}

            <div className="flex gap-2 flex-wrap mt-5">
            {params.skills.map((item, index) => (
                <Skill key={index} name={item.toString()} />
            ))}
            </div>
        </div>
    );
}