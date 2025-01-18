"use client";
import React, { useEffect, useState } from 'react'

interface CarouselProps {
    view: string;
    navData: any;
    updateText: any;
    production: any;
    email: any;
    emailModal: any;
    submitHandler: any;
}

const Navbar: React.FC<CarouselProps> = ({ view, submitHandler, navData, updateText, production, email, emailModal }) => {
    const [scrollHeader, setScrollHeader] = useState(false)
    const [menu, setMenu] = useState(false)
    const [current, setCurrent] = useState("sec1")
    useEffect(() => {
        if (view) {
            setCurrent(view)
        }
    }, [view])
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleScroll = () => {
                setScrollHeader(window.pageYOffset > 200);
            };
            const debouncedHandleScroll = debounce(handleScroll, 50);
            window.addEventListener('scroll', debouncedHandleScroll);
            return () => {
                window.removeEventListener('scroll', debouncedHandleScroll);
            };
        }
    }, []);

    const debounce = <T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void => {
        let timeout: NodeJS.Timeout;
        return (...args: Parameters<T>) => {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    };

    const handleMenuChange = (e: any) => {
        if (e.target.checked) {
            setMenu(true)
        } else {
            setMenu(false)
        }
    }
    return (
        <>
            <header className={`w-full max-w-[95rem] m-auto transition-colors duration-500 ${scrollHeader ? "fixed z-[9999] bg-white shadow" : "relative z-[9999] md:bg-transparent"}`}>
                {/* {!production &&
                    <section className={`bg-white py-3 flex items-center gap-3 justify-end px-3 ${scrollHeader ? "hidden" : "block"}`}>
                        <p className='text-xs font-medium cursor-pointer text-blue-500' onClick={() => emailModal(true)}>{email}</p>
                        <button onClick={() => submitHandler()} className="action_has has_saved text-xs font-medium" aria-label="save" type="button">
                            Save
                            <svg
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                strokeLinejoin="round"
                                strokeLinecap="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                fill="none"
                            >
                                <path
                                    d="m19,21H5c-1.1,0-2-.9-2-2V5c0-1.1.9-2,2-2h11l5,5v11c0,1.1-.9,2-2,2Z"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    data-path="box"
                                ></path>
                                <path
                                    d="M7 3L7 8L15 8"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    data-path="line-top"
                                ></path>
                                <path
                                    d="M17 20L17 13L7 13L7 20"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    data-path="line-bottom"
                                ></path>
                            </svg>
                        </button>
                    </section>
                } */}
                <section className='w-full py-4 md:py-7 px-3 md:px-8 xl:px-16 flex items-center justify-between'>
                    <img alt="" className={`w-28 leading-none tracking-widest`} src="/Tecnologo.png"/>
                    {/* <h1 className={`text-xl leading-none tracking-widest ${scrollHeader ? "text-black" : "text-white"}`} onClick={() => updateText("navData", 5)}>{navData}</h1> */}
                    <div className='md:flex gap-8 items-center hidden'>
                        <a href='#sec1' className={`${scrollHeader && current === "sec1" ? "text-[#A4B72E]" : scrollHeader ? "text-black" : "text-white"} hover:text-[#004436] text-[0.8rem] font-semibold`}>HOME</a>
                        <a className={`${current === "sec2" ? "text-[#A4B72E]" : scrollHeader ? "text-black" : "text-white"} text-[0.8rem] hover:text-[#004436] font-semibold`} href="#sec2">ABOUT</a>
                        <a className={`${current === "sec4" ? "text-[#A4B72E]" : scrollHeader ? "text-black" : "text-white"} text-[0.8rem] hover:text-[#004436] font-semibold`} href="#sec4">SERVICES</a>
                        {/* <a className={`${current === "sec5" ? "text-[#A4B72E]" : scrollHeader ? "text-black" : "text-white"} text-[0.8rem] hover:text-[#004436] font-semibold`} href="#sec5">TEAM</a> */}
                        <a className={`${current === "sec6" ? "text-[#A4B72E]" : scrollHeader ? "text-black" : "text-white"} text-[0.8rem] hover:text-[#004436] font-semibold`} href="#sec6">WORK</a>
                        {/* <a className={`${current === "sec7" ? "text-[#A4B72E]" : scrollHeader ? "text-black" : "text-white"} text-[0.8rem] hover:text-[#004436] font-semibold`} href="#sec7">BLOG</a> */}
                        <a className={`${current === "sec8" ? "text-[#A4B72E]" : scrollHeader ? "text-black" : "text-white"} text-[0.8rem] hover:text-[#004436] font-semibold`} href="#sec8">CONTACT</a>
                    </div>
                    <div className='md:hidden'>
                        <label>
                            <div className="w-9 h-10 cursor-pointer flex flex-col items-center justify-center">
                                <input onChange={(e) => handleMenuChange(e)} className="hidden peer" type="checkbox" />
                                <div className={`w-[50%] h-[2px] ${scrollHeader ? "bg-black" : "bg-white"} rounded-sm transition-all duration-300 origin-left translate-y-[0.45rem] peer-checked:rotate-[-45deg]`} ></div>
                                <div className={`w-[50%] h-[2px] ${scrollHeader ? "bg-black" : "bg-white"} rounded-md transition-all duration-300 origin-center peer-checked:hidden`} ></div>
                                <div className={`w-[50%] h-[2px] ${scrollHeader ? "bg-black" : "bg-white"} rounded-md transition-all duration-300 origin-left -translate-y-[0.45rem] peer-checked:rotate-[45deg]`} ></div>
                            </div>
                        </label>
                    </div>
                </section>
            </header>
            <section className={`w-full m-auto max-w-[90rem] md:hidden flex-col flex bg-[#000000de] transition-transform duration-500 ${scrollHeader ? "fixed top-[4.5rem]" : "relative"} z-[9999]`} style={{ transform: `translateX(${menu ? "0%" : "100%"})` }}>
                <a className='text-white text-[0.8rem] font-semibold py-2 text-center' href='#sec1'>HOME</a>
                <a className='text-white text-[0.8rem] font-semibold py-2 text-center' href="#sec2">ABOUT</a>
                <a className='text-white text-[0.8rem] font-semibold py-2 text-center' href="#sec4">SERVICES</a>
                {/* <a className='text-white text-[0.8rem] font-semibold py-2 text-center' href="#sec5">TEAM</a> */}
                <a className='text-white text-[0.8rem] font-semibold py-2 text-center' href="#sec6">WORK</a>
                {/* <a className='text-white text-[0.8rem] font-semibold py-2 text-center' href="#sec7">BLOG</a> */}
                <a className='text-white text-[0.8rem] font-semibold py-2 text-center' href="#sec8">CONTACT</a>
            </section>
        </>
    )
}

export default Navbar