import { useState } from 'react'
import logo from '../../assets/vscode.ico'
import { ModeToggle } from '../mode-toggle'

export const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleClick = () => {
        setNav(!nav);
        console.log(nav);
    }

    return (
        <>
            <div>

                <div className='hidden lg:block'>
                    <div className='flex justify-between custom-padding py-3 items-center'>
                        <div className='flex items-center space-x-8'>
                            <div className='flex items-center space-x-3.5'>
                                <img src={logo} alt="VS LOGO" className="w-6 h-6" />
                                <h1 className='text-xl font-semibold'>Visual Studio Code</h1>
                            </div>
                            <ul className='flex space-x-6 justify-between border-solid dark:text-neutral-400 font-semibold '>
                                <li className='transition-colors duration-100 dark:hover:text-white'>Docs</li>
                                <li className='transition-colors duration-100 dark:hover:text-white'>Updates</li>
                                <li className='transition-colors duration-100 dark:hover:text-white'>Blog</li>
                                <li className='transition-colors duration-100 dark:hover:text-white'>API</li>
                                <li className='transition-colors duration-100 dark:hover:text-white'>Extensions</li>
                                <li className='transition-colors duration-100 dark:hover:text-white'>FAQ</li>
                                <li className='transition-colors duration-100 dark:hover:text-white'>Learn</li>
                            </ul>
                        </div>


                        <div className="flex items-center space-x-2">
                            <div className='w-7 h-7 mb-1'>
                                <ModeToggle />
                            </div>

                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='flex-shrink-0 dark:text-neutral-400 xl:hidden block'>
                                <path d="M9.27531 0C5.96189 0 3.27584 2.68606 3.27584 5.99947C3.27584 7.60086 3.90325 9.0557 4.92567 10.1316L0 15.0573L0.942726 16L5.94933 10.9934C6.90125 11.6286 8.04503 11.9989 9.27531 11.9989C12.5887 11.9989 15.2748 9.31289 15.2748 5.99947C15.2748 2.68606 12.5887 0 9.27531 0ZM4.60905 5.99947C4.60905 3.42237 6.69821 1.33322 9.27531 1.33322C11.8524 1.33322 13.9416 3.42237 13.9416 5.99947C13.9416 8.57658 11.8524 10.6657 9.27531 10.6657C6.69821 10.6657 4.60905 8.57658 4.60905 5.99947Z" fill="currentColor" />
                            </svg>

                            <div className="flex items-center space-x-2 border p-0.5 px-2 rounded-md h-8 w-52 group focus-within:border-blue-500 xl:flex hidden">
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='flex-shrink-0 dark:text-neutral-400'>
                                    <path d="M9.27531 0C5.96189 0 3.27584 2.68606 3.27584 5.99947C3.27584 7.60086 3.90325 9.0557 4.92567 10.1316L0 15.0573L0.942726 16L5.94933 10.9934C6.90125 11.6286 8.04503 11.9989 9.27531 11.9989C12.5887 11.9989 15.2748 9.31289 15.2748 5.99947C15.2748 2.68606 12.5887 0 9.27531 0ZM4.60905 5.99947C4.60905 3.42237 6.69821 1.33322 9.27531 1.33322C11.8524 1.33322 13.9416 3.42237 13.9416 5.99947C13.9416 8.57658 11.8524 10.6657 9.27531 10.6657C6.69821 10.6657 4.60905 8.57658 4.60905 5.99947Z" fill="currentColor" />
                                </svg>
                                <input type="text" name="docs" placeholder="Search Docs" className="dark:bg-black placeholder:text-black dark:placeholder:text-neutral-400 outline-none placeholder:text-sm flex-grow min-w-0" />
                            </div>
                            <button className='bg-[#0078d4] p-1 w-24 text-white rounded'>Download</button>
                        </div>
                    </div>
                </div>

                <div className='lg:hidden dark:bg-black'>
                    <div className='flex justify-between p-2'>
                        <div className='flex items-center space-x-3.5'>
                            <img src={logo} alt="VS LOGO" className="w-6 h-6" />
                            <h1 className='text-xl font-semibold'>Visual Studio Code</h1>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 z-10" onClick={handleClick}>
                            <path strokeLinecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </div>

                    <div className={`${
                        nav ? 'dark:text-neutral-400 opacity-100 transform translate-x-0 duration-500' : 'opacity-0 transform -translate-y-full duration-500'} transition-transform absolute top-15 left-0 overflow-y-scroll w-full h-44 dark:bg-black flex flex-col space-y-3`}>
                        <ul className='space-y-2 ml-5 mt-2'>
                            <li className='dark:hover:text-white'>Docs</li>
                            <li className='dark:hover:text-white'>Updates</li>
                            <li className='dark:hover:text-white'>Blog</li>
                            <li className='dark:hover:text-white'>API</li>
                            <li className='dark:hover:text-white'>Extensions</li>
                            <li className='dark:hover:text-white'>FAQ</li>
                            <li className='dark:hover:text-white'>Learn</li>
                        </ul>

                        <div className="flex items-center space-x-4">
                            <div className='w-7 h-7 mb-1'>
                                <ModeToggle />
                            </div>

                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className='flex-shrink-0 dark:text-neutral-400 xl:hidden block'>
                                <path d="M9.27531 0C5.96189 0 3.27584 2.68606 3.27584 5.99947C3.27584 7.60086 3.90325 9.0557 4.92567 10.1316L0 15.0573L0.942726 16L5.94933 10.9934C6.90125 11.6286 8.04503 11.9989 9.27531 11.9989C12.5887 11.9989 15.2748 9.31289 15.2748 5.99947C15.2748 2.68606 12.5887 0 9.27531 0ZM4.60905 5.99947C4.60905 3.42237 6.69821 1.33322 9.27531 1.33322C11.8524 1.33322 13.9416 3.42237 13.9416 5.99947C13.9416 8.57658 11.8524 10.6657 9.27531 10.6657C6.69821 10.6657 4.60905 8.57658 4.60905 5.99947Z" fill="currentColor" />
                            </svg>

                            <button className='bg-[#0078d4] p-1 w-24 text-white rounded'>Download</button>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}