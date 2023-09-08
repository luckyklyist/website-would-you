import { useState } from "react";
import commands from "../data/commands.json";

export default function Commands() {
  const [openedCommand, setOpenedCommand] = useState("");

  return (
    <main className="px-8 lg:px-[17vw]">
      <h1 className="mt-36 text-4xl font-semibold text-brand-red-100 drop-shadow-red-glow">
        Commands
      </h1>

      <div className="mt-8 flex flex-col gap-4">
        {commands.map((c) => {
          const isActive = openedCommand === c.name;

          return (
            <div
              className={`relative cursor-pointer overflow-hidden rounded-lg p-4 text-neutral-300 transition-all duration-300 ${
                openedCommand === c.name
                  ? "max-h-[210px] bg-neutral-700"
                  : "max-h-[90px] bg-neutral-800"
              }`}
              onClick={() =>
                isActive ? setOpenedCommand("") : setOpenedCommand(c.name)
              }
              key={c.name}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="mb-1 text-lg font-semibold text-white">
                    <span className="mr-0.5 text-neutral-500">/</span>
                    {c.name}
                  </h4>
                  <p className="mb-3 text-ellipsis whitespace-nowrap text-sm">
                    {c.description}
                  </p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  fill="currentColor"
                  viewBox="0 0 30 30"
                  className={`transition-all duration-300 ${
                    isActive
                      ? "rotate-180 text-neutral-300"
                      : "text-neutral-500"
                  }`}
                >
                  <path d="M15 20.938a.93.93 0 0 1-.663-.275l-8.75-8.75a.938.938 0 1 1 1.327-1.327L15 18.674l8.088-8.088a.938.938 0 1 1 1.326 1.327l-8.75 8.75a.94.94 0 0 1-.665.274Z" />
                </svg>
              </div>
              <div
                className={`transition-all duration-300 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                <h5 className="mb-1">Usage</h5>
                <h6 className="mb-2 w-fit rounded-md bg-neutral-900 px-2 py-1 font-mono text-xs">
                  {c.usage}
                </h6>
                {c.subcommands && (
                  <>
                    <h5 className="mb-1">Subcommands</h5>
                    <h6 className="w-fit rounded-md bg-neutral-900 px-2 py-1 font-mono text-xs">
                      {c.subcommands.join(", ")}
                    </h6>
                  </>
                )}
                {c.options && (
                  <>
                    <h5 className="mb-1">Options</h5>
                    <h6 className="w-fit rounded-md bg-neutral-900 px-2 py-1 font-mono text-xs">
                      {c.options.join(", ")}
                    </h6>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
