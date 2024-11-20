"use client";
import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import { throttle } from '../lib/throttle';

interface CarouselProps {
    view: string;
    slides: any;
    navData: any;
    updateText: any;
    updateImage: any;
    production: any;
    email: any;
    emailModal: any;
    submitHandler: any;
}

const Carousel: React.FC<CarouselProps> = ({ view, slides, submitHandler, navData, updateText, updateImage, production, email, emailModal }) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const prevIndex = useRef(0)
    const nextRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        if (!production) {
            return
        }
        const intervalId = setInterval(() => {
            if (nextRef.current) {
                nextRef.current.click();
            }
        }, 7000);

        return () => clearInterval(intervalId);
    }, [production]);

    const position = (index: number) => {
        if (index === currentIndex) {
            return "0%"
        } else if (currentIndex === 0 && index === slides.length - 1 && prevIndex.current === 1) {
            return "-100%"
        } else if (currentIndex === 1 && prevIndex.current === 2 && index === 0) {
            return "-100%"
        } else if (prevIndex.current < currentIndex && index === currentIndex - 1) {
            return "-100%"
        } else if (currentIndex === 0 && prevIndex.current === slides.length - 1 && index === 1) {
            return "100%"
        } else if (currentIndex === 0 && prevIndex.current === slides.length - 1 && index === slides.length - 1) {
            return "-100%"
        } else if (currentIndex === slides.length - 1 && index === 0) {
            return "100%"
        } else if (currentIndex !== 0 && prevIndex.current === 0 && index > currentIndex) {
            return "100%"
        } else if (prevIndex.current === 0 && currentIndex === 0 && index === 1) {
            return "100%"
        } else if (prevIndex.current === 0 && currentIndex === 0 && index === slides.length - 1) {
            return "-100%"
        } else if (index > currentIndex && prevIndex.current === index) {
            return "100%"
        } else if (index < currentIndex && prevIndex.current === index) {
            return "-100%"
        } else if (currentIndex === slides.length - 1 && prevIndex.current === 0 && index === 0) {
            return "100%"
        }
    }

    const handleParentClick = (event: any, index: number) => {
        if (event.target === event.currentTarget) {
            updateImage(`slides${index}img`)
        }
    };

    const throttledNextRef = useRef<() => void>(() => { });
    const throttledPrevRef = useRef<() => void>(() => { });
    useEffect(() => {
        prevIndex.current = currentIndex
    }, [currentIndex])
    useEffect(() => {
        throttledNextRef.current = throttle(() => {
            setCurrentIndex((prevIndexx) =>
                prevIndexx === slides.length - 1 ? 0 : prevIndexx + 1
            );
        }, 500);

        throttledPrevRef.current = throttle(() => {
            setCurrentIndex((prevIndexx) =>
                prevIndexx === 0 ? slides.length - 1 : prevIndexx - 1
            );
        }, 500);
    }, [slides.length]);

    return (
        <>
            <section id='sec1' className='max-h-[45rem] xl:h-screen 2xl:h-[40vh] h-[60vh] bg-black m-auto w-full overflow-hidden max-w-[90rem] relative'>
                {slides.map((slide: any, index: any) => (
                    // <div key={index} className={`h-full w-full absolute ${currentIndex === index || prevIndex.current === index ? "z-[11]" : "z-10"} transition-transform duration-700`} style={{ transform: `translateX(${position(index)})` }}>
                    <div key={index} className={`h-full w-full  ${currentIndex === index || prevIndex.current === index ? "z-[11] opacity-100" : "z-10 opacity-0"} absolute transition-transform duration-700`} style={{ transform: `translateX(${position(index)})` }}>
                        <div onClick={(e) => handleParentClick(e, index)} className='h-full w-full absolute text-center bg-[#0000009e] flex justify-center items-center'>
                            <span className='mt-20'>
                                <p className='text-white font-bold text-5xl px-2' onClick={() => updateText(`slides${index}title`, 20)}>{slide.title}</p>
                                <p className='text-white mt-3 max-w-[95%] m-auto' onClick={() => updateText(`slides${index}details`, 78)}>{slide.details}</p>
                                <a href={slide.url} className='mt-8 px-5 py-3 bg-[#004436] inline-block text-xs text-white font-semibold'>{slide.btn}</a>
                            </span>
                        </div>
                        <img onClick={() => updateImage(`slides${index}img`)} className='h-full w-full object-cover' src={slide.img} alt="" />
                    </div>
                ))}
                <button onClick={() => throttledPrevRef.current && throttledPrevRef.current()} className='absolute z-20 md:left-5 left-0 h-full'>
                    <svg className='w-7' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#fff"></path> </g></svg>
                </button>
                <button ref={nextRef} onClick={() => throttledNextRef.current && throttledNextRef.current()} className='absolute z-20 md:right-5 right-0 h-full'>
                    <svg className='w-7' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.71069 18.2929C10.1012 18.6834 10.7344 18.6834 11.1249 18.2929L16.0123 13.4006C16.7927 12.6195 16.7924 11.3537 16.0117 10.5729L11.1213 5.68254C10.7308 5.29202 10.0976 5.29202 9.70708 5.68254C9.31655 6.07307 9.31655 6.70623 9.70708 7.09676L13.8927 11.2824C14.2833 11.6729 14.2833 12.3061 13.8927 12.6966L9.71069 16.8787C9.32016 17.2692 9.32016 17.9023 9.71069 18.2929Z" fill="#fff"></path> </g></svg>
                </button>
                <div className='absolute z-20 flex gap-1 w-full justify-center bottom-4'>
                    {slides.map((slide: any, index: any) => (
                        <div onClick={() => setCurrentIndex(index)} key={index} className={`${index === currentIndex ? "bg-white" : ""} border-2 border-white w-3 h-3 rounded-full`}></div>
                    ))}
                </div>
                <Navbar submitHandler={submitHandler} emailModal={emailModal} view={view} navData={navData} updateText={updateText} production={production} email={email} />
            </section>
        </>
    )
}

export default Carousel