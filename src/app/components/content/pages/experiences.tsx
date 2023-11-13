import ExperienceItem from "../components/experience_item";

export default function Experiences() {
    return (
       <div className="flex flex-col  mt-44 items-start">

            <ExperienceItem 
                company="Houseasy"
                startYear="dez/2022"
                endYear="Atualmente"
                position="Front-End Developer Pleno"
                description={[
                    "Desenvolimento e manutenção de ERP em React.",
                    "Desenvolvimento e manutenção do site em NextJS.",
                    "Aplicativos mobile utilizando Flutter e Dart.", 
                    "Integrações do Android Nativo com Kotlin com o aplicativo Flutter."
                ]}
                skills={["React", "Typescript", "NextJS", "Zod", "Tailwind CSS", "Chakra UI", "Flutter", "Dart", "Kotlin", "Android", "Firebase", "Jest", "Cypress", "Git"]}
            />    

            <ExperienceItem 
                company="Profile Tecnologia"
                startYear="set/2021"
                endYear="set/2022"
                position="Front-End Developer Pleno"
                description={[
                    "Desenvolimento e manutenção sistema web com Angular.",
                    "Manutenção de aplicativos mobile com Flutter.",
                ]}
                skills={["Angular", "Typescript", "Material UI", "CSS3", "Flutter", "Dart", "Git"]}
            />   
            
       </div>
    );
}