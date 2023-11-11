import { Source_Code_Pro } from 'next/font/google';

import Content from "./components/content/content";
import Header from "./components/header/header";

{
  /* <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.tsx</code>
        </p> */
}

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={sourceCodePro.className}>
      <div className="flex w-screen h-screen flex-row justify-between bg-gradient-to-tr from-slate-900 to-slate-950 bg-opacity-50 p-10">
        <Header />
        <Content />
        </div>
    </main>
  );
}
