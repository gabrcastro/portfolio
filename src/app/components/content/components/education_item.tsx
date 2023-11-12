import Skill from "./skill"

type EducationItem = {
    title: string,
    startYear: string,
    endYear: string,
    type: string,
}

export default function EducationItem(params: EducationItem) {
    return (
        <div className="flex flex-col mb-16 w-full">
            <div className="flex flex-row w-full justify-between">
                <p className="text-xl font-bold text-gray-200">{params.title}</p>
                <p className="text-base font-semibold text-gray-500">{params.startYear} - {params.endYear}</p>
            </div>
            <p className="text-base text-gray-500 mt-1 mb-2">{params.type}</p>
        </div>
    );
}