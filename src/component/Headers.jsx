
const Header = () => {
  return (
    <header className="bg-black">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <h1 className="font-bold text-2xl text-white hover:text-indigo-600 cursor-pointer">Imals Portofolio</h1>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="text-white transition hover:text-indigo-600" href="#"> About </a>
                </li>

                <li>
                  <a className="text-white transition hover:text-indigo-600" href="#"> Home </a>
                </li>

                <li>
                  <a className="text-white transition hover:text-indigo-600" href="#"> History </a>
                </li>

                <li>
                  <a className="text-white transition hover:text-indigo-600" href="#"> Projects </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <a
                  className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-indigo-800"
                  href="#"
                >
                  Login
                </a>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
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