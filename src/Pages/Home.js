import React from "react";
import NavbarComponent from "../Components/NavbarComponent";
import Lottie from "react-lottie-player";
import Lottiedata from "../Components/Assets/Images/AnimeLottie/132349-business-woman.json";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { IoWalletOutline } from "react-icons/io5";
import { BsBank, BsStarFill } from "react-icons/bs";
import {
  AiOutlineArrowRight,
  AiOutlineBulb,
  AiOutlineStar,
  AiOutlineCheck,
  AiOutlineCreditCard,
  AiOutlineWallet,
  AiOutlineUser,
} from "react-icons/ai";
import { RiSecurePaymentLine } from "react-icons/ri";

const stats = [
  {
    id: 1,
    name: "Total Transactions",
    value: "44 million",
    icon: <AiOutlineWallet />,
  },
  {
    id: 2,
    name: "Total Investments",
    value: "₦119 million",
    icon: <BsBank />,
  },
  { id: 3, name: "Total Users", value: "46,000", icon: <AiOutlineUser /> },
];

export default function Home() {
  return (
    <div
      className=""
      style={{ backgroundImage: "linear-gradient(180deg,#0a3a96,#02aeee)" }}>
      <NavbarComponent />
      <div className="pt-12 lg:pt-28">
        <main className="grid grid-cols-1 lg:grid-cols-2 p-6 lg:gap-48">
          <div className="flex flex-col lg:mt-10">
            <div className="po"></div>
            <label className="font-bold text-3xl pr-6 pb-5 text-left text-white ">
              Invest with Confidence:{" "}
              <span style={{ fontFamily: "Agdasima" }}>SigmaPhi</span>
            </label>
            <label className="text-xl font-sans font-medium pr-6 text-left text-clip text-white">
              Welcome to SigmaPhi Investment, your trusted partner for
              investment success. With our comprehensive platform, you gain the
              tools and expertise needed to make confident investment decisions.
            </label>
            <div className="flex gap-6 mt-5">
              <button className="bg-white text-indigo-600 font-semibold p-3 rounded">
                GET STARTED
              </button>
              <button className="text-white font-semibold">HOW IT WORKS</button>
            </div>
          </div>
          <div className="mt-0 lg:-mt-28">
            <Lottie animationData={Lottiedata} play loop />
          </div>
        </main>
      </div>
      <div className="bg-white">
        <main className="text-center lg:text-center pt-14  p-3">
          {/* <label className="text-gray-400 text-lg lg:text-2xl font-medium tracking-widest">
            OUR INVESTMENT PLANS
          </label> */}
          <h1 className="text-3xl lg:text-6xl font-bold">
            Start Investing In Three Steps
          </h1>
          <label className="text-gray-400 text-lg lg:text-2xl font-medium tracking-widest">
            Investing has never been easier. Get started in 3 easy steps
          </label>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 justify-items-center gap-10 mt-6">
            <main className="flex flex-col text-left p-4 w-auto border-2 border-gray-300 rounded">
              <MdOutlinePersonAddAlt className="font-normal text-4xl text-sky-700" />
              <h1 className="font-bold text-xl">Create an account</h1>
              <p>
                by selecting your country and instantly verify your identity
                using your government issued number like your Bank Verification
                Number or National Identity Number.
              </p>
            </main>
            <main className="flex flex-col text-left p-4 w-auto border-2 border-gray-300 rounded">
              <IoWalletOutline className="font-normal text-4xl text-sky-700" />
              <h1 className="font-bold text-xl">Fund your wallet </h1>
              <p>
                via multiple channels including your local currency cards and
                our partner will handle the currency conversion instantly in one
                click.
              </p>
            </main>
            <main className="flex flex-col text-left p-4 w-auto border-2 border-gray-300 rounded">
              <BsBank className="font-normal text-4xl text-sky-700" />
              <h1 className="font-bold text-xl">Start Investing </h1>
              <p>
                in your favorite public listed US company, a bundle of companies
                called an ETF, other African companies, mutual funds, or fixed
                income products from around the world.
              </p>
            </main>
          </div>
          <main className="flex justify-center lg:justify-end mt-6">
            <button className="flex flex-row items-center gap-2 p-3 rounded text-sky-700 font-bold ">
              GET STARTED
              <AiOutlineArrowRight />
            </button>
          </main>
        </main>
      </div>
      <div className="bg-white">
        <main className="text-center lg:text-center pt-14 p-3">
          <label className="text-gray-400 text-lg lg:text-2xl font-medium tracking-widest">
            OUR INVESTMENT PLANS
          </label>
          <h1 className="text-3xl lg:text-6xl font-bold">
            The Most Affordable Investment Solutions Tailored For You
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-10 mt-6">
            <main
              className="flex flex-col text-left  p-4 pt-11 w-auto"
              style={{
                backgroundImage: "linear-gradient(180deg,#0a3a96,#02aeee)",
              }}>
              <AiOutlineBulb className="font-normal text-4xl text-yellow-100 mb-6" />
              <h1 className="font-bold text-2xl text-white">Standard</h1>
              <label className="text-white font-semibold">Weekly ₦1000</label>

              <div className="flex flex-col gap-y-5 mt-6">
                <div className="flex flex-row gap-36 items-center justify-between">
                  <label className="font-semibold text-white">Investment</label>
                  <div className="bg-white text-sky-700 rounded p-2">
                    <label className="font-semibold">₦2000</label>
                  </div>
                </div>

                <div className="flex flex-row gap-36 items-center justify-between">
                  <label className="font-semibold text-white">
                    Length Of Period
                  </label>
                  <div className="text-white">
                    <label className="font-semibold">30 days</label>
                  </div>
                </div>

                <div className="flex flex-row gap-36 items-center justify-between">
                  <label className="font-semibold text-white">
                    Profit Withdrawal
                  </label>
                  <div className="text-white">
                    <label className="font-semibold">Weekly</label>
                  </div>
                </div>

                <div className="flex flex-row gap-36 items-center justify-between">
                  <label className="font-semibold text-white">
                    Capital Back
                  </label>
                  <div className="text-white">
                    <label className="font-semibold">Yes</label>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button className="bg-white w-full text-sky-600 flex flex-row items-center justify-center rounded text-lg font-bold p-3 gap-2">
                  <AiOutlineCheck className="font-bold" />
                  Invest Now
                </button>
              </div>
            </main>

            <main
              className="flex flex-col text-left  p-4 pt-11 w-auto"
              style={{
                backgroundImage: "linear-gradient(180deg,#0a3a96,#02aeee)",
              }}>
              <AiOutlineStar className="font-normal text-4xl text-yellow-100 mb-6" />
              <h1 className="font-bold text-2xl text-white">Bronze</h1>
              <label className="text-white font-semibold">Weekly ₦3000</label>

              <div className="flex flex-col gap-y-5 mt-6">
                <div className="flex flex-row gap-36 items-center justify-between">
                  <label className="font-semibold text-white">Investment</label>
                  <div className="bg-white text-sky-700 rounded p-2">
                    <label className="font-semibold">₦6000</label>
                  </div>
                </div>

                <div className="flex flex-row gap-36 items-center justify-between">
                  <label className="font-semibold text-white">
                    Length Of Period
                  </label>
                  <div className="text-white">
                    <label className="font-semibold">30 days</label>
                  </div>
                </div>

                <div className="flex flex-row gap-36 items-center justify-between">
                  <label className="font-semibold text-white">
                    Profit Withdrawal
                  </label>
                  <div className="text-white">
                    <label className="font-semibold">Weekly</label>
                  </div>
                </div>

                <div className="flex flex-row gap-36 items-center justify-between">
                  <label className="font-semibold text-white">
                    Capital Back
                  </label>
                  <div className="text-white">
                    <label className="font-semibold">Yes</label>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button className="bg-white w-full text-sky-600 flex flex-row items-center justify-center rounded text-lg font-bold p-3 gap-2">
                  <AiOutlineCheck className="font-bold" />
                  Invest Now
                </button>
              </div>
            </main>

            <main
              className="flex flex-col text-left  p-4 pt-11 w-auto"
              style={{
                backgroundImage: "linear-gradient(180deg,#0a3a96,#02aeee)",
              }}>
              <div className="flex">
                <AiOutlineStar className="font-normal text-4xl text-yellow-100 mb-6" />
                <AiOutlineStar className="font-normal text-4xl text-yellow-100 mb-6" />
              </div>
              <h1 className="font-bold text-2xl text-white">Silver</h1>
              <label className="text-white font-semibold">Weekly ₦5000</label>

              <div className="flex flex-col gap-y-5 mt-6">
                <div className="flex flex-row gap-36 items-center justify-between">
                  <label className="font-semibold text-white">Investment</label>
                  <div className="bg-white text-sky-700 rounded p-2">
                    <label className="font-semibold">₦10000</label>
                  </div>
                </div>

                <div className="flex flex-row gap-36 items-center justify-between">
                  <label className="font-semibold text-white">
                    Length Of Period
                  </label>
                  <div className="text-white">
                    <label className="font-semibold">30 days</label>
                  </div>
                </div>

                <div className="flex flex-row gap-36 items-center justify-between">
                  <label className="font-semibold text-white">
                    Profit Withdrawal
                  </label>
                  <div className="text-white">
                    <label className="font-semibold">Weekly</label>
                  </div>
                </div>

                <div className="flex flex-row gap-36 items-center justify-between">
                  <label className="font-semibold text-white">
                    Capital Back
                  </label>
                  <div className="text-white">
                    <label className="font-semibold">Yes</label>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button className="bg-white w-full text-sky-600 flex flex-row items-center justify-center rounded text-lg font-bold p-3 gap-2">
                  <AiOutlineCheck className="font-bold" />
                  Invest Now
                </button>
              </div>
            </main>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-10 mt-6">
            <main
              className="flex flex-col text-left  p-4 pt-11 w-auto"
              style={{
                backgroundImage: "linear-gradient(180deg,#0a3a96,#02aeee)",
              }}>
              <div className="flex">
                <AiOutlineStar className="font-normal text-4xl text-yellow-100 mb-6" />
                <AiOutlineStar className="font-normal text-4xl text-yellow-100 mb-6" />
                <AiOutlineStar className="font-normal text-4xl text-yellow-100 mb-6" />
              </div>
              <h1 className="font-bold text-2xl text-white">Gold</h1>
              <label className="text-white font-semibold">Weekly ₦7000</label>

              <div className="flex flex-col gap-y-5 mt-6">
                <div className="flex flex-row gap-36 items-center justify-between">
                  <label className="font-semibold text-white">Investment</label>
                  <div className="bg-white text-sky-700 rounded p-2">
                    <label className="font-semibold">₦14000</label>
                  </div>
                </div>

                <div className="flex flex-row gap-36 items-center justify-between">
                  <label className="font-semibold text-white">
                    Length Of Period
                  </label>
                  <div className="text-white">
                    <label className="font-semibold">30 days</label>
                  </div>
                </div>

                <div className="flex flex-row gap-36 items-center justify-between">
                  <label className="font-semibold text-white">
                    Profit Withdrawal
                  </label>
                  <div className="text-white">
                    <label className="font-semibold">Weekly</label>
                  </div>
                </div>

                <div className="flex flex-row gap-36 items-center justify-between">
                  <label className="font-semibold text-white">
                    Capital Back
                  </label>
                  <div className="text-white">
                    <label className="font-semibold">Yes</label>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button className="bg-white w-full text-sky-600 flex flex-row items-center justify-center rounded text-lg font-bold p-3 gap-2">
                  <AiOutlineCheck className="font-bold" />
                  Invest Now
                </button>
              </div>
            </main>

            <main
              className="flex flex-col text-left  p-4 pt-11 w-auto"
              style={{
                backgroundImage: "linear-gradient(180deg,#0a3a96,#02aeee)",
              }}>
              <div className="flex">
                <AiOutlineStar className="font-normal text-4xl text-yellow-100 mb-6" />
                <AiOutlineStar className="font-normal text-4xl text-yellow-100 mb-6" />
                <AiOutlineStar className="font-normal text-4xl text-yellow-100 mb-6" />
                <AiOutlineStar className="font-normal text-4xl text-yellow-100 mb-6" />
              </div>
              <h1 className="font-bold text-2xl text-white">Emerald</h1>
              <label className="text-white font-semibold">Weekly ₦9000</label>

              <div className="flex flex-col gap-y-5 mt-6">
                <div className="flex flex-row gap-36 items-center justify-between">
                  <label className="font-semibold text-white">Investment</label>
                  <div className="bg-white text-sky-700 rounded p-2">
                    <label className="font-semibold">₦18000</label>
                  </div>
                </div>

                <div className="flex flex-row gap-36 items-center justify-between">
                  <label className="font-semibold text-white">
                    Length Of Period
                  </label>
                  <div className="text-white">
                    <label className="font-semibold">30 days</label>
                  </div>
                </div>

                <div className="flex flex-row gap-36 items-center justify-between">
                  <label className="font-semibold text-white">
                    Profit Withdrawal
                  </label>
                  <div className="text-white">
                    <label className="font-semibold">Weekly</label>
                  </div>
                </div>

                <div className="flex flex-row gap-36 items-center justify-between">
                  <label className="font-semibold text-white">
                    Capital Back
                  </label>
                  <div className="text-white">
                    <label className="font-semibold">Yes</label>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button className="bg-white w-full text-sky-600 flex flex-row items-center justify-center rounded text-lg font-bold p-3 gap-2">
                  <AiOutlineCheck className="font-bold" />
                  Invest Now
                </button>
              </div>
            </main>

            <main
              className="flex flex-col text-left  p-4 pt-11 w-auto"
              style={{
                backgroundImage: "linear-gradient(180deg,#0a3a96,#02aeee)",
              }}>
              <div className="flex">
                <AiOutlineStar className="font-normal text-4xl text-yellow-100 mb-6" />
                <AiOutlineStar className="font-normal text-4xl text-yellow-100 mb-6" />
                <AiOutlineStar className="font-normal text-4xl text-yellow-100 mb-6" />
                <AiOutlineStar className="font-normal text-4xl text-yellow-100 mb-6" />
                <AiOutlineStar className="font-normal text-4xl text-yellow-100 mb-6" />
              </div>
              <h1 className="font-bold text-2xl text-white">Ruby</h1>
              <label className="text-white font-semibold">Weekly ₦11000</label>

              <div className="flex flex-col gap-y-5 mt-6">
                <div className="flex flex-row gap-36 items-center justify-between">
                  <label className="font-semibold text-white">Investment</label>
                  <div className="bg-white text-sky-700 rounded p-2">
                    <label className="font-semibold">₦22000</label>
                  </div>
                </div>

                <div className="flex flex-row gap-36 items-center justify-between">
                  <label className="font-semibold text-white">
                    Length Of Period
                  </label>
                  <div className="text-white">
                    <label className="font-semibold">30 days</label>
                  </div>
                </div>

                <div className="flex flex-row gap-36 items-center justify-between">
                  <label className="font-semibold text-white">
                    Profit Withdrawal
                  </label>
                  <div className="text-white">
                    <label className="font-semibold">Weekly</label>
                  </div>
                </div>

                <div className="flex flex-row gap-36 items-center justify-between">
                  <label className="font-semibold text-white">
                    Capital Back
                  </label>
                  <div className="text-white">
                    <label className="font-semibold">Yes</label>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                <button className="bg-white w-full text-sky-600 flex flex-row items-center justify-center rounded text-lg font-bold p-3 gap-2">
                  <AiOutlineCheck className="font-bold" />
                  Invest Now
                </button>
              </div>
            </main>
            <main></main>
          </div>
        </main>
      </div>

      <div className="bg-white pb-8">
        <main className="text-center">
          <label className="text-gray-400 text-lg lg:text-2xl font-medium tracking-widest">
            WHY CHOOSE US
          </label>
          <h1 className="font-bold text-3xl lg:text-6xl">
            Why You Should Work With Us
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 p-3 mt-5 gap-7">
            <main className="flex flex-row gap-7 content-center items-center border-2 border-gray-300 rounded p-3">
              <div
                className="p-3 text-white rounded self-auto"
                style={{
                  backgroundImage: "linear-gradient(180deg,#0a3a96,#02aeee)",
                }}>
                <AiOutlineCreditCard className="text-3xl" />
              </div>

              <div className="text-left">
                <h1 className="font-bold text-xl">
                  Customized Investment Solutions
                </h1>
                <label className="font-semibold text-gray-500">
                  We understand that every investor has unique goals and
                  preferences. Our platform offers customized investment
                  solutions tailored to your specific needs.
                </label>
              </div>
            </main>

            <main className="flex flex-row gap-7 content-center items-center border-2 border-gray-300 rounded p-3">
              <div
                className="p-3 text-white rounded self-auto"
                style={{
                  backgroundImage: "linear-gradient(180deg,#0a3a96,#02aeee)",
                }}>
                <BsBank className="text-3xl" />
              </div>

              <div className="text-left">
                <h1 className="font-bold text-xl">
                  Safeguarded with Leading Banks
                </h1>
                <label className="font-semibold text-gray-500">
                  Our partnerships with reputable banks worldwide guarantee that
                  your financial information and transactions are safeguarded
                  with the highest level of security standards
                </label>
              </div>
            </main>

            <main className="flex flex-row gap-7 content-center items-center border-2 border-gray-300 rounded p-3">
              <div
                className="p-3 text-white rounded self-auto"
                style={{
                  backgroundImage: "linear-gradient(180deg,#0a3a96,#02aeee)",
                }}>
                <AiOutlineWallet className="text-3xl" />
              </div>

              <div className="text-left">
                <h1 className="font-bold text-xl">
                  Regulated Around the World
                </h1>
                <label className="font-semibold text-gray-500">
                  We are registered and regulated in multiple jurisdictions,
                  providing you with the highest level of protection and
                  confidence when making international transactions.
                </label>
              </div>
            </main>

            <main className="flex flex-row gap-7 content-center items-center border-2 border-gray-300 rounded p-3">
              <div
                className="p-3 text-white rounded self-auto"
                style={{
                  backgroundImage: "linear-gradient(180deg,#0a3a96,#02aeee)",
                }}>
                <RiSecurePaymentLine className="text-3xl" />
              </div>

              <div className="text-left">
                <h1 className="font-bold text-xl">
                  Advanced Security Measures
                </h1>
                <label className="font-semibold text-gray-500">
                  Sensitive financial information such as bank account numbers
                  and debit card is protected from being accessed by
                  unauthorized individuals.
                </label>
              </div>
            </main>
          </div>
        </main>
      </div>

      <main
        id="stats"
        className=""
        style={{ backgroundImage: "linear-gradient(180deg,#0a3a96,#02aeee)" }}>
        <div className="py-24 sm:py-32 text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.id}
                  className="mx-auto flex max-w-xs flex-col gap-y-4">
                  <dt className="text-base leading-7 text-white">
                    {stat.name}
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </main>

      <main>
        <div className="bg-white">
          <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8 items-center self-center">
            <div className="relative isolate overflow-hidden px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0 justify-between items-center">
              <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Investing seamlessly is one step away
                </h2>
                <p className="mt-6 text-lg leading-8">
                  Join the SigmaPhi Investments family today and unlock your
                  financial potential! With over 50,000 satisfied members, our
                  investment platform offers a world of opportunities.
                </p>
              </div>
              <div className="relative mt-16 h-80 lg:mt-8 self-center items-center">
                <div className="mt-10 flex items-center justify-center gap-x-6 self-center my-auto justify-items-center">
                  <a
                    href="#"
                    className="rounded-md bg-sky-600 text-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-sky-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                    Get started
                  </a>
                  <a
                    href="#"
                    className="text-sm font-semibold leading-6 text-sky-600 hover:text-sky-400">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <main id="FAQ">
        <section
          // className="bg-gray-800 text-gray-100"
          style={{
            // backgroundImage: "linear-gradient(180deg,#0a3a96,#000099)",
            backgroundColor: "#0660ac",
          }}>
          <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
            <h2 className="text-2xl font-semibold sm:text-4xl text-white">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 mb-8 dark:text-gray-400 text-white">
              Sagittis tempor donec id vestibulum viverra. Neque condimentum
              primis orci at lacus amet bibendum.
            </p>
            <div className="space-y-4">
              <details className="w-full border-2 rounded-lg border-gray-500">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ri text-white">
                  How do I create an account with SigmaPhi Investment?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-400">
                  Creating an account is simple. Visit our website and click on
                  the "Register" button. Fill in the required information,
                  including your name, email address, and password. Follow the
                  prompts to complete the registration process, and you'll be
                  ready to start investing with us.
                </p>
              </details>
              <details className="w-full border-2 rounded-lg border-gray-500">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ri text-white">
                  What are the accepted payment methods for depositing funds?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-300">
                  SigmaPhi Investment offers various convenient payment methods
                  for depositing funds. You can use bank transfers, credit/debit
                  cards, or select online payment systems. We strive to provide
                  multiple options to cater to your preferences and ensure a
                  seamless deposit process.
                </p>
              </details>
              <details className="w-full border-2 rounded-lg border-gray-500">
                <summary className="px-4 py-6 focus:outline-none focus-visible:ri text-white">
                  Can I withdraw my funds at anytime?
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-300">
                  No, you cannot withdraw your funds at any time, only after
                  once a week subject to certain conditions. Simply log in to
                  your account, navigate to the withdrawal section, and follow
                  the instructions provided. Please note that withdrawal
                  processing times may vary depending on your chosen withdrawal
                  method and any additional verification requirements.
                </p>
              </details>
            </div>
          </div>
        </section>
      </main>

      <main id="footer">
        <footer className="p-6 bg-white">
          <div className="grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
            <div className="flex flex-col space-y-4">
              <h2 className="font-medium">Getting started</h2>
              <div className="flex flex-col space-y-2 text-sm text-gray-400">
                <a rel="noopener noreferrer" href="#">
                  Installation
                </a>
                <a rel="noopener noreferrer" href="#">
                  Release Notes
                </a>
                <a rel="noopener noreferrer" href="#">
                  Upgrade Guide
                </a>
                <a rel="noopener noreferrer" href="#">
                  Using with Preprocessors
                </a>
                <a rel="noopener noreferrer" href="#">
                  Optimizing for Production
                </a>
                <a rel="noopener noreferrer" href="#">
                  Browser Support
                </a>
                <a rel="noopener noreferrer" href="#">
                  IntelliSense
                </a>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="font-medium">Core Concepts</h2>
              <div className="flex flex-col space-y-2 text-sm text-gray-400">
                <a rel="noopener noreferrer" href="#">
                  Utility-First
                </a>
                <a rel="noopener noreferrer" href="#">
                  Responsive Design
                </a>
                <a rel="noopener noreferrer" href="#">
                  Hover, Focus, &amp; Other States
                </a>
                <a rel="noopener noreferrer" href="#">
                  Dark Mode
                </a>
                <a rel="noopener noreferrer" href="#">
                  Adding Base Styles
                </a>
                <a rel="noopener noreferrer" href="#">
                  Extracting Components
                </a>
                <a rel="noopener noreferrer" href="#">
                  Adding New Utilities
                </a>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="font-medium">Customization</h2>
              <div className="flex flex-col space-y-2 text-sm text-gray-400">
                <a rel="noopener noreferrer" href="#">
                  Configuration
                </a>
                <a rel="noopener noreferrer" href="#">
                  Theme Configuration
                </a>
                <a rel="noopener noreferrer" href="#">
                  Breakpoints
                </a>
                <a rel="noopener noreferrer" href="#">
                  Customizing Colors
                </a>
                <a rel="noopener noreferrer" href="#">
                  Customizing Spacing
                </a>
                <a rel="noopener noreferrer" href="#">
                  Configuring Variants
                </a>
                <a rel="noopener noreferrer" href="#">
                  Plugins
                </a>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <h2 className="font-medium">Community</h2>
              <div className="flex flex-col space-y-2 text-sm text-gray-400">
                <a rel="noopener noreferrer" href="#">
                  GitHub
                </a>
                <a rel="noopener noreferrer" href="#">
                  Discord
                </a>
                <a rel="noopener noreferrer" href="#">
                  Twitter
                </a>
                <a rel="noopener noreferrer" href="#">
                  YouTube
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center px-6 pt-12 text-sm">
            <span className="text-gray-400">
              © Copyright 2023. All Rights Reserved.
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}
