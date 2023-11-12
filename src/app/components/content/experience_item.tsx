import Skill from "./skill"

export default function ExperienceItem() {
    return (
        <div className="flex flex-col mb-16">
            <div className="flex flex-row w-full justify-between">
                <p className="text-xl font-bold text-gray-200">Houseasy</p>
                <p className="text-lg font-semibold text-gray-500">2022 - Atualmente</p>
            </div>
            <p className="text-base text-gray-500 mt-1 mb-2">Front-End Developer Pleno</p>
            <p className="text-base text-gray-100">Desenvolimento e manutenção de ERP em React,
            <br />Desenvolvimento e manutenção do site em NextJS
            <br />Aplicativos mobile utilizando Flutter e Dart. 
            <br />Integrações do Android Nativo com Kotlin com o aplicativo Flutter.
            </p>

            <div className="flex gap-5 flex-wrap mt-5">
                <Skill name="React" />
                <Skill name="Typescript" />
                <Skill name="NextJS" />
                <Skill name="Zod" />
                <Skill name="Tailwind CSS" />
                <Skill name="Chakra UI" />
                <Skill name="NPM" />
                <Skill name="PNPM" />
                <Skill name="Flutter" />
                <Skill name="Dart" />
                <Skill name="Git" />
                <Skill name="Firebase" />
            </div>
        </div>
    );
}