import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bottom-0 text-white bg-gray-800 pb-6">
      <div className="container mx-auto px-4">
        <hr className="mb-6 border-b-1 border-gray-600" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4">
            <div className="text-sm text-white hover:text-blue-300 font-semibold py-1 text-center md:text-left">
              Copyright © {new Date().getFullYear()}{" "}
              <a
                href="https://www.creative-tim.com?ref=nnjs-footer-small"
                className=" hover:text-blue-300 text-sm font-semibold py-1"
              >
                Creative Tim
              </a>
            </div>
          </div>
          <div className="w-full md:w-8/12 px-4">
            <div className="flex flex-wrap list-none md:justify-end  justify-center">
              <div>
                <a
                  href="https://www.creative-tim.com?ref=nnjs-footer-small"
                  className=" hover:text-blue-300 text-sm font-semibold block py-1 px-3"
                >
                  Creative Tim
                </a>
              </div>
              <div>
                <a
                  href="https://www.creative-tim.com/presentation?ref=nnjs-footer-small"
                  className=" hover:text-blue-300 text-sm font-semibold block py-1 px-3"
                >
                  About Us
                </a>
              </div>
              <div>
                <a
                  href="http://blog.creative-tim.com?ref=nnjs-footer-small"
                  className=" hover:text-blue-300 text-sm font-semibold block py-1 px-3"
                >
                  Blog
                </a>
              </div>
              <div>
                <a
                  href="https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md?ref=nnjs-footer-small"
                  className=" hover:text-blue-300 text-sm font-semibold block py-1 px-3"
                >
                  MIT License
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
