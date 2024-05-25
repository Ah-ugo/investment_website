// import React from "react";
import React, { useState, Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { BellOutlined } from "@ant-design/icons";
import { BiSearch } from "react-icons/bi";
import { Navigate, redirect, useNavigate } from "react-router-dom";

const userData = localStorage.getItem("userData122");
const mainData = JSON.parse(userData);
console.log(userData + "jggvfjd");

const user = {
  name: mainData ? mainData?.username : null,
  email: mainData ? mainData?.email : null,
  imageUrl: mainData ? mainData?.Image?.url : null,
};

const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  {
    name: "Sign out",
    href: "#",
    onClick: () => {
      localStorage.removeItem("userData122");
      return <Navigate to={"/login"} />;
    },
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function DashboardNavHeader(props) {
  const navigate = useNavigate();

  const userData = localStorage.getItem("userData122");
  const mainData = JSON.parse(userData);
  console.log(userData + "jggvfjd");

  const user = {
    name: mainData ? mainData?.username : null,
    email: mainData ? mainData?.email : null,
    imageUrl: mainData ? mainData?.Image?.url : null,
  };

  const navigation = [
    { name: "Dashboard", href: "#", current: true },
    { name: "Team", href: "#", current: false },
    { name: "Projects", href: "#", current: false },
    { name: "Calendar", href: "#", current: false },
    { name: "Reports", href: "#", current: false },
  ];
  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    {
      name: "Sign out",
      href: "#",
      onClick: () => {
        localStorage.removeItem("userData122");
        navigate("/login");
      },
    },
  ];

  if (!user.name || !user.email || !user.imageUrl) {
    navigate("/login");
  }

  return (
    <>
      {/*
          This example requires updating your template:
  
          ```
          <html class="h-full bg-gray-100">
          <body class="h-full">
          ```
        */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    {props.collapsed ? (
                      <HiOutlineMenuAlt3
                        onClick={props.handleCollapse}
                        className="font-semibold text-2xl mr-3 block lg:hidden md:hidden text-white"
                      />
                    ) : (
                      <HiOutlineX
                        onClick={props.handleCollapse}
                        className="font-semibold text-2xl mr-3 block lg:hidden md:hidden text-white"
                      />
                    )}

                    <div className="relative flex">
                      <div className="flex items-baseline space-x-4">
                        <input
                          type="text"
                          className="h-8 rounded pl-3 w-full md:w-96"
                          placeholder="Search..."
                        />
                        <button className="absolute inset-y-0 right-0 flex items-center px-2 bg-gray-600 rounded-r">
                          <BiSearch className="text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center"></div>
                  <div className="block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* <button
                        type="button"
                        className="rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"> */}
                      <span className="sr-only">View notifications</span>
                      <BellOutlined
                        className="h-6 w-6 text-white text-lg"
                        aria-hidden="true"
                      />
                      {/* </button> */}

                      {/* Profile dropdown */}
                      <Menu as="div" className="relative ml-3">
                        <div>
                          <Menu.Button className="flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <span className="sr-only">Open user menu</span>
                            <img
                              className="h-8 w-8 rounded-full"
                              src={user.imageUrl}
                              alt=""
                            />
                          </Menu.Button>
                        </div>
                        <Transition
                          as={Fragment}
                          enter="transition ease-out duration-100"
                          enterFrom="transform opacity-0 scale-95"
                          enterTo="transform opacity-100 scale-100"
                          leave="transition ease-in duration-75"
                          leaveFrom="transform opacity-100 scale-100"
                          leaveTo="transform opacity-0 scale-95">
                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            {userNavigation.map((item) => (
                              <Menu.Item key={item.name}>
                                {({ active }) => (
                                  <a
                                    href={item.href}
                                    onClick={item.onClick}
                                    className={classNames(
                                      active ? "bg-gray-100" : "",
                                      "block px-4 py-2 text-sm text-gray-700"
                                    )}>
                                    {item.name}
                                  </a>
                                )}
                              </Menu.Item>
                            ))}
                          </Menu.Items>
                        </Transition>
                      </Menu>
                    </div>
                  </div>
                  {/* <div className="-mr-2 flex md:hidden"> */}
                  {/* Mobile menu button */}
                  {/* <Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <HiOutlineX
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <HiOutlineMenuAlt3
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button> */}
                  {/* </div> */}
                </div>
              </div>

              {/* <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block rounded-md px-3 py-2 text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}>
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    <div className="flex-shrink-0">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </div>
                    <div className="ml-3">
                      <div className="text-base font-medium leading-none text-white">
                        {user.name}
                      </div>
                      <div className="text-sm font-medium leading-none text-gray-400">
                        {user.email}
                      </div>
                    </div>
                    <button
                      type="button"
                      className="ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="sr-only">View notifications</span>
                      <BellOutlined className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                  <div className="mt-3 space-y-1 px-2">
                    {userNavigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white">
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </div>
              </Disclosure.Panel> */}
            </>
          )}
        </Disclosure>

        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {/* Your content */}
          </div>
        </main>
      </div>
    </>
  );
}
