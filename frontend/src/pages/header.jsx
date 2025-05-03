import { useState, useEffect, useRef, forwardRef } from "react";
import { Link, Outlet } from "react-router-dom";

const Dropdown = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <ul className="flex flex-col gap-4 dropDown">
        <li>
          <a href="">Women</a>
        </li>
        <li>
          <a href="">Men</a>
        </li>
      </ul>
    </div>
  );
});

Dropdown.displayName = "Dropdown";

export default function Header() {
  const [open, setOpen] = useState(false);
  const shopLinkRef = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        shopLinkRef.current &&
        !shopLinkRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <>
      <header className="bg-white mt-6">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <Link className="block text-teal-600" to="/home">
            <i class="fa-solid fa-house"></i>
            <span className="sr-only">Home</span>
          </Link>

          <div className="flex flex-1 items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    ref={shopLinkRef} // ref is added on html tags
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/shop"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen((prev) => !prev);
                    }}
                  >
                    {" "}
                    Shop{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-gray-500 transition hover:text-gray-500/75"
                    to="/about"
                  >
                    {" "}
                    About{" "}
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-6">
                <a>
                  <i class="fa-solid fa-user"></i>
                </a>

                <a>
                  <i class="fa-solid fa-bag-shopping"></i>
                </a>
              </div>

              <button className="block rounded-sm bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
                <span className="sr-only">Toggle menu</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {open && <Dropdown ref={dropdownRef} />}
        <Outlet />
        <hr />
      </header>
    </>
  );
}
