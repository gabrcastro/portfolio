import Content from "./components/content/content";
import Header from "./components/header/header";

{/* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p> */}


export default function Home() {
  return (
    <main className="flex w-screen flex-col px-10 pt-10">
      <div className="flex flex-row">
        <div className="w-1/3">
          <Header />
        </div>
        
        <Content />
      </div>
    </main>
  )
}
