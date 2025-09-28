import { FcAbout } from "react-icons/fc";
import { FaDiagramProject } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";

const Header = () => {
  return (
    <header className="bg-black">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <h1 className="font-bold text-2xl text-white hover:text-indigo-600 cursor-pointer">
              Raksa Portfolio
            </h1>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li className="flex items-center gap-2">
                  <FcAbout size={24} /> {/* Ukuran ikon diatur */}
                  <a className="text-white transition hover:text-indigo-600" href="#about">
                    About
                  </a>
                </li>

                <li className="flex items-center gap-2">
                  <FaDiagramProject size={24} color="red" />
                  <a className="text-white transition hover:text-indigo-600" href="#project">
                    Projects
                  </a>
                </li>

                <li className="flex items-center gap-2">
                  <GiSkills color="white" size={24} />
                  <a className="text-white transition hover:text-indigo-600" href="#skills">
                    Skills
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
