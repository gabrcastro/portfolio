import EducationItem from "../components/education_item";

export default function Education() {
    return(
        <div className="flex flex-col  mt-44 items-start">


            <EducationItem 
                title="Análise de Dados"
                type="Pós-Graduação"
                startYear="2022"
                endYear="2023"
            />

            <EducationItem 
                title="Tecnologias e Inovações Web"
                type="Pós-Graduação"
                startYear="2021"
                endYear="2022"
            />


            <EducationItem 
                title="Análise e Desenvolvimento de Sistemas"
                type="Graduação"
                startYear="2017"
                endYear="2020"
            />

        </div>
    );
}