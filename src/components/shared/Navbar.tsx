import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import opensea from '../../assets/img/opensea.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCartShopping, faUserAlt, faWallet } from '@fortawesome/free-solid-svg-icons'

const solutions = [
  {
    name: "Analytics",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "/#",
    icon: ChartBarIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "/#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers' data will be safe and secure.",
    href: "/#",
    icon: ShieldCheckIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools that you're already using.",
    href: "/#",
    icon: Squares2X2Icon,
  },
  {
    name: "Automations",
    description:
      "Build strategic funnels that will drive your customers to convert",
    href: "/#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch Demo", href: "/#", icon: PlayIcon },
  { name: "Contact Sales", href: "/#", icon: PhoneIcon },
];
const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "/#",
    icon: LifebuoyIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "/#",
    icon: BookmarkSquareIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "/#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "/#",
    icon: ShieldCheckIcon,
  },
];
const recentPosts = [
  { id: 1, name: "Boost your conversion rate", href: "/#" },
  {
    id: 2,
    name: "How to use search engine optimization to drive traffic to your site",
    href: "/#",
  },
  { id: 3, name: "Improve your customer experience", href: "/#" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <>
      <Popover className="relative bg-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex items-center justify-between border-gray-100 py-6 md:justify-start md:space-x-10">
            <a href="/#" className="">
              <div className="flex flex-row-reverse items-center">
                <div>
                  <svg
                    fill="#fff"
                    height="58"
                    style={{ width: "40%", paddingLeft: "15px" }}
                    viewBox="0 0 313 58"
                    width="313"
                  >
                    <path d="M24.7232 47.4966C20.2031 47.4966 16.0484 46.4837 12.2588 44.4579C8.51498 42.432 5.52447 39.6135 3.28729 36.0023C1.09576 32.347 0 28.2513 0 23.7153C0 19.1792 1.09576 15.1055 3.28729 11.4943C5.52447 7.88307 8.51498 5.06454 12.2588 3.03872C16.0484 1.01291 20.2031 0 24.7232 0C29.2432 0 33.3751 1.01291 37.119 3.03872C40.9085 5.06454 43.8762 7.88307 46.0221 11.4943C48.2136 15.1055 49.3094 19.1792 49.3094 23.7153C49.3094 28.2513 48.2136 32.347 46.0221 36.0023C43.8305 39.6135 40.8628 42.432 37.119 44.4579C33.3751 46.4837 29.2432 47.4966 24.7232 47.4966ZM24.7232 37.1913C28.5583 37.1913 31.6173 35.9582 33.9002 33.492C36.2287 31.0258 37.3929 27.7669 37.3929 23.7153C37.3929 19.6196 36.2287 16.3607 33.9002 13.9385C31.6173 11.4723 28.5583 10.2392 24.7232 10.2392C20.8423 10.2392 17.7377 11.4503 15.4092 13.8724C13.1263 16.2946 11.9849 19.5755 11.9849 23.7153C11.9849 27.8109 13.1263 31.0919 15.4092 33.5581C17.7377 35.9803 20.8423 37.1913 24.7232 37.1913Z"></path>
                    <path d="M67.5356 15.3918C68.677 13.6743 70.2521 12.287 72.261 11.2301C74.2699 10.1731 76.6212 9.64465 79.315 9.64465C82.4653 9.64465 85.3189 10.4153 87.8756 11.9567C90.4324 13.4981 92.4413 15.7001 93.9024 18.5626C95.409 21.4252 96.1624 24.7502 96.1624 28.5376C96.1624 32.325 95.409 35.672 93.9024 38.5786C92.4413 41.4412 90.4324 43.6651 87.8756 45.2506C85.3189 46.792 82.4653 47.5626 79.315 47.5626C76.6669 47.5626 74.3156 47.0342 72.261 45.9772C70.2521 44.9203 68.677 43.5551 67.5356 41.8815V58H55.8246V10.1731H67.5356V15.3918ZM84.2459 28.5376C84.2459 25.7191 83.4241 23.5171 81.7805 21.9317C80.1825 20.3022 78.1964 19.4875 75.8223 19.4875C73.4938 19.4875 71.5077 20.3022 69.8641 21.9317C68.2661 23.5611 67.467 25.7851 67.467 28.6036C67.467 31.4222 68.2661 33.6462 69.8641 35.2756C71.5077 36.9051 73.4938 37.7198 75.8223 37.7198C78.1508 37.7198 80.1368 36.9051 81.7805 35.2756C83.4241 33.6021 84.2459 31.3561 84.2459 28.5376Z"></path>
                    <path d="M138.329 28.0091C138.329 29.0661 138.261 30.167 138.124 31.3121H111.62C111.803 33.6021 112.556 35.3637 113.88 36.5968C115.25 37.7859 116.916 38.3804 118.88 38.3804C121.802 38.3804 123.833 37.1913 124.975 34.8132H137.439C136.8 37.2354 135.636 39.4153 133.946 41.3531C132.303 43.2908 130.225 44.8102 127.714 45.9112C125.203 47.0121 122.395 47.5626 119.291 47.5626C115.547 47.5626 112.214 46.792 109.292 45.2506C106.37 43.7092 104.087 41.5072 102.443 38.6446C100.8 35.7821 99.9777 32.4351 99.9777 28.6036C99.9777 24.7722 100.777 21.4252 102.375 18.5626C104.018 15.7001 106.301 13.4981 109.223 11.9567C112.145 10.4153 115.501 9.64465 119.291 9.64465C122.989 9.64465 126.276 10.3933 129.152 11.8907C132.029 13.388 134.266 15.5239 135.864 18.2984C137.508 21.0729 138.329 24.3098 138.329 28.0091ZM126.345 25.0364C126.345 23.0987 125.66 21.5573 124.29 20.4123C122.92 19.2673 121.208 18.6948 119.154 18.6948C117.19 18.6948 115.524 19.2453 114.154 20.3462C112.83 21.4472 112.008 23.0106 111.689 25.0364H126.345Z"></path>
                    <path d="M167.793 9.77676C172.267 9.77676 175.828 11.186 178.476 14.0046C181.17 16.779 182.517 20.6105 182.517 25.4989V47.0342H170.874V27.0182C170.874 24.552 170.212 22.6363 168.888 21.2711C167.564 19.9058 165.784 19.2232 163.547 19.2232C161.309 19.2232 159.529 19.9058 158.205 21.2711C156.881 22.6363 156.219 24.552 156.219 27.0182V47.0342H144.508V10.1731H156.219V15.0615C157.406 13.432 159.004 12.1549 161.013 11.2301C163.021 10.2612 165.281 9.77676 167.793 9.77676Z"></path>
                    <path d="M208.05 47.4966C204.535 47.4966 201.384 46.9461 198.599 45.8451C195.814 44.7441 193.577 43.1147 191.888 40.9567C190.244 38.7988 189.376 36.2005 189.285 33.1617H201.749C201.932 34.8793 202.548 36.2005 203.599 37.1253C204.649 38.0061 206.018 38.4465 207.708 38.4465C209.443 38.4465 210.812 38.0721 211.817 37.3235C212.821 36.5308 213.324 35.4518 213.324 34.0866C213.324 32.9415 212.913 31.9947 212.091 31.246C211.315 30.4973 210.333 29.8808 209.146 29.3964C208.004 28.9119 206.361 28.3614 204.215 27.7449C201.11 26.82 198.576 25.8952 196.613 24.9704C194.65 24.0456 192.961 22.6803 191.545 20.8747C190.13 19.0691 189.422 16.713 189.422 13.8064C189.422 9.49051 191.043 6.12149 194.285 3.69932C197.526 1.23311 201.749 0 206.954 0C212.251 0 216.519 1.23311 219.761 3.69932C223.003 6.12149 224.738 9.51253 224.966 13.8724H212.296C212.205 12.3751 211.634 11.208 210.584 10.3713C209.534 9.49051 208.187 9.05011 206.543 9.05011C205.128 9.05011 203.987 9.42445 203.119 10.1731C202.252 10.8777 201.818 11.9127 201.818 13.2779C201.818 14.7752 202.548 15.9423 204.01 16.779C205.471 17.6158 207.753 18.5186 210.858 19.4875C213.963 20.5004 216.474 21.4692 218.391 22.3941C220.355 23.3189 222.044 24.6621 223.459 26.4237C224.875 28.1853 225.582 30.4533 225.582 33.2278C225.582 35.8702 224.875 38.2703 223.459 40.4282C222.09 42.5862 220.081 44.3037 217.433 45.5809C214.785 46.858 211.657 47.4966 208.05 47.4966Z"></path>
                    <path d="M268.813 28.0091C268.813 29.0661 268.744 30.167 268.607 31.3121H242.103C242.286 33.6021 243.039 35.3637 244.363 36.5968C245.733 37.7859 247.4 38.3804 249.363 38.3804C252.285 38.3804 254.317 37.1913 255.458 34.8132H267.922C267.283 37.2354 266.119 39.4153 264.43 41.3531C262.786 43.2908 260.709 44.8102 258.197 45.9112C255.686 47.0121 252.878 47.5626 249.774 47.5626C246.03 47.5626 242.697 46.792 239.775 45.2506C236.853 43.7092 234.57 41.5072 232.926 38.6446C231.283 35.7821 230.461 32.4351 230.461 28.6036C230.461 24.7722 231.26 21.4252 232.858 18.5626C234.501 15.7001 236.784 13.4981 239.706 11.9567C242.628 10.4153 245.984 9.64465 249.774 9.64465C253.472 9.64465 256.759 10.3933 259.636 11.8907C262.512 13.388 264.749 15.5239 266.347 18.2984C267.991 21.0729 268.813 24.3098 268.813 28.0091ZM256.828 25.0364C256.828 23.0987 256.143 21.5573 254.773 20.4123C253.403 19.2673 251.691 18.6948 249.637 18.6948C247.674 18.6948 246.007 19.2453 244.637 20.3462C243.313 21.4472 242.491 23.0106 242.172 25.0364H256.828Z"></path>
                    <path d="M272.662 28.5376C272.662 24.7502 273.393 21.4252 274.854 18.5626C276.36 15.7001 278.392 13.4981 280.949 11.9567C283.506 10.4153 286.359 9.64465 289.51 9.64465C292.203 9.64465 294.555 10.1731 296.564 11.2301C298.618 12.287 300.193 13.6743 301.289 15.3918V10.1731H313V47.0342H301.289V41.8155C300.148 43.533 298.55 44.9203 296.495 45.9772C294.486 47.0342 292.135 47.5626 289.441 47.5626C286.336 47.5626 283.506 46.792 280.949 45.2506C278.392 43.6651 276.36 41.4412 274.854 38.5786C273.393 35.672 272.662 32.325 272.662 28.5376ZM301.289 28.6036C301.289 25.7851 300.467 23.5611 298.824 21.9317C297.226 20.3022 295.262 19.4875 292.934 19.4875C290.605 19.4875 288.619 20.3022 286.976 21.9317C285.378 23.5171 284.579 25.7191 284.579 28.5376C284.579 31.3561 285.378 33.6021 286.976 35.2756C288.619 36.9051 290.605 37.7198 292.934 37.7198C295.262 37.7198 297.226 36.9051 298.824 35.2756C300.467 33.6462 301.289 31.4222 301.289 28.6036Z"></path>
                  </svg>
                </div>

                <img className="h-8 w-auto sm:h-10" src={opensea} alt="" />
              </div>
            </a>

            <div className="-my-2 -mr-2 md:hidden">
              <Popover.Button className="inline-flex items-center justify-center rounded-md  p-2 text-gray-400 hover:bg-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                <span className="sr-only">Open menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </Popover.Button>
            </div>
            <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
              <form className="flex items-center">
                <label htmlFor="voice-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-white dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="voice-search"
                    className="bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-96 pl-10 p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                    placeholder="Search items, collections, and accounts"
                    required
                  />
                  <div
                    className="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none"
                    id="slash-icon"
                  >
                    /
                  </div>
                </div>
              </form>
            </div>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex">
              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-white",
                        "group inline-flex items-center rounded-md text-base font-medium hover:text-gray-900 focus:outline-none"
                      )}
                    >
                      <span>Solutions</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-white"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6  px-5 py-6 sm:gap-8 sm:p-8">
                            {solutions.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-white">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="space-y-6 bg-gray-50 px-5 py-5 sm:flex sm:space-y-0 sm:space-x-10 sm:px-8">
                            {callsToAction.map((item) => (
                              <div key={item.name} className="flow-root">
                                <a
                                  href={item.href}
                                  className="-m-3 flex items-center rounded-md p-3 text-base font-medium text-gray-900 hover:bg-gray-100"
                                >
                                  <item.icon
                                    className="h-6 w-6 flex-shrink-0 text-gray-400"
                                    aria-hidden="true"
                                  />
                                  <span className="ml-3">{item.name}</span>
                                </a>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <a
                href="/#"
                className="text-base font-medium text-white hover:text-gray-900"
              >
                Pricing
              </a>
              <a
                href="/#"
                className="text-base font-medium text-white hover:text-gray-900"
              >
                Docs
              </a>

              <Popover className="relative">
                {({ open }) => (
                  <>
                    <Popover.Button
                      className={classNames(
                        open ? "text-gray-900" : "text-white",
                        "group inline-flex items-center rounded-md  text-base font-medium hover:text-gray-900 focus:outline-none "
                      )}
                    >
                      <span>More</span>
                      <ChevronDownIcon
                        className={classNames(
                          open ? "text-gray-600" : "text-gray-400",
                          "ml-2 h-5 w-5 group-hover:text-white"
                        )}
                        aria-hidden="true"
                      />
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute left-1/2 z-10 mt-3 w-screen max-w-md -translate-x-1/2 transform px-2 sm:px-0">
                        <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                          <div className="relative grid gap-6  px-5 py-6 sm:gap-8 sm:p-8">
                            {resources.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                              >
                                <item.icon
                                  className="h-6 w-6 flex-shrink-0 text-indigo-600"
                                  aria-hidden="true"
                                />
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    {item.name}
                                  </p>
                                  <p className="mt-1 text-sm text-white">
                                    {item.description}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                          <div className="bg-gray-50 px-5 py-5 sm:px-8 sm:py-8">
                            <div>
                              <h3 className="text-base font-medium text-white">
                                Recent Posts
                              </h3>
                              <ul role="list" className="mt-4 space-y-4">
                                {recentPosts.map((post) => (
                                  <li
                                    key={post.id}
                                    className="truncate text-base"
                                  >
                                    <a
                                      href={post.href}
                                      className="font-medium text-gray-900 hover:text-gray-700"
                                    >
                                      {post.name}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-5 text-sm">
                              <a
                                href="/#"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                              >
                                View all posts
                                <span aria-hidden="true"> &rarr;</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </Popover.Group>
            <Popover.Group as="nav" className="hidden space-x-10 md:flex ">
              <a
                href="/#"
                className="text-base font-medium text-white hover:text-gray-900"
              >
                <FontAwesomeIcon icon={faUserAlt} color="#fff" />
              </a>
              <a
                href="/#"
                className="text-base font-medium text-white hover:text-gray-900"
              >
                <FontAwesomeIcon icon={faWallet} color="#fff" />
              </a>

              <a
                href="/#"
                className="text-base font-medium text-white hover:text-gray-900"
              >
                <FontAwesomeIcon icon={faCartShopping} color="#fff" />
              </a>
            </Popover.Group>
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
          >
            <div className="divide-y-2 divide-gray-50 rounded-lg  shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 pb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                      alt="Your Company"
                    />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md  p-2 text-gray-400 hover:bg-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {solutions.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-gray-50"
                      >
                        <item.icon
                          className="h-6 w-6 flex-shrink-0 text-indigo-600"
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
              <div className="space-y-6 py-6 px-5">
                <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                  <a
                    href="/#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Pricing
                  </a>

                  <a
                    href="/#"
                    className="text-base font-medium text-gray-900 hover:text-gray-700"
                  >
                    Docs
                  </a>
                  {resources.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div>
                  <a
                    href="/#"
                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                  >
                    Sign up
                  </a>
                  <p className="mt-6 text-center text-base font-medium text-white">
                    Existing customer?{" "}
                    <a
                      href="/#"
                      className="text-indigo-600 hover:text-indigo-500"
                    >
                      Sign in
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </>
  );
}
