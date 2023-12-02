import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Contact Us", href: "#" },
  { name: "How It Works", href: "#" },
];

export default function NavbarComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <div>
      <header
        className="absolute inset-x-0 top-0 z-50"
        style={{ backgroundColor: "linear-gradient(180deg,#0a3a96,#02aeee)" }}>
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              /> */}
              <h1
                className="font-bold text-white text-3xl"
                style={{ fontFamily: "Agdasima" }}>
                SigmaPhi
              </h1>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}>
              <span className="sr-only">Open main menu</span>
              <HiOutlineMenuAlt3
                className="h-6 w-6 text-white"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-white">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end space-x-3 align-middle">
            <a href="#" className="text-sm font-semibold leading-6 text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
            <a
              href="#"
              className="text-sm font-semibold leading-6 bg-white p-1 text-indigo-600 rounded hover:bg-indigo-300">
              Register
              {/* <span aria-hidden="true">&rarr;</span> */}
            </a>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <h1
                  className="font-bold text-blue-700 text-3xl"
                  style={{ fontFamily: "Agdasima" }}>
                  SigmaPhi
                </h1>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <HiOutlineX className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    Log in
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 bg-indigo-600 p-1 text-white rounded hover:bg-indigo-300">
                    Register
                    {/* <span aria-hidden="true">&rarr;</span> */}
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
