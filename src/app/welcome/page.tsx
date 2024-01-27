import Image from "next/image";
import { GeistSans } from 'geist/font/sans';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex lg:flex-row-reverse">
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className={"pointer-events-none flex place-items-center gap-2 p-8 pr-4 lg:pointer-events-auto lg:p-0 lg:pr-4 " + GeistSans.className}
            href="https://github.com/azn-abel"
            target="_blank"
            rel="noopener noreferrer"
          >
             GitHub
            <Image
              src="/GitHub.png"
              alt="GitHub Logo"
              className="dark:invert"
              width={24}
              height={24}
              priority
            />
          </a>
          <a
            className={"pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0 " + GeistSans.className}
            href="https://github.com/azn-abel"
            target="_blank"
            rel="noopener noreferrer"
          >
             Devpost
            <Image
              src="/devpost.webp"
              alt="Devpost Logo"
              className="dark:invert"
              width={24}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="relative flex flex-col place-items-center before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-6xl">
          Welcome to <span className="bg-gradient-to-r from-red-500 to-red-600 text-transparent bg-clip-text">NutriPack</span>
        </h1>
        <h3 className="text-gray-400 scroll-m-20 pt-4 text-2xl tracking-tight">
          Sustainable nutrition starts here
        </h3>
      </div>

      <div className="mb-32 grid text-center lg:max-w-4xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        <a
          href="/tracker"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Nutrition{" "}
            <span className="text-red-500 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Unlock healthier habits - one meal at a time.
          </p>
        </a>

        <a
          href="/stats"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Sustainability{" "}
            <span className="text-red-500 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Reduce food waste with AI-powered demand forecasting.
          </p>
        </a>

        <a
          href="/search"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Search{" "}
            <span className="text-red-500 inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Craft your next meal with a variety of on-campus options.
          </p>
        </a>

      </div>
    </main>
  );
}
