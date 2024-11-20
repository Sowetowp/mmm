"use client";
import React, { useEffect, useState } from 'react'

interface CarouselProps {
    view: string,
    details: any,
    updateText: any,
    production: boolean
}

const Happy: React.FC<CarouselProps> = ({ view, details, updateText, production }) => {
    const [started, setStarted] = useState<boolean>(false);
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const [count2, setCount2] = useState(0)
    const [count3, setCount3] = useState(0)

    useEffect(() => {
        if (production) {
            if (view === "happy") {
                setStarted(true);
            }
            if (!started) {
                return
            }
            let interval: NodeJS.Timeout;
            if (count < details[0].val || count1 < details[1].val || count2 < details[2].val || count3 < details[3].val) {
                interval = setInterval(() => {
                    setCount((prevCount: number) => (prevCount < details[0].val ? prevCount + 1 : prevCount));
                    setCount1((prevCount1: number) => (prevCount1 < details[1].val ? prevCount1 + 1 : prevCount1));
                    setCount2((prevCount2: number) => (prevCount2 < details[2].val ? prevCount2 + 1 : prevCount2));
                    setCount3((prevCount3: number) => (prevCount3 < details[3].val ? prevCount3 + 1 : prevCount3));
                }, 1);

                return () => {
                    clearInterval(interval);
                };
            }
            return () => {
                if (interval) {
                    clearInterval(interval);
                }
            };
        }
    }, [view, started, details]);

    const counts = [count, count1, count2, count3]
    // useEffect(() => {
    //     if (typeof window !== 'undefined') {
    //         const handleScroll = () => {
    //             setScrollHeader(window.pageYOffset > 3000);
    //         };
    //         const debouncedHandleScroll = debounce(handleScroll, 50);
    //         window.addEventListener('scroll', debouncedHandleScroll);
    //         return () => {
    //             window.removeEventListener('scroll', debouncedHandleScroll);
    //         };
    //     }
    // }, []);

    // const debounce = <T extends (...args: any[]) => void>(func: T, wait: number): (...args: Parameters<T>) => void => {
    //     let timeout: NodeJS.Timeout;
    //     return (...args: Parameters<T>) => {
    //         const later = () => {
    //             clearTimeout(timeout);
    //             func(...args);
    //         };
    //         clearTimeout(timeout);
    //         timeout = setTimeout(later, wait);
    //     };
    // };

    useEffect(() => {
        if (!production) {
            setCount(details[0].val)
            setCount1(details[1].val)
            setCount2(details[2].val)
            setCount3(details[3].val)
        }
    }, [details])

    useEffect(() => {
        if (production) {
            setCount(0)
            setCount1(0)
            setCount2(0)
            setCount3(0)
        }
    }, [production])

    return (
        <>
            <section id='happy' className='w-full m-auto relative max-w-[90rem] flex items-center flex-wrap bg-stone-50 py-4 px-16'>
                {details.map((det: any, index: any) => (
                    <div key={index} className='xl:w-1/4 md:w-1/2 w-full text-center py-8'>
                        {det.img}
                        <p className='text-2xl font-medium mt-2' onClick={() => updateText(`details${index}val`, 999999999999999)}>{counts[index]}</p>
                        <p className='mt-1 text-[0.8rem] text-gray-500' onClick={() => updateText(`details${index}det`, 17)}>{det.det}</p>
                    </div>
                ))}
            </section>
        </>
    )
}

export default Happy