import React from "react";

import { useState, useEffect } from "react";

import { Link } from "gatsby";
import MobileMenu from "./mobile-menu";

export default function Header(
  props: { textColor?: string; raivnText?: string } = {
    textColor: "text-gray-900",
    raivnText: "text-purple-900",
  }
) {
  const [top, setTop] = useState<boolean>(true);

  // detect whether user has scrolled the page down by 10px
  const scrollHandler = () => {
    window.pageYOffset > 10 ? setTop(false) : setTop(true);
  };

  useEffect(() => {
    scrollHandler();
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, [top]);

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        props.textColor
      } ${!top ? "bg-white backdrop-blur-sm shadow-lg !text-gray-600" : ""}`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            <Link to="/" className="block" aria-label="Cruip">
              <div>
                <img
                  src="/simple-raven-6.png"
                  className="w-8 h-8 inline-block"
                />
                <div
                  className={`inline-block align-middle ml-3 text-[15px] font-medium ${
                    props.raivnText
                  } ${props.textColor} ${!top ? " !text-gray-600" : ""}`}
                >
                  UW RAIVN Lab
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <Link
                  to="/people"
                  className="text-gray-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  People
                </Link>
              </li>
              <li>
                <Link
                  to="/research"
                  className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Research
                </Link>
              </li>
              <li>
                <Link
                  to="/join"
                  className="text-gray-600 hover:text-gray-900 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                >
                  Join
                </Link>
              </li>
            </ul>

            {/* Desktop sign in links */}
            {/* <ul className="flex grow justify-end flex-wrap items-center"> */}
            {/* <li>
                <Link href="/signin" className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out">Sign in</Link>
              </li> */}
            {/* <li>
                <Link href="/signup" className="btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
                  <span>Sign up</span>
                  <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                  </svg>
                </Link>
              </li> */}
            {/* </ul> */}
          </nav>

          <MobileMenu textColor={!top ? " !text-gray-600" : props.textColor} />
        </div>
      </div>
    </header>
  );
}
