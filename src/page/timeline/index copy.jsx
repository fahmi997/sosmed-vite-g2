/* eslint-disable react/no-unknown-property */
import "./style.css"
import { MdVerified } from "react-icons/md"

const TimelinePage = () => {
    return <>
        <section className="layout">
            <header className="border border-black flex justify-between items-center pr-20">
                <img src="./z.png" alt="logo" className="w-2" />
                <div className="inline-flex items-center">
                    <div className="">
                        <button type="button" data-dropdown-toggle="dropdownAvatarName" className="border border-black flex items-center text-sm font-medium text-black rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-black">
                            <img src="https://bit.ly/dan-abramov" alt="profile" className="w-12 h-12 mr-2 rounded-full" />
                            user1
                            <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                            </svg>
                        </button>
                        {/* Dropdown Menu */}
                        <div id="dropdownAvatarName" className="z-10 block absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                            <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                <div className="font-medium ">Pro User</div>
                                <div className="truncate">name@flowbite.com</div>
                            </div>
                            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                </li>
                                <li>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                                </li>
                            </ul>
                            <div className="py-2">
                                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </section>
    </>
};

export default TimelinePage;