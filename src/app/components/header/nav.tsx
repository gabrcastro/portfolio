export default function Nav() {
  return (
    <div className="flex flex-col items-start justify-evenly w-[100%]">
      
      <div className="flex flex-row items-center mb-3 hover:cursor-pointer hover:opacity-75">
        <span className="mr-4">&gt;_</span>
        <div className="flex flex-col items-start">
          <p>Sobre</p>
          <div className="w-32 h-[1.5px] bg-slate-400"/>
        </div>
      </div>

      <div className="flex flex-row items-center mb-3 hover:cursor-pointer hover:opacity-75">
        <span className="mr-4">&gt;_</span>
        <div className="flex flex-col items-start">
          <p>Experiência</p>
          <div className="w-32 h-[1.5px] bg-slate-400"/>
        </div>
      </div>

      <div className="flex flex-row items-center mb-3 hover:cursor-pointer hover:opacity-75">
        <span className="mr-4">&gt;_</span>
        <div className="flex flex-col items-start">
          <p>Educação</p>
          <div className="w-32 h-[1.5px] bg-slate-400"/>
        </div>
      </div>

      <div className="flex flex-row items-center mb-3 hover:cursor-pointer hover:opacity-75">
        <span className="mr-4">&gt;_</span>
        <div className="flex flex-col items-start">
          <p>Projetos</p>
          <div className="w-32 h-[1.5px] bg-slate-400"/>
        </div>
      </div>
    </div>
  );
}
