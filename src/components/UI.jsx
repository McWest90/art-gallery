import { atom, useAtom } from "jotai";
import { Link } from "react-router-dom";

const pictures = [
  "DSC00680",
  "DSC00933",
  "DSC00966",
  "DSC00983",
  "DSC01011",
  "DSC01040",
  "DSC01064",
  "DSC01071",
  "DSC01103",
  "DSC01145",
  "DSC01420",
  "DSC01461",
  "DSC01489",
  "DSC02031",
  "DSC02064",
  "DSC02069",
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}
pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  return (
    <>
      <main className="pointer-events-none select-none z-10 fixed inset-0 flex justify-between flex-col">
        {/* Кнопка "Назад" */}
        <Link
          to="/"
            className="pointer-events-auto fixed top-4 left-4 bg-white/10 text-white px-3 py-1 rounded hover:bg-white/20 transition z-50 mobile-back-button"

        >
          Home
        </Link>

        <a className="pointer-events-auto mt-10 ml-10" href="">
          <img className="w-20" src="" alt="" />
        </a>

        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="overflow-auto flex items-center gap-4 max-w-full p-10">
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`border-transparent hover:border-white transition-all duration-300 px-2 py-1 rounded-full text-sm uppercase shrink-0 border ${
                  index === page
                    ? "bg-white/90 text-black"
                    : "bg-black/30 text-white"
                }`}
                onClick={() => {
                  const audio = new Audio("/audios/page-flip-01a.mp3");
                  audio.play().catch(() => {});
                  setPage(index);
                }}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`border-transparent hover:border-white transition-all duration-300 px-2 py-1 rounded-full text-sm uppercase shrink-0 border ${
                page === pages.length
                  ? "bg-white/90 text-black"
                  : "bg-black/30 text-white"
              }`}
              onClick={() => {
                const audio = new Audio("/audios/page-flip-01a.mp3");
                audio.play().catch(() => {});
                setPage(pages.length);
              }}
            >
              Back Cover
            </button>
          </div>
        </div>
      </main>

      <div className="fixed inset-0 flex items-center -rotate-2 select-none">
        <div className="relative">
          <div className="bg-white/0 animate-horizontal-scroll flex items-center gap-8 w-max px-8">
            <h1 className="shrink-0 text-white text-10xl font-black ">text</h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              Text
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">Text</h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Text
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">Text</h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              Text
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">text</h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              Text
            </h2>
          </div>
          <div className="absolute top-0 left-0 bg-white/0 animate-horizontal-scroll-2 flex items-center gap-8 px-8 w-max">
            <h1 className="shrink-0 text-white text-10xl font-black ">Text</h1>
            <h2 className="shrink-0 text-white text-8xl italic font-light">
              text
            </h2>
            <h2 className="shrink-0 text-white text-12xl font-bold">Text</h2>
            <h2 className="shrink-0 text-transparent text-12xl font-bold italic outline-text">
              Text
            </h2>
            <h2 className="shrink-0 text-white text-9xl font-medium">Text</h2>
            <h2 className="shrink-0 text-white text-9xl font-extralight italic">
              Text
            </h2>
            <h2 className="shrink-0 text-white text-13xl font-bold">text</h2>
            <h2 className="shrink-0 text-transparent text-13xl font-bold outline-text italic">
              TextS
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};
